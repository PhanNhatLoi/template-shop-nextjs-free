# Karma Shop Next.js

A modern e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🛍️ **Modern E-commerce UI** - Beautiful and responsive design
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- ⚡ **Next.js 14** - Latest React framework with App Router
- 🔧 **TypeScript** - Type-safe development
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎭 **Smooth Animations** - CSS transitions and hover effects
- 🖼️ **Optimized Images** - All images are properly sized and optimized

## Project Structure

```
karma-shop-nextjs/
├── public/
│   ├── img/                    # All images moved from root directory
│   │   ├── banner/            # Banner images
│   │   ├── category/          # Category images
│   │   ├── product/           # Product images
│   │   ├── features/          # Feature icons
│   │   ├── brand/             # Brand logos
│   │   ├── blog/              # Blog images
│   │   ├── elements/          # UI element images
│   │   ├── organic-food/      # Organic food images
│   │   └── sd/                # Sidebar images
│   ├── css/                   # Legacy CSS files (not used)
│   ├── js/                    # Legacy JS files (not used)
│   └── fonts/                 # Font files
├── src/
│   └── app/
│       ├── components/        # React components
│       │   ├── Banner.tsx
│       │   ├── Header.tsx
│       │   ├── CategoryArea.tsx
│       │   ├── ProductArea.tsx
│       │   ├── Features.tsx
│       │   ├── ExclusiveDeal.tsx
│       │   ├── BrandArea.tsx
│       │   ├── RelatedProduct.tsx
│       │   └── Footer.tsx
│       ├── globals.css        # Global styles with Tailwind
│       ├── layout.tsx         # Root layout
│       └── page.tsx           # Home page
├── tailwind.config.ts         # Tailwind configuration
├── package.json
└── README.md
```

## Image Migration

All images have been moved from the root directory to `public/img/` to keep the project self-contained. The following changes were made:

- ✅ All image paths updated to use `/img/` prefix
- ✅ Images organized in subdirectories by category
- ✅ Responsive image sizing implemented
- ✅ Optimized for mobile and desktop viewing

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management
- **CSS Animations** - Smooth transitions

## Components

### Banner

- Hero section with sliding images
- Responsive design with mobile optimization
- Auto-play carousel with navigation controls

### Header

- Sticky navigation with smooth transitions
- Dropdown menus for Shop, Blog, and Pages
- Mobile-responsive hamburger menu

### CategoryArea

- Masonry layout with varied image sizes
- Hover effects and smooth transitions
- Responsive grid system

### ProductArea

- Product carousel with slide animations
- Favorite toggle functionality
- Responsive product cards

### Features

- Service highlights with icons
- Hover animations and effects
- Responsive grid layout

### ExclusiveDeal

- Countdown timer for special offers
- Product slider with navigation
- Gradient background design

### BrandArea

- Brand logo grid with hover effects
- Grayscale to color transitions
- Responsive layout

### RelatedProduct

- Product grid with side banner
- Sale badges and pricing display
- Responsive design

### Footer

- Newsletter subscription
- Instagram feed grid
- Social media links
- Dark theme design

## Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Image Optimization

- All images are properly sized for their containers
- Responsive image classes implemented
- Hover effects and transitions optimized
- Mobile-first approach for image sizing

## Future Improvements

- [ ] Add product detail pages
- [ ] Implement shopping cart functionality
- [ ] Add user authentication
- [ ] Integrate with backend API
- [ ] Add search functionality
- [ ] Implement product filtering
- [ ] Add payment integration

## License

This project is for educational purposes.
