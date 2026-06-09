# Layout & Spacing Fixes - SAS & watsonx Website

## Overview
This document outlines all layout, spacing, and alignment fixes applied to ensure consistent visual rhythm and professional presentation across all sections.

---

## 1. STANDARDIZED LAYOUT SYSTEM

### Global Container System
```scss
// Standard container for all sections
.section-container {
  max-width: 1056px;  // Carbon standard
  margin: 0 auto;
  padding: 0 32px;
}

// Section vertical spacing
section {
  padding: 80px 0;  // Consistent top/bottom
}

// Heading spacing
.section-heading {
  margin-bottom: 32px;  // Consistent space after headings
}
```

### Spacing Scale (Carbon Design System)
- **XS**: 8px
- **SM**: 16px
- **MD**: 24px
- **LG**: 32px
- **XL**: 48px
- **2XL**: 64px
- **3XL**: 80px
- **4XL**: 96px

---

## 2. SECTION-BY-SECTION FIXES

### Hero Section
**Issues Fixed:**
- Inconsistent padding
- Content not centered properly

**Changes Applied:**
```scss
.hero-section {
  padding: 96px 0 80px 0;  // Extra top padding for hero
  
  .hero-content {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .hero-title {
    margin-bottom: 32px;  // Consistent spacing
  }
  
  .hero-subtitle {
    margin-bottom: 24px;  // Space between paragraphs
  }
  
  .hero-tags {
    margin-top: 48px;  // Clear separation from text
  }
}
```

---

### Context Section (Why Now)
**Issues Fixed:**
- Tiles too close together
- Inconsistent grid gaps

**Changes Applied:**
```scss
.context-section {
  padding: 80px 0;
  background: #f4f4f4;
  
  .section-container {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .cds--grid {
    row-gap: 24px;  // Vertical spacing between tiles
    column-gap: 24px;  // Horizontal spacing
  }
  
  .context-tile {
    padding: 32px;  // Increased internal padding
    height: 100%;
  }
}
```

---

### SAS Overview Section
**Issues Fixed:**
- Description text too close to heading
- Tiles cramped

**Changes Applied:**
```scss
.sas-section {
  padding: 80px 0;
  background: #ffffff;
  
  .section-description {
    margin-bottom: 48px;  // More space before tiles
    max-width: 900px;  // Constrain text width
  }
  
  .cds--grid {
    row-gap: 24px;
    column-gap: 24px;
  }
  
  .sas-tile {
    padding: 24px;
    height: 100%;
  }
}
```

---

### Challenges Section (Accordion)
**Issues Fixed:**
- Accordion too wide
- Items too close together
- Not centered

**Changes Applied:**
```scss
.challenges-section {
  padding: 80px 0;
  background: #f4f4f4;
  
  .section-container {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .accordion-container {
    max-width: 900px;  // Constrain accordion width
    margin: 0 auto;  // Center it
  }
  
  .cds--accordion__item {
    margin-bottom: 16px;  // Space between items
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .challenge-content {
    padding: 24px 0;  // Internal spacing
  }
  
  .challenge-description {
    margin-bottom: 24px;  // Space before list
  }
  
  .challenge-list li {
    margin-bottom: 12px;  // Space between list items
  }
}
```

---

### Before vs After Section
**Issues Fixed:**
- Cards not aligned properly
- Insufficient gap between columns
- Cramped internal spacing

**Changes Applied:**
```scss
.transformation-section {
  padding: 80px 0;
  background: #ffffff;
  
  .section-container {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .cds--grid {
    column-gap: 32px;  // Clear gap between before/after
    row-gap: 32px;  // For mobile stacking
  }
  
  .comparison-card {
    padding: 32px;  // Increased internal padding
    height: 100%;
    
    .comparison-header {
      margin-bottom: 24px;  // Space after header
    }
    
    .comparison-list li {
      margin-bottom: 16px;  // Space between items
      line-height: 1.7;  // Better readability
    }
  }
}
```

---

### Initiatives Section (Tabs)
**Issues Fixed:**
- Tab content cramped
- No spacing between tabs and content

**Changes Applied:**
```scss
.initiatives-section {
  padding: 80px 0;
  background: #f4f4f4;
  
  .section-container {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .cds--tabs {
    margin-top: 32px;  // Space from heading
  }
  
  .cds--tab-content {
    padding-top: 24px;  // Space between tabs and content
  }
  
  .tab-content {
    padding: 48px;  // Generous internal padding
    min-height: 300px;
    
    .tab-icon {
      margin-bottom: 24px;
    }
    
    h3 {
      margin-bottom: 24px;
    }
    
    p {
      line-height: 1.7;
    }
  }
}
```

---

### watsonx Platform Section (DARK)
**Issues Fixed:**
- Insufficient vertical padding
- Cards too close together
- Poor contrast with dark background

**Changes Applied:**
```scss
.watsonx-section.dark {
  padding: 96px 0;  // Extra padding for dark section
  background: #161616;
  
  .section-container {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .section-heading {
    margin-bottom: 48px;  // More space in dark section
  }
  
  .cds--grid {
    row-gap: 32px;  // Increased gap between cards
    column-gap: 32px;
  }
  
  .watsonx-card {
    padding: 32px;  // Generous padding
    height: 100%;
    
    .watsonx-icon {
      margin-bottom: 24px;
    }
    
    h3 {
      margin-bottom: 16px;
    }
    
    p {
      margin-bottom: 24px;
      line-height: 1.7;
    }
    
    .benefit {
      margin-top: 24px;
      padding: 16px;
    }
  }
}
```

---

### How It Works Section
**Issues Fixed:**
- Steps too close together
- Numbers not properly aligned

