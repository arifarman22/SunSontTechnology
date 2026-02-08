import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';

config();

const sql = neon(process.env.DATABASE_URL!);

async function initDatabase() {
  try {
    console.log('Creating tables...');
    
    await sql`CREATE TABLE IF NOT EXISTS users (id VARCHAR(255) PRIMARY KEY, username VARCHAR(255) UNIQUE NOT NULL, password TEXT NOT NULL, role VARCHAR(50) NOT NULL DEFAULT 'user')`;
    await sql`CREATE TABLE IF NOT EXISTS products (id VARCHAR(255) PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL, category VARCHAR(255) NOT NULL, image TEXT NOT NULL, features JSONB DEFAULT '[]', specifications JSONB DEFAULT '{}')`;
    await sql`CREATE TABLE IF NOT EXISTS solutions (id VARCHAR(255) PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL, image TEXT NOT NULL, features JSONB DEFAULT '[]', benefits JSONB DEFAULT '[]')`;
    await sql`CREATE TABLE IF NOT EXISTS hero_slides (id VARCHAR(255) PRIMARY KEY, title TEXT NOT NULL, subtitle TEXT NOT NULL, description TEXT NOT NULL, image TEXT NOT NULL, cta TEXT NOT NULL, theme VARCHAR(50) NOT NULL)`;
    await sql`CREATE TABLE IF NOT EXISTS news_posts (id VARCHAR(255) PRIMARY KEY, title TEXT NOT NULL, content TEXT NOT NULL, image TEXT NOT NULL, date VARCHAR(50) NOT NULL, author VARCHAR(255) NOT NULL)`;
    await sql`CREATE TABLE IF NOT EXISTS company_info (id VARCHAR(255) PRIMARY KEY, about TEXT, mission TEXT, vision TEXT, values JSONB DEFAULT '[]', stats JSONB DEFAULT '{}')`;
    
    console.log('Tables created!');
    
    const existingUser = await sql`SELECT * FROM users WHERE username = 'SunsonTech'`;
    
    if (existingUser.length === 0) {
      console.log('Creating admin user...');
      const hashedPassword = await bcrypt.hash('sunsontech$1234#', 10);
      await sql`INSERT INTO users (id, username, password, role) VALUES ('admin-001', 'SunsonTech', ${hashedPassword}, 'admin')`;
      console.log('Admin user created! Username: SunsonTech, Password: sunsontech$1234#');
    } else {
      console.log('Admin user already exists');
    }
    
    console.log('Database initialization complete!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

initDatabase();
