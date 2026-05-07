# Veles Construction - Ultra-Minimalist Industrial Landing Page

This is a modern, high-end landing page for Veles Construction, built with React, Tailwind CSS, and Framer Motion.

## 🚀 How to Run Locally

To view the website on your local machine:

1. **Install Dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

2. **Start Development Server:**
   Run the following command to start the site in development mode:
   ```bash
   npm run dev
   ```
   After running this, the terminal will provide a link (usually `http://localhost:5173`). Open this link in your browser.

## 🏗️ Building for Production

To create a production-ready version of the site:

```bash
npm run build
```
This will generate a `dist` folder. The contents of this folder are what you need to upload to your web server or hosting provider.

## 🌐 How to Host on GitHub Pages

If you want to host this on GitHub Pages, follow these steps:

1. **GitHub Actions (Recommended):**
   Push your code to a GitHub repository. Go to **Settings > Pages** and under **Build and deployment > Source**, select **GitHub Actions**. Use the standard "Static HTML" or "Vite" workflow.

2. **Manual Deployment:**
   If you want to deploy manually, you can use the `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```
   Add these scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
   Then run `npm run deploy`.

## 🛠️ Tech Stack
- **React** (v18)
- **TypeScript**
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Vite** (Build Tool)

---
Designed for top-tier developers. Veles Construction.
