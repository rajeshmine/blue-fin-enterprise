# Blue Fin Engineering Enterprises

A modern, professional website for **Blue Fin Engineering Enterprises** — leading manufacturers of material handling and assembly solutions. Built with Next.js 16, React 19, and Tailwind CSS.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Content Management](#content-management)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Deployment](#deployment)
- [Scripts](#scripts)

---

## Overview

Blue Fin Engineering Enterprises is a South India–based company providing material handling, automation machinery, conveyors, fabrications, and industrial consumables. This website showcases their products, services, and contact options with a responsive, dark-mode–ready design.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.6 | React framework with App Router |
| **React** | 19.2.3 | UI library |
| **TypeScript** | ^5 | Type safety |
| **Tailwind CSS** | ^4.2.1 | Styling |
| **Framer Motion** | ^12.34.3 | Animations |
| **GSAP** | ^3.14.2 | Hero animations |
| **Lucide React** | ^0.575.0 | Icons |
| **Swiper** | ^12.1.2 | Clients carousel |
| **EmailJS** | ^4.4.1 | Contact form emails |

---

## Features

### Core Features

- **Responsive design** — Mobile-first, works on all screen sizes
- **Dark mode** — System preference + manual toggle
- **Smooth scrolling** — Lenis-based smooth scroll
- **Scroll-to-top** — Floating button on scroll
- **SEO** — Metadata per page, semantic HTML

### Homepage Sections

1. **Hero** — Headline, subheadline, CTAs, illustration-style image
2. **Features** — Core strengths (Innovative Products, Team of Experts, Strong Supply Chain)
3. **About** — Company story and mission
4. **Why Choose Us** — Expert Team, Competitive Price, Trusted Supplier, Fast Delivery
5. **Products** — Product image grid with links
6. **Clients Carousel** — Client logos (2 slides on mobile, 5 on desktop)
7. **CTA** — Enquiry + WhatsApp buttons
8. **Contact** — Address, phone, email, map, social links

### Product Catalog

- **Products listing** (`/products`) — Categories with subcategories
- **Product detail** (`/products/[slug]`) — Per-product pages with image gallery
- **Dynamic routes** — All product subcategories generated at build time
- **Image lightbox** — Zoom, navigation, keyboard support

### Contact & Communication

- **Contact form** — EmailJS integration for enquiry submissions
- **WhatsApp integration** — Floating button + inline links
- **Dual CTAs** — Contact form and WhatsApp on CTA sections
- **Google Maps** — Embedded map and directions link

### Navigation

- **Desktop** — Horizontal nav with Products dropdown
- **Mobile** — Hamburger menu with accordion submenu
- **Products submenu** — Level 2 links, closes on link click

---

## Project Structure

```
blue-fin-enterprise/
├── public/
│   └── images/           # Product images, logos, clients
│       ├── about.png
│       ├── logo.png
│       ├── clients/      # Client logos
│       ├── products/     # Default product images
│       ├── asf/          # Aero Space Fixture
│       ├── aws/          # Assembly Work Station
│       ├── conveyors/
│       ├── fabrications/
│       └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout, Navbar, Footer
│   │   ├── page.tsx      # Homepage
│   │   ├── contact/
│   │   │   └── page.tsx  # Contact page
│   │   ├── products/
│   │   │   ├── page.tsx  # Products listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # Product detail (SSG)
│   │   ├── globals.css
│   │   └── custom.css
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── About.tsx
│   │   ├── WhyChoose.tsx
│   │   ├── Products.tsx
│   │   ├── ClientsCarousel.tsx
│   │   ├── CTA.tsx
│   │   ├── contact.tsx       # Footer contact section
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactPageClient (via contact page)
│   │   ├── ProductsPageClient.tsx
│   │   ├── ProductPageClient.tsx
│   │   ├── ProductImageGrid.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── SmoothScroll.tsx
│   │   └── ThemeScript.tsx
│   └── lib/
│       ├── content.ts    # All website content (strings, images)
│       └── products.ts  # Product categories & image config
├── .env                 # Environment variables
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.18+ or 20+
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd blue-fin-enterprise
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root (see [Configuration](#configuration)).

4. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

5. **Build for production**

   ```bash
   npm run build
   npm start
   ```

---

## Configuration

### Environment Variables

Create a `.env` file:

```env
# EmailJS - Get these from https://dashboard.emailjs.com/
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
```

**EmailJS setup:**

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (e.g. Gmail)
3. Create a template with variables: `{{from_name}}`, `{{from_email}}`, `{{from_phone}}`, `{{message}}`
4. Copy Service ID, Template ID, and Public Key to `.env`

### Tailwind Theme

Custom colors in `tailwind.config.ts`:

- `primary`: `#0D1B3D` (deep navy)
- `accent`: `#E53935` (red accent)
- `dark`: `#0A0F2C` (dark background)

---

## Content Management

### Centralized Content (`src/lib/content.ts`)

All text, links, and image paths are in `content.ts`. Components are presentational and import from here.

| Export | Purpose |
|--------|---------|
| `SITE` | Site name, tagline, description |
| `HERO` | Hero headline, CTAs, image |
| `ABOUT` | About title, paragraphs, image |
| `FEATURES` | Feature items with icons |
| `PRODUCTS` | Homepage product images |
| `WHY_CHOOSE_US` | Why choose us items |
| `CLIENTS` | Client carousel images |
| `CTA` | CTA title, primary + WhatsApp buttons |
| `CONTACT` | Address, phone, email, map, WhatsApp |
| `FOOTER` | Copyright, company name |
| `CONTACT_PAGE` | Contact page hero, card, form labels |
| `PRODUCTS_PAGE` | Products page hero, metadata |
| `PRODUCT_DETAIL` | Product detail breadcrumb, sidebar, CTA |
| `CONTACT_FORM` | Form labels, placeholders, messages |
| `NAV` | Nav items, products label, logo |

### Product Catalog (`src/lib/products.ts`)

- `productCategories` — Categories and subcategories
- `getProductHref(slug)` — URL for a product
- `getSubcategoryBySlug(slug)` — Lookup for detail pages
- `getProductImages(subcategory, category)` — Image folder and filenames

To add a product:

1. Add to `productCategories` in `products.ts`
2. Add images to `public/images/<folder>/`

---

## Pages & Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage |
| `/contact` | Static | Contact page with form and map |
| `/products` | Static | Products listing by category |
| `/products/[slug]` | SSG | Product detail (e.g. `/products/conveyors`) |

---

## Components

### Layout

- **Navbar** — Fixed, scroll progress bar, Products dropdown, mobile menu
- **Footer** — Copyright, company name
- **ScrollToTop** — Appears on scroll
- **WhatsAppButton** — Floating bottom-right
- **ThemeToggle** — Dark/light mode
- **SmoothScroll** — Lenis smooth scroll

### Homepage

- **Hero** — GSAP animations, CTAs
- **Features** — 3 cards with colored icons
- **About** — Text + image
- **WhyChoose** — 4 items on dark background
- **Products** — Image grid linking to `/products`
- **ClientsCarousel** — Swiper carousel
- **CTA** — Enquiry + WhatsApp
- **Contact** — Address, phone, map, socials

### Product Pages

- **ProductsPageClient** — Category cards with icons
- **ProductPageClient** — Sidebar, product grid, CTA
- **ProductImageGrid** — Grid + lightbox

### Contact

- **ContactForm** — EmailJS form (name, phone, email, message)
- **Contact page** — Hero, info card, form, map

---

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other platforms

- **Build:** `npm run build`
- **Output:** `.next` (Node.js server)
- **Start:** `npm start` (runs on port 3000 by default)

### Static export (optional)

To use `next export`, configure `output: 'export'` in `next.config.ts`. Note: Some features (e.g. EmailJS) work client-side; API routes would need an external backend.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Browser Support

- Chrome, Firefox, Safari, Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## License

Private — Blue Fin Engineering Enterprises. All rights reserved.
