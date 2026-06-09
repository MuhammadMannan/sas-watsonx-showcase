# Global Layout System Documentation

## Overview

This document explains the global layout system implemented across the SAS & watsonx Partnership website to ensure perfect horizontal alignment of all content sections.

## Problem Solved

Previously, sections had inconsistent horizontal alignment due to:
- Multiple container implementations with different max-widths
- Carbon Grid/Column components adding their own padding
- Nested containers multiplying padding effects
- Section-specific sizing overrides

## Solution: Global Container Pattern

### Core Concept

A single, reusable `.page-container` class that ALL sections use for horizontal layout constraints:

```scss
.page-container {
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  padding-left: $spacing-07;  // 32px
  padding-right: $spacing-07; // 32px
  
  @include breakpoint-down(md) {
    padding-left: $spacing-05;  // 16px
    padding-right: $spacing-05; // 16px
  }
}
```

### Backwards Compatibility

For existing code using `.section-container`:

```scss
.section-container {
  @extend .page-container;
}
```

## Implementation Pattern

### React Component Structure

Every section follows this consistent pattern:

```jsx
<Section className="section-name">
  <div className="page-container">
    <Grid>
      {/* Content here */}
    </Grid>
  </div>
</Section>
```

### SCSS Structure

Sections only define:
1. **Vertical padding** (top/bottom)
2. **Background color**
3. **Grid gaps** (not padding)

```scss
.section-name {
  background: var(--cds-background);
  padding: $spacing-12 0; // 80px vertical only
  
  @include breakpoint-down(md) {
    padding: $spacing-09 0; // 48px on mobile
  }
  
  // Uses global .page-container - no custom sizing
  .cds--grid {
    // Only define gaps, no padding/margin
    row-gap: $spacing-06;
    column-gap: $spacing-06;
  }
}
```

## What NOT to Do

### ❌ Don't Add Custom Container Sizing

```scss
// WRONG - Don't do this
.my-section {
  .cds--grid {
    max-width: 1200px;  // ❌ Custom max-width
    margin: 0 auto;
    padding: 0 32px;    // ❌ Custom padding
  }
}
```

### ❌ Don't Nest Multiple Containers

```jsx
{/* WRONG - Don't do this */}
<Section>
  <div className="page-container">
    <div className="custom-container">  {/* ❌ Extra nesting */}
      <Grid>
        <Column>
          <div className="another-container">  {/* ❌ More nesting */}
            Content
          </div>
        </Column>
      </Grid>
    </div>
  </div>
</Section>
```

### ❌ Don't Override Grid Padding

```scss
// WRONG - Don't do this
.my-section {
  .cds--grid {
    padding: 0 40px;  // ❌ Overriding container padding
  }
}
```

## Sections Using Global Container

All sections now use the global container system:

1. **Hero Section** - Uses `.page-container`
2. **Context Section** - Uses `.page-container`
3. **SAS Overview** - Uses `.page-container`
4. **Challenges Section** - Uses `.page-container`
5. **Transformation Section** - Uses `.page-container`
6. **Initiatives Section** - Uses `.section-container` (extends `.page-container`)
7. **watsonx Platform** - Uses `.page-container`
8. **How It Works** - Uses `.page-container`
9. **Solution Mapping** - Uses `.page-container`
10. **Use Cases** - Uses `.page-container`
11. **Business Value** - Uses `.page-container`
12. **Engagement Path** - Uses `.page-container`
13. **Footer** - Uses `.page-container`

## Benefits

### ✅ Perfect Vertical Alignment
All content edges line up perfectly across the entire page.

### ✅ Consistent Spacing
Horizontal padding is uniform: 32px on desktop, 16px on mobile.

### ✅ Maintainability
Single source of truth for layout constraints. Change once, applies everywhere.

### ✅ Responsive by Default
Mobile breakpoints handled globally, no per-section overrides needed.

### ✅ Carbon Design Compliance
Follows IBM Carbon spacing tokens and breakpoint conventions.

## Spacing Tokens Used

- `$spacing-05` (16px) - Mobile horizontal padding
- `$spacing-06` (24px) - Small gaps
- `$spacing-07` (32px) - Desktop horizontal padding, medium gaps
- `$spacing-09` (48px) - Mobile vertical padding
- `$spacing-12` (80px) - Desktop vertical padding

## Breakpoints

- **Desktop**: Default styles
- **Tablet/Mobile** (`md` and below): Reduced padding and spacing

```scss
@include breakpoint-down(md) {
  // Mobile styles
}
```

## Special Cases

### Tabs Container (Initiatives Section)

The initiatives section uses tabs that need special handling:

```jsx
<Section className="initiatives-section">
  <div className="section-container">
    <Heading className="section-heading">Title</Heading>
    <div className="tabs-container">
      <Tabs>
        {/* Tab content */}
      </Tabs>
    </div>
  </div>
</Section>
```

The `.tabs-container` has its own background and padding but still respects the parent container's width constraints.

### Dark Background Sections

Dark sections (like watsonx platform) use the same pattern:

```scss
.watsonx-section.dark {
  background: #161616;
  padding: $spacing-12 0;
  color: #f4f4f4;
  
  // Still uses global .page-container
}
```

## Testing Alignment

To verify perfect alignment:

1. Open browser DevTools
2. Inspect any section's `.page-container` div
3. Note the left/right edges
4. Scroll through page - all sections should align to same edges
5. Test on mobile (< 768px) - should have 16px padding
6. Test on desktop (> 768px) - should have 32px padding

## Future Additions

When adding new sections:

1. **Always** wrap Grid in `.page-container` div
2. **Only** set vertical padding on section
3. **Only** set gaps on Grid, never padding
4. **Never** add custom max-width or horizontal constraints

## Migration Guide

If you find a section not using the global container:

### Step 1: Update React Component

```jsx
// Before
<Section className="my-section">
  <Grid>
    {/* content */}
  </Grid>
</Section>

// After
<Section className="my-section">
  <div className="page-container">
    <Grid>
      {/* content */}
    </Grid>
  </div>
</Section>
```

### Step 2: Update SCSS

```scss
// Before
.my-section {
  padding: 80px 0;
  
  .cds--grid {
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 32px;
    row-gap: 24px;
  }
}

// After
.my-section {
  padding: $spacing-12 0;
  
  // Uses global .page-container
  .cds--grid {
    row-gap: $spacing-06;
  }
}
```

### Step 3: Test

1. Check alignment with other sections
2. Test responsive behavior
3. Verify no horizontal scroll

## Summary

The global layout system ensures:
- **Consistency**: All sections align perfectly
- **Simplicity**: One pattern for all sections
- **Maintainability**: Single source of truth
- **Responsiveness**: Mobile-first by default
- **Carbon Compliance**: Uses design tokens throughout

---

**Last Updated**: June 2026  
**Maintained By**: Development Team