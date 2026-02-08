import express from 'express';
import cors from 'cors';
import { storage } from '../server/storage';
import bcrypt from 'bcryptjs';
import { authMiddleware, adminOnly, generateToken, type AuthRequest } from '../server/auth';

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/api', (req, res) => {
  res.json({ status: 'ok', message: 'Sunson Technology API' });
});

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await storage.getUserByUsername(username);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });
  
  const token = generateToken(user.id, user.role);
  res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
});

// Products routes
app.get('/api/products', async (req, res) => {
  const products = await storage.getProducts();
  res.json(products);
});

app.post('/api/products', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  const product = await storage.createProduct(req.body);
  res.status(201).json(product);
});

app.put('/api/products/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  const product = await storage.updateProduct(req.params.id, req.body);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.delete('/api/products/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  const deleted = await storage.deleteProduct(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Product not found' });
  res.status(204).send();
});

// Solutions routes
app.get('/api/solutions', async (req, res) => {
  const solutions = await storage.getSolutions();
  res.json(solutions);
});

app.post('/api/solutions', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  const solution = await storage.createSolution(req.body);
  res.status(201).json(solution);
});

app.put('/api/solutions/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  const solution = await storage.updateSolution(req.params.id, req.body);
  if (!solution) return res.status(404).json({ message: 'Solution not found' });
  res.json(solution);
});

app.delete('/api/solutions/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  const deleted = await storage.deleteSolution(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Solution not found' });
  res.status(204).send();
});

// News routes
app.get('/api/news', async (req, res) => {
  const posts = await storage.getNewsPosts();
  res.json(posts);
});

app.post('/api/news', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  const post = await storage.createNewsPost(req.body);
  res.status(201).json(post);
});

app.put('/api/news/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  const post = await storage.updateNewsPost(req.params.id, req.body);
  if (!post) return res.status(404).json({ message: 'News post not found' });
  res.json(post);
});

app.delete('/api/news/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  const deleted = await storage.deleteNewsPost(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'News post not found' });
  res.status(204).send();
});

// Hero slides routes
app.get('/api/hero-slides', async (req, res) => {
  const slides = await storage.getHeroSlides();
  res.json(slides);
});

// Company info routes
app.get('/api/company-info', async (req, res) => {
  const info = await storage.getCompanyInfo();
  if (!info) return res.status(404).json({ message: 'Company info not found' });
  res.json(info);
});

export default app;
