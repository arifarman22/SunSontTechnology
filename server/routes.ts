import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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

  app.post("/api/products", async (req, res) => {
    const product = await storage.createProduct(req.body);
    res.status(201).json(product);
  });

  app.put("/api/products/:id", async (req, res) => {
    const product = await storage.updateProduct(req.params.id, req.body);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  });

  app.delete("/api/products/:id", async (req, res) => {
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

  app.post("/api/solutions", async (req, res) => {
    const solution = await storage.createSolution(req.body);
    res.status(201).json(solution);
  });

  app.put("/api/solutions/:id", async (req, res) => {
    const solution = await storage.updateSolution(req.params.id, req.body);
    if (!solution) return res.status(404).json({ message: "Solution not found" });
    res.json(solution);
  });

  app.delete("/api/solutions/:id", async (req, res) => {
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

  app.post("/api/hero-slides", async (req, res) => {
    const slide = await storage.createHeroSlide(req.body);
    res.status(201).json(slide);
  });

  app.put("/api/hero-slides/:id", async (req, res) => {
    const slide = await storage.updateHeroSlide(req.params.id, req.body);
    if (!slide) return res.status(404).json({ message: "Hero slide not found" });
    res.json(slide);
  });

  app.delete("/api/hero-slides/:id", async (req, res) => {
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

  app.post("/api/news", async (req, res) => {
    const post = await storage.createNewsPost(req.body);
    res.status(201).json(post);
  });

  app.put("/api/news/:id", async (req, res) => {
    const post = await storage.updateNewsPost(req.params.id, req.body);
    if (!post) return res.status(404).json({ message: "News post not found" });
    res.json(post);
  });

  app.delete("/api/news/:id", async (req, res) => {
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

  app.put("/api/company-info", async (req, res) => {
    const info = await storage.updateCompanyInfo(req.body);
    res.json(info);
  });

  const httpServer = createServer(app);

  return httpServer;
}
