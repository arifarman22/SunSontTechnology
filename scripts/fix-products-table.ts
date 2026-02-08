import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);

async function fixProductsTable() {
  try {
    console.log('Dropping products table...');
    await sql`DROP TABLE IF EXISTS products CASCADE`;
    
    console.log('Creating products table with proper UUID generation...');
    await sql`CREATE TABLE products (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      image TEXT NOT NULL,
      features JSONB DEFAULT '[]',
      specifications JSONB DEFAULT '{}'
    )`;
    
    console.log('✅ Products table fixed successfully!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

fixProductsTable();
