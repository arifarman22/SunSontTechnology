import express, { Request, Response } from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { neon } from '@neondatabase/serverless';

const JWT_SECRET = process.env.JWT_SECRET || 'sunson_tech_secret_2024';

interface AuthRequest extends Request {
  userId?: string;
  userRole?: string;
}

const authMiddleware = (req: AuthRequest, res: Response, next: Function) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Authentication required' });
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
    req.userId = decoded.userId;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const adminOnly = (req: AuthRequest, res: Response, next: Function) => {
  if (req.userRole !== 'admin') return res.status(403).json({ message: 'Admin access required' });
  next();
};

const generateToken = (userId: string, role: string): string => {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '7d' });
};

if (!process.env.DATABASE_URL) {
  console.error('FATAL: DATABASE_URL environment variable is not set');
}

const sql = neon(process.env.DATABASE_URL || '');

let dbInitialized = false;

async function ensureTablesExist() {
  if (dbInitialized) return;
  try {
    await sql`CREATE TABLE IF NOT EXISTS users (id VARCHAR(255) PRIMARY KEY DEFAULT gen_random_uuid()::text, username VARCHAR(255) UNIQUE NOT NULL, password TEXT NOT NULL, role VARCHAR(50) NOT NULL DEFAULT 'user')`;
    await sql`CREATE TABLE IF NOT EXISTS products (id VARCHAR(255) PRIMARY KEY DEFAULT gen_random_uuid()::text, title TEXT NOT NULL, description TEXT NOT NULL, category TEXT NOT NULL, image TEXT NOT NULL, features JSONB DEFAULT '[]', specifications JSONB DEFAULT '{}')`;
    await sql`CREATE TABLE IF NOT EXISTS solutions (id VARCHAR(255) PRIMARY KEY DEFAULT gen_random_uuid()::text, title TEXT NOT NULL, description TEXT NOT NULL, image TEXT NOT NULL, features JSONB DEFAULT '[]', benefits JSONB DEFAULT '[]')`;
    await sql`CREATE TABLE IF NOT EXISTS hero_slides (id VARCHAR(255) PRIMARY KEY DEFAULT gen_random_uuid()::text, title TEXT NOT NULL, subtitle TEXT NOT NULL, description TEXT NOT NULL, image TEXT NOT NULL, cta TEXT NOT NULL, theme VARCHAR(50) NOT NULL)`;
    await sql`CREATE TABLE IF NOT EXISTS news_posts (id VARCHAR(255) PRIMARY KEY DEFAULT gen_random_uuid()::text, title TEXT NOT NULL, content TEXT NOT NULL, image TEXT NOT NULL, date VARCHAR(50) NOT NULL, author VARCHAR(255) NOT NULL)`;
    await sql`CREATE TABLE IF NOT EXISTS company_info (id VARCHAR(255) PRIMARY KEY DEFAULT gen_random_uuid()::text, about TEXT, mission TEXT, vision TEXT, values JSONB DEFAULT '[]', stats JSONB DEFAULT '{}')`;
    
    const existingUser = await sql`SELECT * FROM users WHERE username = 'SunsonTech'`;
    if (existingUser.length === 0 && process.env.ADMIN_PASSWORD) {
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
      await sql`INSERT INTO users (id, username, password, role) VALUES ('admin-001', 'SunsonTech', ${hashedPassword}, 'admin')`;
    }
    dbInitialized = true;
  } catch (error) {
    console.error('Table initialization error:', error);
  }
}

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/api', (req, res) => {
  res.json({ status: 'ok', message: 'Sunson Technology API' });
});

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!process.env.DATABASE_URL) {
      return res.status(500).json({ message: 'Database not configured' });
    }
    
    const users = await sql`SELECT * FROM users WHERE username = ${username} LIMIT 1`;
    if (users.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    
    const user = users[0];
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });
    
    const token = generateToken(user.id, user.role);
    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Products routes
