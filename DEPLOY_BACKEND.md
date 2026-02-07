# Backend Deployment Instructions

## Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)
1. Go to https://vercel.com/new
2. Import GitHub repo: arifarman22/SunSontTechnology
3. Project Name: `sunson-backend`
4. Framework: Other
5. Root Directory: `./`
6. Click Deploy

### Method 2: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## After Deployment

1. Your backend will be at: `https://sunson-backend.vercel.app`
2. Test endpoints:
   - https://sunson-backend.vercel.app/api/products
   - https://sunson-backend.vercel.app/api/solutions
   - https://sunson-backend.vercel.app/api/hero-slides
   - https://sunson-backend.vercel.app/api/news
   - https://sunson-backend.vercel.app/api/company-info

3. Update frontend `.env` file in client folder:
```
VITE_API_URL=https://sunson-backend.vercel.app
```

4. Redeploy frontend to use new backend URL

## Current Configuration
- Backend API: `api/index.ts`
- Storage: In-memory (server/storage.ts)
- CORS: Enabled for all origins
- Endpoints: Products, Solutions, Hero Slides, News, Company Info
