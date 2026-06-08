# SAS & watsonx Partnership Showcase

A modern, responsive web application built with React and IBM Carbon Design System that highlights the strategic partnership between SAS and IBM watsonx.

## 🎯 Overview

This application showcases how IBM watsonx's AI and data platform aligns with SAS's strategic initiatives for 2025-2027, including:

- **Scaling data & AI workloads** with watsonx.data
- **Democratizing AI** through watsonx.ai
- **Strengthening compliance** via watsonx.governance
- **Accelerating talent development** with watsonx Orchestrate

## 🚀 Features

- **Hero Section**: Eye-catching introduction with gradient background
- **SAS Overview**: Comprehensive look at SAS's market position and capabilities
- **Strategic Initiatives**: Four key focus areas for SAS's future
- **watsonx Portfolio**: Detailed breakdown of each watsonx component:
  - watsonx.ai (AI Studio)
  - watsonx.data (Hybrid Lakehouse)
  - watsonx Orchestrate (Low-Code Agent Platform)
  - watsonx.governance (AI Governance)
- **Solution Mapping**: Direct alignment between SAS needs and watsonx capabilities
- **Engagement Path**: Proposed next steps for partnership
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: IBM Carbon Design System G100 theme for professional appearance

## 🛠️ Technologies Used

- **React 18**: Modern JavaScript framework
- **IBM Carbon Design System**: Enterprise-grade UI components
- **Carbon Icons**: Professional iconography
- **SCSS**: Advanced styling with Carbon themes
- **Responsive Grid**: Carbon's flexible grid system

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## 🔧 Installation

1. Navigate to the project directory:
```bash
cd sas-watsonx-showcase
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode

Start the development server:
```bash
npm start
```

The application will open automatically in your browser at [http://localhost:3000](http://localhost:3000)

### Production Build

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `build/` directory.

### Testing

Run the test suite:
```bash
npm test
```

## 📁 Project Structure

```
sas-watsonx-showcase/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js          # Main application component
│   ├── App.scss        # Application styles
│   ├── index.js        # Entry point
│   ├── index.css       # Global styles
│   └── ...
├── package.json
└── README.md
```

## 🎨 Key Components

### Navigation
- Sticky header with navigation links
- Smooth scrolling to sections
- IBM branding

### Sections
1. **Hero**: Title, subtitle, and key tags
2. **SAS Overview**: Company background and platform capabilities
3. **Strategic Initiatives**: Four priority areas with icons
4. **watsonx Portfolio**: Detailed product information
5. **Solution Mapping**: Table showing initiative-to-solution alignment
6. **Next Steps**: Four-phase engagement path
7. **Footer**: Copyright and trademark information

## 🎨 Customization

### Changing Colors

Edit `src/App.scss` to modify the color scheme:
```scss
// Hero gradient
background: linear-gradient(135deg, #0f62fe 0%, #8a3ffc 100%);

// Icon colors
.blue { color: #0f62fe; }
.purple { color: #8a3ffc; }
.green { color: #24a148; }
.teal { color: #009d9a; }
```

### Modifying Content

Edit `src/App.js` to update text, add sections, or modify layout.

### Changing Theme

To switch to a different Carbon theme, edit `src/App.scss`:
```scss
@use '@carbon/react/scss/theme' with (
  $theme: themes.$white  // or themes.$g10, themes.$g90, themes.$g100
);
```

## 📱 Responsive Breakpoints

- **Small (sm)**: < 672px (Mobile)
- **Medium (md)**: 672px - 1056px (Tablet)
- **Large (lg)**: > 1056px (Desktop)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Content Sources

All content is based on the SAS & watsonx partnership presentation materials, including:
- SAS company overview and market position
- Strategic initiatives for 2025-2027
- IBM watsonx product capabilities
- Solution mapping and engagement recommendations

## 🤝 Contributing

To contribute to this project:

1. Make your changes
2. Test thoroughly
3. Ensure responsive design works
4. Update documentation if needed

## 📄 License

This project is created for demonstration purposes.

## 🔗 Resources

- [IBM Carbon Design System](https://carbondesignsystem.com/)
- [React Documentation](https://react.dev/)
- [IBM watsonx](https://www.ibm.com/watsonx)
- [SAS](https://www.sas.com/)

## 📞 Support

For questions or issues, please contact the IBM consulting team.

---

**Built with ❤️ using IBM Carbon Design System**
