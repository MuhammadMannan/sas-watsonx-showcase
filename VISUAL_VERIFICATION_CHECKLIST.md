# Visual Verification Checklist

Use this checklist to verify that all Carbon Design System components are rendering correctly.

## 🎨 Theme Verification

### Dark Theme (G100)
- [ ] Background is dark gray (#161616)
- [ ] Text is light/white for good contrast
- [ ] Layers have subtle elevation differences
- [ ] Interactive elements use IBM Blue (#0f62fe)

## 🧩 Component Rendering

### Header
- [ ] IBM branding visible in header
- [ ] Navigation menu items clickable
- [ ] Header stays fixed on scroll
- [ ] Smooth scroll to sections on click

### Hero Section
- [ ] Blue-to-purple gradient background
- [ ] White text readable
- [ ] Tags display with proper colors (blue, purple, green, teal)
- [ ] Responsive on mobile (smaller title)

### SAS Overview Section
- [ ] Two info tiles side-by-side on desktop
- [ ] Icons display correctly (Analytics, ChartLineData)
- [ ] Platform tile shows all bullet points
- [ ] Hover effect on tiles (lift + shadow)

### Strategic Initiatives Section
- [ ] Four tiles in 2x2 grid on desktop
- [ ] Each tile has colored icon (blue, purple, green, teal)
- [ ] Icons: DataBase, Collaborate, Security, Rocket
- [ ] Hover effects work

### watsonx Portfolio Section
- [ ] Four product tiles stacked vertically
- [ ] Each has large icon + title + subtitle
- [ ] Checkmark icons for features (green)
- [ ] Benefit boxes have accent background
- [ ] Product icons: Analytics, DataBase, CloudDataOps, Security

### Solution Mapping Section
- [ ] Structured list table displays
- [ ] Two columns: Initiative | Capability
- [ ] Four rows of data
- [ ] Hover effect on rows
- [ ] Header row has accent background

### Next Steps Section
- [ ] Blue-to-purple gradient background (like hero)
- [ ] Four step tiles with numbers (1-4)
- [ ] White tile backgrounds
- [ ] Tags show duration (2 days, 30 days, etc.)
- [ ] CTA button with gradient background
- [ ] Button hover effect

### Footer
- [ ] Dark background
- [ ] Centered text
- [ ] Copyright and trademark info

## 📱 Responsive Design

### Desktop (> 1056px)
- [ ] Full 16-column grid
- [ ] Navigation menu horizontal
- [ ] Tiles side-by-side where appropriate
- [ ] Large hero title (3rem)

### Tablet (672px - 1056px)
- [ ] 8-column grid
- [ ] Some tiles stack
- [ ] Medium hero title (2.5rem)

### Mobile (< 672px)
- [ ] 4-column grid
- [ ] All tiles stack vertically
- [ ] Small hero title (2rem)
- [ ] Step numbers inline (not absolute positioned)
- [ ] Product headers stack (icon above text)

## 🎯 Interactive Elements

### Hover States
- [ ] Tiles lift up on hover
- [ ] Tiles show shadow on hover
- [ ] Table rows highlight on hover
- [ ] Button changes on hover
- [ ] Scrollbar thumb changes on hover

### Navigation
- [ ] Clicking nav items scrolls smoothly
- [ ] Active section highlighted (if implemented)
- [ ] Smooth scroll behavior enabled

### Buttons
- [ ] CTA button has gradient
- [ ] Button text readable
- [ ] Hover effect visible
- [ ] Cursor changes to pointer

## 🎨 Colors Verification

### IBM Brand Colors
- [ ] IBM Blue: #0f62fe (primary actions, icons)
- [ ] IBM Purple: #8a3ffc (secondary, gradients)
- [ ] Success Green: #24a148 (checkmarks)
- [ ] Info Teal: #009d9a (tags)

### Carbon Tokens
- [ ] Background: Dark gray
- [ ] Layer 01: Slightly lighter gray
- [ ] Layer 02: Even lighter gray
- [ ] Text Primary: White/light
- [ ] Text Secondary: Gray
- [ ] Borders: Subtle gray

## 🔤 Typography

### Fonts
- [ ] IBM Plex Sans for body text
- [ ] IBM Plex Mono for code (if any)
- [ ] Font weights: 400 (regular), 600 (semibold)

### Sizes
- [ ] Hero title: 3rem (desktop), 2rem (mobile)
- [ ] Section headings: 2.5rem (desktop), 2rem (mobile)
- [ ] Body text: 1rem
- [ ] Large text: 1.25rem

## ♿ Accessibility

### Contrast
- [ ] Text readable on all backgrounds
- [ ] WCAG AA compliance
- [ ] Focus indicators visible

### Keyboard Navigation
- [ ] Tab through interactive elements
- [ ] Enter activates buttons/links
- [ ] Focus visible on all elements

## 🐛 Known Issues to Check

### Browser-Specific
- [ ] Chrome: All features work
- [ ] Firefox: All features work
- [ ] Safari: All features work
- [ ] Edge: All features work

### Common Issues
- [ ] No console errors
- [ ] No 404s for assets
- [ ] Images load (if any)
- [ ] Icons render (not boxes)
- [ ] Smooth scrolling works
- [ ] No layout shifts

## 📊 Performance

### Load Time
- [ ] Initial load < 3 seconds
- [ ] No render blocking
- [ ] Smooth animations

### Interactions
- [ ] Hover effects smooth (60fps)
- [ ] Scroll smooth
- [ ] No jank or stuttering

## ✅ Final Checks

- [ ] All sections visible
- [ ] Content readable
- [ ] No overlapping elements
- [ ] Proper spacing throughout
- [ ] Consistent styling
- [ ] Professional appearance
- [ ] Ready for presentation

---

## 🔧 How to Test

1. **Desktop Testing:**
   ```bash
   npm start
   # Open http://localhost:3000
   # Resize browser window to test breakpoints
   ```

2. **Mobile Testing:**
   - Open Chrome DevTools (F12)
   - Click device toolbar icon
   - Test iPhone, iPad, and custom sizes

3. **Accessibility Testing:**
   - Use keyboard only (Tab, Enter, Space)
   - Check with screen reader (if available)
   - Verify color contrast

4. **Cross-Browser Testing:**
   - Test in Chrome, Firefox, Safari, Edge
   - Check for any rendering differences

---

## 📝 Notes

- All checkboxes should be checked before considering the app production-ready
- If any item fails, refer to CSS_AUDIT_REPORT.md for troubleshooting
- Take screenshots of any issues for documentation

---

**Last Updated:** June 8, 2026  
**Status:** Ready for verification