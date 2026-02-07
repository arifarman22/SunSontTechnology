import express from "express";
import cors from "cors";
import { storage } from "../server/storage";

const app = express();
app.use(cors());
app.use(express.json());

// Products
app.get("/api/products", async (req, res) => {
  const products = await storage.getProducts();
  res.json(products);
});

app.post("/api/products", async (req, res) => {
  const product = await storage.createProduct(req.body);
  res.status(201).json(product);
});

// Solutions
app.get("/api/solutions", async (req, res) => {
  const solutions = await storage.getSolutions();
  res.json(solutions);
});

app.post("/api/solutions", async (req, res) => {
  const solution = await storage.createSolution(req.body);
  res.status(201).json(solution);
});

// Hero Slides
app.get("/api/hero-slides", async (req, res) => {
  const slides = await storage.getHeroSlides();
  res.json(slides);
});

app.post("/api/hero-slides", async (req, res) => {
  const slide = await storage.createHeroSlide(req.body);
  res.status(201).json(slide);
});

// News
app.get("/api/news", async (req, res) => {
  const posts = await storage.getNewsPosts();
  res.json(posts);
});

app.post("/api/news", async (req, res) => {
  const post = await storage.createNewsPost(req.body);
  res.status(201).json(post);
});

// Company Info
app.get("/api/company-info", async (req, res) => {
  const info = await storage.getCompanyInfo();
  res.json(info || {});
});

app.put("/api/company-info", async (req, res) => {
  const info = await storage.updateCompanyInfo(req.body);
  res.json(info);
});

export default app;
