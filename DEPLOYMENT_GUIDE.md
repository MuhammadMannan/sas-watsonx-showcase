# GitHub Pages Deployment Guide

## 🚀 Deploy Your SAS & watsonx Showcase to GitHub Pages

Follow these steps to host your website on GitHub Pages and access it via a URL.

---

## Prerequisites

- GitHub account
- Git installed on your computer
- Your React app (already built!)

---

## Step 1: Install GitHub Pages Package

In your project directory, install the `gh-pages` package:

```bash
cd sas-watsonx-showcase
npm install --save-dev gh-pages
```

---

## Step 2: Update package.json

Add these lines to your `package.json`:

### Add homepage (at the top level)
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/sas-watsonx-showcase",
```

### Add deploy scripts (in the "scripts" section)
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

**Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username!**

---

## Step 3: Create GitHub Repository

### Option A: Using GitHub Website

1. Go to [github.com](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. Name it: `sas-watsonx-showcase`
4. Keep it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (you already have files)
6. Click **Create repository**

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create sas-watsonx-showcase --public --source=. --remote=origin
```

---

## Step 4: Initialize Git and Push to GitHub

In your project directory:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - SAS & watsonx showcase"

# Add GitHub remote (replace YOUR-GITHUB-USERNAME)
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/sas-watsonx-showcase.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 5: Deploy to GitHub Pages

Run the deploy command:

```bash
npm run deploy
```

This will:
1. Build your React app for production
2. Create a `gh-pages` branch
3. Push the build to GitHub Pages

---

## Step 6: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

---

## 🎉 Your Website is Live!

Your website will be available at:

```
https://YOUR-GITHUB-USERNAME.github.io/sas-watsonx-showcase
```

**Note:** It may take 1-2 minutes for the site to go live after first deployment.

---

## 📝 Making Updates

Whenever you make changes to your website:

```bash
# Make your changes to the code
# Then:

git add .
git commit -m "Description of changes"
git push origin main

# Deploy the updates
npm run deploy
```

The website will automatically update!

---

## 🔧 Troubleshooting

### Issue: Blank page after deployment

**Solution:** Make sure you added the `homepage` field in `package.json` with your correct GitHub username.

### Issue: 404 error

**Solution:** 
1. Check that GitHub Pages is enabled in repository settings
2. Verify the `gh-pages` branch exists
3. Wait 1-2 minutes for GitHub to process the deployment

### Issue: CSS not loading

**Solution:** The `homepage` field in `package.json` must match your GitHub Pages URL exactly.

---

## 🌐 Custom Domain (Optional)

If you want to use a custom domain (like `sas-watsonx.com`):

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your repository, go to **Settings** → **Pages**
3. Enter your custom domain
4. Update your domain's DNS settings to point to GitHub Pages
5. Add a `CNAME` file to your `public/` folder with your domain name

---

## 📊 Example package.json

Here's what your `package.json` should look like:

```json
{
  "name": "sas-watsonx-showcase",
  "version": "0.1.0",
  "homepage": "https://YOUR-GITHUB-USERNAME.github.io/sas-watsonx-showcase",
  "private": true,
  "dependencies": {
    "@carbon/icons-react": "^11.x.x",
    "@carbon/react": "^1.x.x",
    "react": "^18.x.x",
    "react-dom": "^18.x.x",
    "react-scripts": "5.x.x",
    "sass": "^1.x.x"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^6.x.x"
  }
}
```

---

## ✅ Quick Checklist

- [ ] Install `gh-pages` package
- [ ] Add `homepage` to `package.json`
- [ ] Add `predeploy` and `deploy` scripts
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Run `npm run deploy`
- [ ] Enable GitHub Pages in settings
- [ ] Visit your live website!

---

## 🆘 Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/#github-pages)

---

**Your website will be live at:**
`https://YOUR-GITHUB-USERNAME.github.io/sas-watsonx-showcase`

🎉 **Congratulations on deploying your SAS & watsonx showcase!**