app.get('/api/products', async (req, res) => {
  try {
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured');
      return res.status(500).json({ message: 'Database not configured' });
    }
    
    await ensureTablesExist();
    
    const products = await sql`SELECT * FROM products ORDER BY title`;
    const parsed = products.map(p => ({
      ...p,
      features: typeof p.features === 'string' ? JSON.parse(p.features) : p.features,
      specifications: typeof p.specifications === 'string' ? JSON.parse(p.specifications) : p.specifications
    }));
    res.json(parsed);
  } catch (error: any) {
    console.error('Products fetch error:', error.message, error.stack);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/products', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  try {
    const { title, description, category, image, features, specifications } = req.body;
    const result = await sql`
      INSERT INTO products (title, description, category, image, features, specifications)
      VALUES (${title}, ${description}, ${category}, ${image}, ${JSON.stringify(features || [])}, ${JSON.stringify(specifications || {})})
      RETURNING *
    `;
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/products/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  try {
    const { title, description, category, image, features, specifications } = req.body;
    const result = await sql`
      UPDATE products
      SET title = ${title}, description = ${description}, category = ${category},
          image = ${image}, features = ${JSON.stringify(features || [])},
          specifications = ${JSON.stringify(specifications || {})}
      WHERE id = ${req.params.id}
      RETURNING *
    `;
    if (result.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/products/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  try {
    const result = await sql`DELETE FROM products WHERE id = ${req.params.id} RETURNING id`;
    if (result.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Solutions routes
app.get('/api/solutions', async (req, res) => {
  try {
    const solutions = await sql`SELECT * FROM solutions ORDER BY title`;
    const parsed = solutions.map(s => ({
      ...s,
      features: typeof s.features === 'string' ? JSON.parse(s.features) : s.features,
      benefits: typeof s.benefits === 'string' ? JSON.parse(s.benefits) : s.benefits
    }));
    res.json(parsed);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/solutions', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  try {
    const { title, description, image, features, benefits } = req.body;
    const result = await sql`
      INSERT INTO solutions (title, description, image, features, benefits)
      VALUES (${title}, ${description}, ${image}, ${JSON.stringify(features || [])}, ${JSON.stringify(benefits || [])})
      RETURNING *
    `;
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/solutions/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  try {
    const { title, description, image, features, benefits } = req.body;
    const result = await sql`
      UPDATE solutions
      SET title = ${title}, description = ${description}, image = ${image},
          features = ${JSON.stringify(features || [])}, benefits = ${JSON.stringify(benefits || [])}
      WHERE id = ${req.params.id}
      RETURNING *
    `;
    if (result.length === 0) return res.status(404).json({ message: 'Solution not found' });
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/solutions/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  try {
    const result = await sql`DELETE FROM solutions WHERE id = ${req.params.id} RETURNING id`;
    if (result.length === 0) return res.status(404).json({ message: 'Solution not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// News routes
app.get('/api/news', async (req, res) => {
  try {
    const posts = await sql`SELECT * FROM news_posts ORDER BY date DESC`;
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/news', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  try {
    const { title, content, image, date, author } = req.body;
    const result = await sql`
      INSERT INTO news_posts (title, content, image, date, author)
      VALUES (${title}, ${content}, ${image}, ${date}, ${author})
      RETURNING *
    `;
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/news/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  try {
    const { title, content, image, date, author } = req.body;
    const result = await sql`
      UPDATE news_posts
      SET title = ${title}, content = ${content}, image = ${image}, date = ${date}, author = ${author}
      WHERE id = ${req.params.id}
      RETURNING *
    `;
    if (result.length === 0) return res.status(404).json({ message: 'News post not found' });
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/news/:id', authMiddleware, adminOnly, async (req: AuthRequest, res) => {
  try {
    const result = await sql`DELETE FROM news_posts WHERE id = ${req.params.id} RETURNING id`;
    if (result.length === 0) return res.status(404).json({ message: 'News post not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Hero slides routes
app.get('/api/hero-slides', async (req, res) => {
  try {
    const slides = await sql`SELECT * FROM hero_slides ORDER BY id`;
    res.json(slides);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Company info routes
app.get('/api/company-info', async (req, res) => {
  try {
    const info = await sql`SELECT * FROM company_info LIMIT 1`;
    if (info.length === 0) return res.status(404).json({ message: 'Company info not found' });
    res.json(info[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


export default app;
