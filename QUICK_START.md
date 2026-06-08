# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Navigate to Project
```bash
cd sas-watsonx-showcase
```

### 2. Install Dependencies (First Time Only)
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

The app will automatically open at **http://localhost:3000**

## 📱 What You'll See

The application includes these sections:

1. **Hero Banner** - Partnership title with gradient background
2. **SAS Overview** - Company information and platform capabilities
3. **Strategic Initiatives** - Four key focus areas (2025-2027)
4. **watsonx Portfolio** - Detailed product breakdowns:
   - watsonx.ai
   - watsonx.data
   - watsonx Orchestrate
   - watsonx.governance
5. **Solution Mapping** - How watsonx addresses SAS needs
6. **Next Steps** - Proposed engagement path

## 🎯 Key Features

✅ Fully responsive design (mobile, tablet, desktop)  
✅ IBM Carbon Design System components  
✅ Dark theme (G100)  
✅ Smooth scrolling navigation  
✅ Professional iconography  
✅ Interactive hover effects  

## 🛠️ Common Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |
| `npm run eject` | Eject from Create React App (⚠️ irreversible) |

## 📝 Making Changes

### Update Content
Edit `src/App.js` - All text content is in this file

### Modify Styles
Edit `src/App.scss` - All styling and theming

### Change Colors
Look for these in `App.scss`:
- Hero gradient: `#0f62fe` and `#8a3ffc`
- Icon colors: `.blue`, `.purple`, `.green`, `.teal`

## 🌐 View in Browser

Once running, open: **http://localhost:3000**

Use the navigation menu to jump to different sections.

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Then restart
npm start
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear build cache
rm -rf build
npm run build
```

## 📦 Production Deployment

1. Create optimized build:
```bash
npm run build
```

2. Deploy the `build/` folder to your hosting service

3. Recommended hosts:
   - Netlify
   - Vercel
   - GitHub Pages
   - IBM Cloud

## 💡 Tips

- Use Chrome DevTools to test responsive design
- Check the browser console for any warnings
- The app uses IBM Plex Sans font (loaded from Carbon)
- All icons are from `@carbon/icons-react`

## 📚 Learn More

- [Carbon Design System Docs](https://carbondesignsystem.com/)
- [React Documentation](https://react.dev/)
- [Create React App Docs](https://create-react-app.dev/)

---

**Need help?** Check the full README.md for detailed documentation.