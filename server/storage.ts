import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";

// Content types
export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  features?: string[];
  specifications?: Record<string, string>;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
  benefits?: string[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  theme: string;
}

export interface NewsPost {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface CompanyInfo {
  id: string;
  about: string;
  mission: string;
  vision: string;
  values: string[];
  stats?: Record<string, string>;
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: Omit<Product, 'id'>): Promise<Product>;
  updateProduct(id: string, product: Partial<Product>): Promise<Product | undefined>;
  deleteProduct(id: string): Promise<boolean>;
  
  // Solutions
  getSolutions(): Promise<Solution[]>;
  getSolution(id: string): Promise<Solution | undefined>;
  createSolution(solution: Omit<Solution, 'id'>): Promise<Solution>;
  updateSolution(id: string, solution: Partial<Solution>): Promise<Solution | undefined>;
  deleteSolution(id: string): Promise<boolean>;
  
  // Hero Slides
  getHeroSlides(): Promise<HeroSlide[]>;
  getHeroSlide(id: string): Promise<HeroSlide | undefined>;
  createHeroSlide(slide: Omit<HeroSlide, 'id'>): Promise<HeroSlide>;
  updateHeroSlide(id: string, slide: Partial<HeroSlide>): Promise<HeroSlide | undefined>;
  deleteHeroSlide(id: string): Promise<boolean>;
  
  // News
  getNewsPosts(): Promise<NewsPost[]>;
  getNewsPost(id: string): Promise<NewsPost | undefined>;
  createNewsPost(post: Omit<NewsPost, 'id'>): Promise<NewsPost>;
  updateNewsPost(id: string, post: Partial<NewsPost>): Promise<NewsPost | undefined>;
  deleteNewsPost(id: string): Promise<boolean>;
  
  // Company Info
  getCompanyInfo(): Promise<CompanyInfo | undefined>;
  updateCompanyInfo(info: Partial<CompanyInfo>): Promise<CompanyInfo>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private solutions: Map<string, Solution>;
  private heroSlides: Map<string, HeroSlide>;
  private newsPosts: Map<string, NewsPost>;
  private companyInfo: CompanyInfo | undefined;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.solutions = new Map();
    this.heroSlides = new Map();
    this.newsPosts = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed products
    const product1: Product = {
      id: randomUUID(),
      title: "Cash Deposit Machine",
      description: "Advanced ATM solution for banking operations",
      category: "Banking",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      features: ["High security", "Fast processing", "24/7 operation"]
    };
    this.products.set(product1.id, product1);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id, role: insertUser.role || 'user' };
    this.users.set(id, user);
    return user;
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const id = randomUUID();
    const newProduct: Product = { ...product, id };
    this.products.set(id, newProduct);
    return newProduct;
  }

  async updateProduct(id: string, product: Partial<Product>): Promise<Product | undefined> {
    const existing = this.products.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...product };
    this.products.set(id, updated);
    return updated;
  }

  async deleteProduct(id: string): Promise<boolean> {
    return this.products.delete(id);
  }

  // Solutions
  async getSolutions(): Promise<Solution[]> {
    return Array.from(this.solutions.values());
  }

  async getSolution(id: string): Promise<Solution | undefined> {
    return this.solutions.get(id);
  }

  async createSolution(solution: Omit<Solution, 'id'>): Promise<Solution> {
    const id = randomUUID();
    const newSolution: Solution = { ...solution, id };
    this.solutions.set(id, newSolution);
    return newSolution;
  }

  async updateSolution(id: string, solution: Partial<Solution>): Promise<Solution | undefined> {
    const existing = this.solutions.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...solution };
    this.solutions.set(id, updated);
    return updated;
  }

  async deleteSolution(id: string): Promise<boolean> {
    return this.solutions.delete(id);
  }

  // Hero Slides
  async getHeroSlides(): Promise<HeroSlide[]> {
    return Array.from(this.heroSlides.values());
  }

  async getHeroSlide(id: string): Promise<HeroSlide | undefined> {
    return this.heroSlides.get(id);
  }

  async createHeroSlide(slide: Omit<HeroSlide, 'id'>): Promise<HeroSlide> {
    const id = randomUUID();
    const newSlide: HeroSlide = { ...slide, id };
    this.heroSlides.set(id, newSlide);
    return newSlide;
  }

  async updateHeroSlide(id: string, slide: Partial<HeroSlide>): Promise<HeroSlide | undefined> {
    const existing = this.heroSlides.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...slide };
    this.heroSlides.set(id, updated);
    return updated;
  }

  async deleteHeroSlide(id: string): Promise<boolean> {
    return this.heroSlides.delete(id);
  }

  // News
  async getNewsPosts(): Promise<NewsPost[]> {
    return Array.from(this.newsPosts.values());
  }

  async getNewsPost(id: string): Promise<NewsPost | undefined> {
    return this.newsPosts.get(id);
  }

  async createNewsPost(post: Omit<NewsPost, 'id'>): Promise<NewsPost> {
    const id = randomUUID();
    const newPost: NewsPost = { ...post, id };
    this.newsPosts.set(id, newPost);
    return newPost;
  }

  async updateNewsPost(id: string, post: Partial<NewsPost>): Promise<NewsPost | undefined> {
    const existing = this.newsPosts.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...post };
    this.newsPosts.set(id, updated);
    return updated;
  }

  async deleteNewsPost(id: string): Promise<boolean> {
    return this.newsPosts.delete(id);
  }

  // Company Info
  async getCompanyInfo(): Promise<CompanyInfo | undefined> {
    return this.companyInfo;
  }

  async updateCompanyInfo(info: Partial<CompanyInfo>): Promise<CompanyInfo> {
    if (!this.companyInfo) {
      this.companyInfo = { id: randomUUID(), ...info } as CompanyInfo;
    } else {
      this.companyInfo = { ...this.companyInfo, ...info };
    }
    return this.companyInfo;
  }
}

function getStorage(): IStorage {
  if (process.env.DATABASE_URL) {
    const { dbStorage } = require('./db-storage');
    return dbStorage;
  }
  return new MemStorage();
}

export const storage = getStorage();
