import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { upload } from "./upload";
import express from "express";
import bcrypt from "bcryptjs";
import { authMiddleware, adminOnly, generateToken, type AuthRequest } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/", (req, res) => {
    res.json({ 
      status: "ok", 
      message: "Sunson Technology API Server",
      endpoints: [
        "/api/products",
        "/api/solutions",
        "/api/hero-slides",
        "/api/news",
        "/api/company-info"
      ]
    });
  });

  // Products API
  app.get("/api/products", async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get("/api/products/:id", async (req, res) => {
    const product = await storage.getProduct(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  });

  app.post("/api/products", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const product = await storage.createProduct(req.body);
    res.status(201).json(product);
  });

  app.put("/api/products/:id", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const product = await storage.updateProduct(req.params.id, req.body);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  });

  app.delete("/api/products/:id", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const deleted = await storage.deleteProduct(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.status(204).send();
  });

  // Solutions API
  app.get("/api/solutions", async (req, res) => {
    const solutions = await storage.getSolutions();
    res.json(solutions);
  });

  app.get("/api/solutions/:id", async (req, res) => {
    const solution = await storage.getSolution(req.params.id);
    if (!solution) return res.status(404).json({ message: "Solution not found" });
    res.json(solution);
  });

  app.post("/api/solutions", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const solution = await storage.createSolution(req.body);
    res.status(201).json(solution);
  });

  app.put("/api/solutions/:id", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const solution = await storage.updateSolution(req.params.id, req.body);
    if (!solution) return res.status(404).json({ message: "Solution not found" });
    res.json(solution);
  });

  app.delete("/api/solutions/:id", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const deleted = await storage.deleteSolution(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Solution not found" });
    res.status(204).send();
  });

  // Hero Slides API
  app.get("/api/hero-slides", async (req, res) => {
    const slides = await storage.getHeroSlides();
    res.json(slides);
  });

  app.get("/api/hero-slides/:id", async (req, res) => {
    const slide = await storage.getHeroSlide(req.params.id);
    if (!slide) return res.status(404).json({ message: "Hero slide not found" });
    res.json(slide);
  });

  app.post("/api/hero-slides", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const slide = await storage.createHeroSlide(req.body);
    res.status(201).json(slide);
  });

  app.put("/api/hero-slides/:id", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const slide = await storage.updateHeroSlide(req.params.id, req.body);
    if (!slide) return res.status(404).json({ message: "Hero slide not found" });
    res.json(slide);
  });

  app.delete("/api/hero-slides/:id", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const deleted = await storage.deleteHeroSlide(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Hero slide not found" });
    res.status(204).send();
  });

  // News API
  app.get("/api/news", async (req, res) => {
    const posts = await storage.getNewsPosts();
    res.json(posts);
  });

  app.get("/api/news/:id", async (req, res) => {
    const post = await storage.getNewsPost(req.params.id);
    if (!post) return res.status(404).json({ message: "News post not found" });
    res.json(post);
  });

  app.post("/api/news", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const post = await storage.createNewsPost(req.body);
    res.status(201).json(post);
  });

  app.put("/api/news/:id", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const post = await storage.updateNewsPost(req.params.id, req.body);
    if (!post) return res.status(404).json({ message: "News post not found" });
    res.json(post);
  });

  app.delete("/api/news/:id", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const deleted = await storage.deleteNewsPost(req.params.id);
    if (!deleted) return res.status(404).json({ message: "News post not found" });
    res.status(204).send();
  });

  // Company Info API
  app.get("/api/company-info", async (req, res) => {
    const info = await storage.getCompanyInfo();
    if (!info) return res.status(404).json({ message: "Company info not found" });
    res.json(info);
  });

  app.put("/api/company-info", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const info = await storage.updateCompanyInfo(req.body);
    res.json(info);
  });

  // File Upload API
  app.post("/api/upload", authMiddleware, upload.single('file'), (req: AuthRequest, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.json({
      message: "File uploaded successfully",
      filename: req.file.filename,
      url: `/uploads/${req.file.filename}`,
      size: req.file.size,
      mimetype: req.file.mimetype
    });
  });

  app.use('/uploads', express.static('uploads'));

  // Auth API
  app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;
    
    console.log('Login attempt for:', username);
    
    const user = await storage.getUserByUsername(username);
    if (!user) {
      console.log('User not found:', username);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log('User found, checking password');
    const isValid = await bcrypt.compare(password, user.password);
    console.log('Password valid:', isValid);
    
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user.id, user.role);
    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  });

  app.post("/api/auth/register", authMiddleware, adminOnly, async (req: AuthRequest, res) => {
    const { username, password, role } = req.body;
    
    const existing = await storage.getUserByUsername(username);
    if (existing) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await storage.createUser({ username, password: hashedPassword, role: role || 'user' });
    
    res.status(201).json({ id: user.id, username: user.username, role: user.role });
  });

  app.get("/api/auth/me", authMiddleware, async (req: AuthRequest, res) => {
    const user = await storage.getUser(req.userId!);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ id: user.id, username: user.username, role: user.role });
  });

  // Debug endpoint
  app.get("/api/debug/storage", async (req, res) => {
    const hasDb = !!process.env.DATABASE_URL;
    const user = await storage.getUserByUsername('SunsonTech');
    res.json({ 
      hasDatabase: hasDb, 
      userExists: !!user,
      username: user?.username,
      hasPassword: !!user?.password
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
