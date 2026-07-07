# Deploy to Vercel

## Option A: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts. For production:

```bash
vercel --prod
```

## Option B: GitHub + Vercel Dashboard

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial premium portfolio"
git remote add origin https://github.com/DeekshithMRai/deekshith-portfolio.git
git push -u origin main
```

### 2. Import in Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`

### 3. Environment Variables

Add in Vercel project settings:

| Name | Value |
|------|-------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

### 4. Deploy

Click **Deploy**. Vercel will build and host your site.

### 5. Update SEO URLs

After deployment, update these files with your new domain:

- `index.html` — `og:url`, `canonical`, structured data `url`
- `public/sitemap.xml` — `<loc>` URL
- `public/robots.txt` — Sitemap URL

## Custom Domain

In Vercel: **Settings → Domains → Add** your custom domain.
