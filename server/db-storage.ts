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
    const existing = await this.getProduct(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...product };
    const [result] = await sql`
      UPDATE products 
      SET title = ${updated.title}, 
          description = ${updated.description}, 
          category = ${updated.category}, 
          image = ${updated.image}, 
          features = ${JSON.stringify(updated.features || [])}, 
          specifications = ${JSON.stringify(updated.specifications || {})}
      WHERE id = ${id}
      RETURNING *
    `;
    return result as Product | undefined;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const result = await sql`DELETE FROM products WHERE id = ${id}`;
    return result.length > 0;
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
    const existing = await this.getSolution(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...solution };
    const [result] = await sql`
      UPDATE solutions 
      SET title = ${updated.title}, 
          description = ${updated.description}, 
          image = ${updated.image}, 
          features = ${JSON.stringify(updated.features || [])}, 
          benefits = ${JSON.stringify(updated.benefits || [])}
      WHERE id = ${id}
      RETURNING *
    `;
    return result as Solution | undefined;
  }

  async deleteSolution(id: string): Promise<boolean> {
    const result = await sql`DELETE FROM solutions WHERE id = ${id}`;
    return result.length > 0;
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
    const existing = await this.getHeroSlide(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...slide };
    const [result] = await sql`
      UPDATE hero_slides 
      SET title = ${updated.title}, 
          subtitle = ${updated.subtitle}, 
          description = ${updated.description}, 
          image = ${updated.image}, 
          cta = ${updated.cta}, 
          theme = ${updated.theme}
      WHERE id = ${id}
      RETURNING *
    `;
    return result as HeroSlide | undefined;
  }

  async deleteHeroSlide(id: string): Promise<boolean> {
    const result = await sql`DELETE FROM hero_slides WHERE id = ${id}`;
    return result.length > 0;
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
    const existing = await this.getNewsPost(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...post };
    const [result] = await sql`
      UPDATE news_posts 
      SET title = ${updated.title}, 
          content = ${updated.content}, 
          image = ${updated.image}, 
          date = ${updated.date}, 
          author = ${updated.author}
      WHERE id = ${id}
      RETURNING *
    `;
    return result as NewsPost | undefined;
  }

  async deleteNewsPost(id: string): Promise<boolean> {
    const result = await sql`DELETE FROM news_posts WHERE id = ${id}`;
    return result.length > 0;
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
