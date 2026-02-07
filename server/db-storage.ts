import { neon } from '@neondatabase/serverless';
import type { IStorage, Product, Solution, HeroSlide, NewsPost, CompanyInfo } from './storage';
import type { User, InsertUser } from '@shared/schema';
import { randomUUID } from 'crypto';

const sql = neon(process.env.DATABASE_URL!);

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await sql`SELECT * FROM users WHERE id = ${id}`;
    return user as User | undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await sql`SELECT * FROM users WHERE username = ${username}`;
    return user as User | undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await sql`
      INSERT INTO users (username, password)
      VALUES (${insertUser.username}, ${insertUser.password})
      RETURNING *
    `;
    return user as User;
  }

  async getProducts(): Promise<Product[]> {
    const products = await sql`SELECT * FROM products ORDER BY title`;
    return products as Product[];
  }

  async getProduct(id: string): Promise<Product | undefined> {
    const [product] = await sql`SELECT * FROM products WHERE id = ${id}`;
    return product as Product | undefined;
  }

  async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const id = randomUUID();
    const [newProduct] = await sql`
      INSERT INTO products (id, title, description, category, image, features, specifications)
      VALUES (${id}, ${product.title}, ${product.description}, ${product.category}, 
              ${product.image}, ${JSON.stringify(product.features || [])}, 
              ${JSON.stringify(product.specifications || {})})
      RETURNING *
    `;
    return newProduct as Product;
  }

  async updateProduct(id: string, product: Partial<Product>): Promise<Product | undefined> {
    const updates: string[] = [];
    const values: any[] = [];
    
    if (product.title) { updates.push('title = $' + (values.length + 1)); values.push(product.title); }
    if (product.description) { updates.push('description = $' + (values.length + 1)); values.push(product.description); }
    if (product.category) { updates.push('category = $' + (values.length + 1)); values.push(product.category); }
    if (product.image) { updates.push('image = $' + (values.length + 1)); values.push(product.image); }
    if (product.features) { updates.push('features = $' + (values.length + 1)); values.push(JSON.stringify(product.features)); }
    if (product.specifications) { updates.push('specifications = $' + (values.length + 1)); values.push(JSON.stringify(product.specifications)); }
    
    if (updates.length === 0) return this.getProduct(id);
    
    const [updated] = await sql`
      UPDATE products SET ${sql.unsafe(updates.join(', '))}
      WHERE id = ${id}
      RETURNING *
    `;
    return updated as Product | undefined;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const result = await sql`DELETE FROM products WHERE id = ${id}`;
    return result.count > 0;
  }

  async getSolutions(): Promise<Solution[]> {
    const solutions = await sql`SELECT * FROM solutions ORDER BY title`;
    return solutions as Solution[];
  }

  async getSolution(id: string): Promise<Solution | undefined> {
    const [solution] = await sql`SELECT * FROM solutions WHERE id = ${id}`;
    return solution as Solution | undefined;
  }

  async createSolution(solution: Omit<Solution, 'id'>): Promise<Solution> {
    const id = randomUUID();
    const [newSolution] = await sql`
      INSERT INTO solutions (id, title, description, image, features, benefits)
      VALUES (${id}, ${solution.title}, ${solution.description}, ${solution.image},
              ${JSON.stringify(solution.features || [])}, ${JSON.stringify(solution.benefits || [])})
      RETURNING *
    `;
    return newSolution as Solution;
  }

  async updateSolution(id: string, solution: Partial<Solution>): Promise<Solution | undefined> {
    const updates: string[] = [];
    const values: any[] = [];
    
    if (solution.title) { updates.push('title = $' + (values.length + 1)); values.push(solution.title); }
    if (solution.description) { updates.push('description = $' + (values.length + 1)); values.push(solution.description); }
    if (solution.image) { updates.push('image = $' + (values.length + 1)); values.push(solution.image); }
    if (solution.features) { updates.push('features = $' + (values.length + 1)); values.push(JSON.stringify(solution.features)); }
    if (solution.benefits) { updates.push('benefits = $' + (values.length + 1)); values.push(JSON.stringify(solution.benefits)); }
    
    if (updates.length === 0) return this.getSolution(id);
    
    const [updated] = await sql`
      UPDATE solutions SET ${sql.unsafe(updates.join(', '))}
      WHERE id = ${id}
      RETURNING *
    `;
    return updated as Solution | undefined;
  }

  async deleteSolution(id: string): Promise<boolean> {
    const result = await sql`DELETE FROM solutions WHERE id = ${id}`;
    return result.count > 0;
  }

  async getHeroSlides(): Promise<HeroSlide[]> {
    const slides = await sql`SELECT * FROM hero_slides ORDER BY title`;
    return slides as HeroSlide[];
  }

  async getHeroSlide(id: string): Promise<HeroSlide | undefined> {
    const [slide] = await sql`SELECT * FROM hero_slides WHERE id = ${id}`;
    return slide as HeroSlide | undefined;
  }

  async createHeroSlide(slide: Omit<HeroSlide, 'id'>): Promise<HeroSlide> {
    const id = randomUUID();
    const [newSlide] = await sql`
      INSERT INTO hero_slides (id, title, subtitle, description, image, cta, theme)
      VALUES (${id}, ${slide.title}, ${slide.subtitle}, ${slide.description},
              ${slide.image}, ${slide.cta}, ${slide.theme})
      RETURNING *
    `;
    return newSlide as HeroSlide;
  }

  async updateHeroSlide(id: string, slide: Partial<HeroSlide>): Promise<HeroSlide | undefined> {
    const updates: string[] = [];
    const values: any[] = [];
    
    if (slide.title) { updates.push('title = $' + (values.length + 1)); values.push(slide.title); }
    if (slide.subtitle) { updates.push('subtitle = $' + (values.length + 1)); values.push(slide.subtitle); }
    if (slide.description) { updates.push('description = $' + (values.length + 1)); values.push(slide.description); }
    if (slide.image) { updates.push('image = $' + (values.length + 1)); values.push(slide.image); }
    if (slide.cta) { updates.push('cta = $' + (values.length + 1)); values.push(slide.cta); }
    if (slide.theme) { updates.push('theme = $' + (values.length + 1)); values.push(slide.theme); }
    
    if (updates.length === 0) return this.getHeroSlide(id);
    
    const [updated] = await sql`
      UPDATE hero_slides SET ${sql.unsafe(updates.join(', '))}
      WHERE id = ${id}
      RETURNING *
    `;
    return updated as HeroSlide | undefined;
  }

  async deleteHeroSlide(id: string): Promise<boolean> {
    const result = await sql`DELETE FROM hero_slides WHERE id = ${id}`;
    return result.count > 0;
  }

  async getNewsPosts(): Promise<NewsPost[]> {
    const posts = await sql`SELECT * FROM news_posts ORDER BY date DESC`;
    return posts as NewsPost[];
  }

  async getNewsPost(id: string): Promise<NewsPost | undefined> {
    const [post] = await sql`SELECT * FROM news_posts WHERE id = ${id}`;
    return post as NewsPost | undefined;
  }

  async createNewsPost(post: Omit<NewsPost, 'id'>): Promise<NewsPost> {
    const id = randomUUID();
    const [newPost] = await sql`
      INSERT INTO news_posts (id, title, content, image, date, author)
      VALUES (${id}, ${post.title}, ${post.content}, ${post.image}, ${post.date}, ${post.author})
      RETURNING *
    `;
    return newPost as NewsPost;
  }

  async updateNewsPost(id: string, post: Partial<NewsPost>): Promise<NewsPost | undefined> {
    const updates: string[] = [];
    const values: any[] = [];
    
    if (post.title) { updates.push('title = $' + (values.length + 1)); values.push(post.title); }
    if (post.content) { updates.push('content = $' + (values.length + 1)); values.push(post.content); }
    if (post.image) { updates.push('image = $' + (values.length + 1)); values.push(post.image); }
    if (post.date) { updates.push('date = $' + (values.length + 1)); values.push(post.date); }
    if (post.author) { updates.push('author = $' + (values.length + 1)); values.push(post.author); }
    
    if (updates.length === 0) return this.getNewsPost(id);
    
    const [updated] = await sql`
      UPDATE news_posts SET ${sql.unsafe(updates.join(', '))}
      WHERE id = ${id}
      RETURNING *
    `;
    return updated as NewsPost | undefined;
  }

  async deleteNewsPost(id: string): Promise<boolean> {
    const result = await sql`DELETE FROM news_posts WHERE id = ${id}`;
    return result.count > 0;
  }

  async getCompanyInfo(): Promise<CompanyInfo | undefined> {
    const [info] = await sql`SELECT * FROM company_info LIMIT 1`;
    return info as CompanyInfo | undefined;
  }

  async updateCompanyInfo(info: Partial<CompanyInfo>): Promise<CompanyInfo> {
    const existing = await this.getCompanyInfo();
    
    if (!existing) {
      const id = randomUUID();
      const [newInfo] = await sql`
        INSERT INTO company_info (id, about, mission, vision, values, stats)
        VALUES (${id}, ${info.about || ''}, ${info.mission || ''}, ${info.vision || ''},
                ${JSON.stringify(info.values || [])}, ${JSON.stringify(info.stats || {})})
        RETURNING *
      `;
      return newInfo as CompanyInfo;
    }
    
    const [updated] = await sql`
      UPDATE company_info SET
        about = ${info.about || existing.about},
        mission = ${info.mission || existing.mission},
        vision = ${info.vision || existing.vision},
        values = ${JSON.stringify(info.values || existing.values)},
        stats = ${JSON.stringify(info.stats || existing.stats)}
      WHERE id = ${existing.id}
      RETURNING *
    `;
    return updated as CompanyInfo;
  }
}

export const dbStorage = new DbStorage();
