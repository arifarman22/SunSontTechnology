import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);

async function fixTables() {
  try {
    console.log('Dropping solutions and news_posts tables...');
    await sql`DROP TABLE IF EXISTS solutions CASCADE`;
    await sql`DROP TABLE IF EXISTS news_posts CASCADE`;
    
    console.log('Creating solutions table...');
    await sql`CREATE TABLE solutions (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      features JSONB DEFAULT '[]',
      benefits JSONB DEFAULT '[]'
    )`;
    
    console.log('Creating news_posts table...');
    await sql`CREATE TABLE news_posts (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      image TEXT NOT NULL,
      date VARCHAR(50) NOT NULL,
      author VARCHAR(255) NOT NULL
    )`;
    
    console.log('✅ Tables fixed successfully!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

fixTables();