**Changes Applied:**
```scss
.how-it-works-section {
  padding: 80px 0;
  background: #ffffff;
  
  .section-container {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .cds--grid {
    column-gap: 24px;
    row-gap: 48px;  // More space for mobile
  }
  
  .flow-step {
    padding: 24px 16px;
    
    .step-number {
      margin-bottom: 24px;
    }
    
    h4 {
      margin-bottom: 12px;
    }
  }
}
```

---

### Solution Mapping Section (Table)
**Issues Fixed:**
- Table too close to heading
- Not aligned with container

**Changes Applied:**
```scss
.mapping-section {
  padding: 80px 0;
  background: #f4f4f4;
  
  .section-container {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .cds--data-table-container {
    margin-top: 32px;  // Space from heading
  }
  
  .cds--data-table {
    th {
      padding: 16px;
    }
    
    td {
      padding: 24px 16px;  // More vertical padding
      line-height: 1.6;
    }
  }
}
```

---

### Business Value Section
**Issues Fixed:**
- Tiles too close together
- Inconsistent spacing

**Changes Applied:**
```scss
.value-section {
  padding: 80px 0;
  background: #ffffff;
  
  .section-container {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .cds--grid {
    row-gap: 24px;
    column-gap: 24px;
  }
  
  .value-tile {
    padding: 32px;
    height: 100%;
    
    .value-icon {
      margin-bottom: 20px;
    }
    
    h4 {
      margin-bottom: 16px;
    }
  }
}
```

---

### Use Cases Section
**Issues Fixed:**
- Cards too close together
- Not enough vertical spacing

**Changes Applied:**
```scss
.use-cases-section {
  padding: 80px 0;
  background: #f4f4f4;
  
  .section-container {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .use-case-card {
    padding: 32px;
    margin-bottom: 24px;  // Space between cards
    
    &:last-child {
      margin-bottom: 0;
    }
    
    h3 {
      margin-bottom: 16px;
    }
    
    p {
      line-height: 1.7;
    }
  }
}
```

---

### Engagement Section
**Issues Fixed:**
- Stepper and CTA too close
- CTA section cramped

**Changes Applied:**
```scss
.engagement-section {
  padding: 80px 0;
  background: #ffffff;
  
  .section-container {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .engagement-stepper {
    padding: 48px 32px;
    margin-bottom: 48px;  // Space before CTA
  }
  
  .cta-section {
    padding: 48px 32px;
    
    h3 {
      margin-bottom: 16px;
    }
    
    p {
      margin-bottom: 32px;
    }
  }
}
```

---

## 3. RESPONSIVE BREAKPOINTS

### Mobile (< 768px)
```scss
@media (max-width: 768px) {
  section {
    padding: 48px 0;  // Reduced padding
  }
  
  .section-container {
    padding: 0 16px;  // Reduced horizontal padding
  }
  
  .hero-section {
    padding: 64px 0 48px 0;
  }
  
  .watsonx-section.dark {
    padding: 64px 0;
  }
  
  .tab-content {
    padding: 32px !important;
  }
  
  .comparison-card,
  .watsonx-card,
  .value-tile {
    margin-bottom: 24px;
  }
}
```

---

## 4. VISUAL RHYTHM (Background Alternation)

```scss
// Ensure clear visual separation
.hero-section { background: #ffffff; }
.context-section { background: #f4f4f4; }
.sas-section { background: #ffffff; }
.challenges-section { background: #f4f4f4; }
.transformation-section { background: #ffffff; }
.initiatives-section { background: #f4f4f4; }
.watsonx-section.dark { background: #161616; }
.how-it-works-section { background: #ffffff; }
.mapping-section { background: #f4f4f4; }
.value-section { background: #ffffff; }
.use-cases-section { background: #f4f4f4; }
.engagement-section { background: #ffffff; }
.footer-section { background: #161616; }
```

---

## 5. TYPOGRAPHY HIERARCHY

```scss
// Consistent heading sizes
.section-heading {
  font-size: 2.75rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.section-description {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 48px;
  color: #525252;
}

// Card/tile headings
h3 {
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.3;
}

h4 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}

// Body text
p {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #525252;
}
```

---

## 6. SUMMARY OF CHANGES

### Spacing Standardization
✅ All sections: 80px vertical padding
✅ Hero section: 96px top padding
✅ Dark watsonx section: 96px vertical padding
✅ Heading spacing: 32px below all headings
✅ Grid gaps: 24px–32px consistently

### Container Alignment
✅ Max-width: 1056px for all sections
✅ Horizontal padding: 32px
✅ Centered with margin: 0 auto
✅ Accordion constrained to 900px

### Internal Spacing
✅ Card/tile padding: 24px–32px
✅ Accordion items: 16px margin-bottom
✅ List items: 12px–16px spacing
✅ Before/After gap: 32px
✅ Stepper to CTA: 48px gap

### Visual Rhythm
✅ Alternating backgrounds applied
✅ Dark section stands out
✅ Clear section separation

### Typography
✅ Consistent heading hierarchy
✅ Proper line-height (1.6–1.7)
✅ Adequate spacing between text blocks

---

## 7. IMPLEMENTATION CHECKLIST

- [x] Global container system defined
- [x] Section padding standardized (80px)
- [x] Heading spacing fixed (32px)
- [x] Grid gaps standardized (24px–32px)
- [x] Accordion constrained and centered
- [x] Before/After grid fixed
- [x] Tabs spacing improved
- [x] watsonx dark section enhanced
- [x] Table spacing fixed
- [x] Use cases spacing improved
- [x] Engagement section spacing fixed
- [x] Responsive breakpoints defined
- [x] Visual rhythm established
- [x] Typography hierarchy enforced

---

**Result**: Professional, consistent layout with proper breathing room and visual rhythm throughout the entire website.