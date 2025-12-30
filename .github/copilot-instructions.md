# Real Estate Portfolio - Project Instructions

## Project Overview
This is a modern real estate portfolio website built with Astro, React, and Tailwind CSS. It features property listings, team information, and a contact system.

## Tech Stack
- **Astro 4.0+**: Static site generation with partial hydration
- **React 18.2+**: Interactive components  
- **Tailwind CSS 3.3+**: Utility-first styling
- **TypeScript**: Type-safe development

## Project Structure
```
src/
├── pages/           # Auto-routed Astro pages
│   ├── index.astro  # Homepage
│   ├── properties.astro
│   ├── about.astro
│   └── contact.astro
├── components/      # React components
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── PropertyCard.tsx
├── layouts/         # Layout templates
│   └── BaseLayout.astro
└── assets/          # Static resources
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

3. Build for production:
   ```bash
   npm run build
   ```

## Key Features
- ✅ Responsive design with Tailwind CSS
- ✅ Interactive components with React
- ✅ Fast performance with Astro
- ✅ TypeScript support
- ✅ Property filtering and display
- ✅ Contact form
- ✅ Team showcase

## Customization Guide

### Update Colors
Edit `tailwind.config.mjs`:
```javascript
colors: {
  primary: '#2563eb',
  secondary: '#1e40af',
  accent: '#f59e0b',
}
```

### Add Properties
Modify property arrays in:
- `src/pages/index.astro` (featured)
- `src/pages/properties.astro` (full listing)

### Update Business Info
- Footer: `src/components/Footer.jsx`
- Contact page: `src/pages/contact.astro`
- Navigation: `src/components/Navigation.jsx`

## Development Notes
- React components use `.jsx` or `.tsx` extensions
- Astro pages use `.astro` extension
- Styles use Tailwind CSS classes
- Server-side rendering by default in Astro
- Use `client:load` directive for interactive React components

## Common Tasks

### Add a new page
1. Create `src/pages/newpage.astro`
2. Import BaseLayout and components
3. Route automatically matches filename

### Create a new component
1. Create file in `src/components/`
2. Export default React function
3. Import in `.astro` pages with `client:load`

### Customize styling
1. Edit `tailwind.config.mjs` for global config
2. Use Tailwind classes in templates
3. Custom CSS in `<style>` blocks uses `@apply`

## Dependencies
- astro
- @astrojs/react
- @astrojs/tailwind
- react
- react-dom
- tailwindcss
- autoprefixer
- postcss

## Next Steps
- Replace placeholder property images with real ones
- Connect contact form to backend service
- Add property detail pages
- Implement search/filter functionality
- Add social media links
- Set up analytics
