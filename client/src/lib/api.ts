const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

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

// Products
export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_BASE_URL}/products`);
  return res.json();
};

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);
  return res.json();
};

// Solutions
export const getSolutions = async (): Promise<Solution[]> => {
  const res = await fetch(`${API_BASE_URL}/solutions`);
  return res.json();
};

export const getSolution = async (id: string): Promise<Solution> => {
  const res = await fetch(`${API_BASE_URL}/solutions/${id}`);
  return res.json();
};

// Hero Slides
export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  const res = await fetch(`${API_BASE_URL}/hero-slides`);
  return res.json();
};

// News
export const getNewsPosts = async (): Promise<NewsPost[]> => {
  const res = await fetch(`${API_BASE_URL}/news`);
  return res.json();
};

export const getNewsPost = async (id: string): Promise<NewsPost> => {
  const res = await fetch(`${API_BASE_URL}/news/${id}`);
  return res.json();
};

// Company Info
export const getCompanyInfo = async (): Promise<CompanyInfo> => {
  const res = await fetch(`${API_BASE_URL}/company-info`);
  return res.json();
};
