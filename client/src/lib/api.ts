export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export const FALLBACK_API_URL = 'https://www.sunson-tech.com/api';

async function safeFetchJson<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  try {
    const res = await fetch(`${API_BASE_URL}${cleanEndpoint}`, options);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    // Primary API failed, try fallback
  }

  // Fallback to production API if different from primary
  if (API_BASE_URL !== FALLBACK_API_URL) {
    try {
      const fallbackRes = await fetch(`${FALLBACK_API_URL}${cleanEndpoint}`, options);
      if (fallbackRes.ok) {
        return await fallbackRes.json();
      }
    } catch (fallbackErr) {
      console.error(`API fetch failed for ${cleanEndpoint}:`, fallbackErr);
    }
  }

  return [] as unknown as T;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
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
  ctaLink: string;
  theme: string;
}

export interface NewsPost {
  id: string;
  title: string;
  content: string;
  image: string;
  images?: string[];
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
  return safeFetchJson<Product[]>('/products');
};

export const getProduct = async (id: string): Promise<Product | null> => {
  return safeFetchJson<Product>(`/products/${id}`);
};

// Solutions
export const getSolutions = async (): Promise<Solution[]> => {
  return safeFetchJson<Solution[]>('/solutions');
};

export const getSolution = async (id: string): Promise<Solution | null> => {
  return safeFetchJson<Solution>(`/solutions/${id}`);
};

// Hero Slides
export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  return safeFetchJson<HeroSlide[]>('/hero-slides');
};

// News
export const getNewsPosts = async (): Promise<NewsPost[]> => {
  return safeFetchJson<NewsPost[]>('/news');
};

export const getNewsPost = async (id: string): Promise<NewsPost | null> => {
  return safeFetchJson<NewsPost>(`/news/${id}`);
};

// Company Info
export const getCompanyInfo = async (): Promise<CompanyInfo | null> => {
  return safeFetchJson<CompanyInfo>('/company-info');
};

