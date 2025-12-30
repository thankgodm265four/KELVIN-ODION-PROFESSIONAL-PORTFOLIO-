# Real Estate Portfolio

A modern real estate portfolio website built with **Astro**, **React**, and **Tailwind CSS**.

## 🚀 Features

- **Modern Landing Page**: Eye-catching hero section with call-to-action buttons
- **Property Listings**: Browse and filter through featured properties
- **Responsive Design**: Fully responsive layout that works on all devices
- **About Page**: Learn about our company and team
- **Contact Form**: Easy way for clients to get in touch
- **Performance Optimized**: Built with Astro for fast load times

## 🛠️ Tech Stack

- **Astro**: Static site generation and server-side rendering
- **React**: Interactive components with hooks
- **Tailwind CSS**: Utility-first styling framework
- **TypeScript**: Type-safe JavaScript development

## 📦 Installation

1. **Clone the repository** (or navigate to the project folder)
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── pages/           # Astro pages (auto-routed)
│   │   ├── index.astro  # Home page
│   │   ├── properties.astro # Properties listing
│   │   ├── about.astro  # About page
│   │   └── contact.astro # Contact page
│   ├── components/      # React and Astro components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── PropertyCard.tsx
│   ├── layouts/         # Layout templates
│   │   └── BaseLayout.astro
│   └── assets/          # Images, fonts, etc.
├── public/              # Static files
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json         # Project dependencies
```

## 🚀 Build & Deploy

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🎨 Customization

### Tailwind Colors
Edit `tailwind.config.mjs` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',      // Blue
      secondary: '#1e40af',    // Dark Blue
      accent: '#f59e0b',       // Amber
    },
  },
},
```

### Adding Properties
Modify the property data in `src/pages/properties.astro` and `src/pages/index.astro` to add your own properties.

### Updating Contact Info
Edit `src/components/Footer.jsx` and `src/pages/contact.astro` with your business information.

## 📄 License

MIT License - Feel free to use this project for your own real estate portfolio.

## 📧 Support

For questions or issues, please contact us at info@realestate.com

---

Built with ❤️ for real estate professionals
