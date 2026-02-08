# Backend Deployment Instructions

## Deploy to Render

### Current Deployment
- Backend URL: `https://sunsontechnology-backend.onrender.com`
- Status: ✅ Live and Running

### Render Configuration
1. Build Command: `npm install && npm run build:server`
2. Start Command: `npm start`
3. Environment Variables:
   - `DATABASE_URL`: PostgreSQL connection string
   - `NODE_ENV`: production
   - `ALLOWED_ORIGINS`: https://www.sunson-tech.com,https://sunson-tech.com
   - `JWT_SECRET`: your_secret_key

### Test Endpoints
- https://sunsontechnology-backend.onrender.com/
- https://sunsontechnology-backend.onrender.com/api/products
- https://sunsontechnology-backend.onrender.com/api/solutions
- https://sunsontechnology-backend.onrender.com/api/hero-slides
- https://sunsontechnology-backend.onrender.com/api/news
- https://sunsontechnology-backend.onrender.com/api/company-info
- https://sunsontechnology-backend.onrender.com/api/upload (POST)

### Frontend Configuration
Frontend `.env` file:
```
VITE_API_URL=https://sunsontechnology-backend.onrender.com/api
```

## Current Configuration
- Backend: Node.js + Express
- Database: PostgreSQL (Neon)
- Storage: Database-backed (server/db-storage.ts)
- File Uploads: Multer (5MB limit)
- CORS: Enabled for sunson-tech.com
- Endpoints: Products, Solutions, Hero Slides, News, Company Info, File Upload
