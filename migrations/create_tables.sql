-- Create tables for Sunson Technology CMS

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(255) PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(255) NOT NULL,
  image TEXT NOT NULL,
  features JSONB DEFAULT '[]',
  specifications JSONB DEFAULT '{}'
);

-- Solutions table
CREATE TABLE IF NOT EXISTS solutions (
  id VARCHAR(255) PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  features JSONB DEFAULT '[]',
  benefits JSONB DEFAULT '[]'
);

-- Hero Slides table
CREATE TABLE IF NOT EXISTS hero_slides (
  id VARCHAR(255) PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  cta TEXT NOT NULL,
  theme VARCHAR(50) NOT NULL
);

-- News Posts table
CREATE TABLE IF NOT EXISTS news_posts (
  id VARCHAR(255) PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT NOT NULL,
  date VARCHAR(50) NOT NULL,
  author VARCHAR(255) NOT NULL
);

-- Company Info table
CREATE TABLE IF NOT EXISTS company_info (
  id VARCHAR(255) PRIMARY KEY,
  about TEXT,
  mission TEXT,
  vision TEXT,
  values JSONB DEFAULT '[]',
  stats JSONB DEFAULT '{}'
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_solutions_title ON solutions(title);
CREATE INDEX IF NOT EXISTS idx_news_date ON news_posts(date);
