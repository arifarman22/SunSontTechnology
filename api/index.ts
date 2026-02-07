import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from "../server/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url, method } = req;
  const path = url?.split('?')[0] || '';

  try {
    // Products
    if (path.endsWith('/products')) {
      if (method === 'GET') {
        const products = await storage.getProducts();
        return res.json(products);
      }
      if (method === 'POST') {
        const product = await storage.createProduct(req.body);
        return res.status(201).json(product);
      }
    }

    // Solutions
    if (path.endsWith('/solutions')) {
      if (method === 'GET') {
        const solutions = await storage.getSolutions();
        return res.json(solutions);
      }
      if (method === 'POST') {
        const solution = await storage.createSolution(req.body);
        return res.status(201).json(solution);
      }
    }

    // Hero Slides
    if (path.endsWith('/hero-slides')) {
      if (method === 'GET') {
        const slides = await storage.getHeroSlides();
        return res.json(slides);
      }
      if (method === 'POST') {
        const slide = await storage.createHeroSlide(req.body);
        return res.status(201).json(slide);
      }
    }

    // News
    if (path.endsWith('/news')) {
      if (method === 'GET') {
        const posts = await storage.getNewsPosts();
        return res.json(posts);
      }
      if (method === 'POST') {
        const post = await storage.createNewsPost(req.body);
        return res.status(201).json(post);
      }
    }

    // Company Info
    if (path.endsWith('/company-info')) {
      if (method === 'GET') {
        const info = await storage.getCompanyInfo();
        return res.json(info || {});
      }
      if (method === 'PUT') {
        const info = await storage.updateCompanyInfo(req.body);
        return res.json(info);
      }
    }

    return res.status(404).json({ error: 'Not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
