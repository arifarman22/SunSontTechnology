import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function initDatabase() {
  try {
    // Create products table
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        category TEXT NOT NULL,
        image TEXT NOT NULL,
        features JSONB,
        specifications JSONB
      )
    `;
    console.log('✅ Products table created');

    // Create solutions table
    await sql`
      CREATE TABLE IF NOT EXISTS solutions (
        id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        features JSONB,
        benefits JSONB
      )
    `;
    console.log('✅ Solutions table created');

    // Create hero_slides table
    await sql`
      CREATE TABLE IF NOT EXISTS hero_slides (
        id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        subtitle TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        cta TEXT NOT NULL,
        cta_link TEXT DEFAULT '',
        theme TEXT NOT NULL
      )
    `;

    // Add cta_link column if it doesn't exist
    await sql`
      ALTER TABLE hero_slides ADD COLUMN IF NOT EXISTS cta_link TEXT DEFAULT ''
    `;
    console.log('✅ Hero slides table created');

    // Create news_posts table
    await sql`
      CREATE TABLE IF NOT EXISTS news_posts (
        id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        image TEXT NOT NULL,
        date TEXT NOT NULL,
        author TEXT NOT NULL
      )
    `;
    console.log('✅ News posts table created');

    // Create company_info table
    await sql`
      CREATE TABLE IF NOT EXISTS company_info (
        id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
        about TEXT NOT NULL,
        mission TEXT NOT NULL,
        vision TEXT NOT NULL,
        values JSONB NOT NULL,
        stats JSONB
      )
    `;
    console.log('✅ Company info table created');

    console.log('\n🎉 All tables created successfully!');
  } catch (error) {
    console.error('❌ Error creating tables:', error);
  }
}

initDatabase();
