<h1 align=center>Power AI - Astro Theme</h1>

<p align=center>A modern, dark-themed AI/SaaS website template built with Astro, TailwindCSS & TypeScript. Converted from the Power AI Next.js theme to take advantage of Astro's superior static site performance.</p>

<p align=center>Made with ♥ by <a href="https://themefisher.com/">Themefisher</a> | Converted to Astro by <a href="https://github.com/mastershifuprime">mastershifuprime</a></p>

<p align=center> If you find this project useful, please give it a ⭐ to show your support.</p>

<p align=center>
  <a href="https://github.com/withastro/astro/releases/tag/astro%406.0.4">
    <img src="https://img.shields.io/static/v1?label=ASTRO&message=6.0.4&color=000&logo=astro" alt="Astro Version 6.0.4"/>
  </a>
  <a href="https://github.com/mastershifuprime/powerai-astro/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mastershifuprime/powerai-astro" alt="license">
  </a>
  <img src="https://img.shields.io/github/languages/code-size/mastershifuprime/powerai-astro" alt="code size">
</p>

## 📌 Key Features

- ⚡ **Blazing Fast** — Static site generation with Astro for optimal performance
- 🌑 **Dark Mode** — Sleek, modern dark theme design
- 🎨 **Tailwind CSS v4** — Utility-first styling with latest Tailwind
- ✨ **Smooth Animations** — Motion/Framer Motion powered scroll reveals and transitions
- 📱 **Fully Responsive** — Mobile-first design that looks great on all devices
- 📝 **Markdown Content** — Write and update content in Markdown/MDX
- 🔍 **SEO Optimized** — Built-in SEO meta tags and sitemap generation
- 🏷️ **Categories & Tags** — Organized blog content
- 📎 **Google Tag Manager** — Analytics ready
- 🧩 **React Islands** — Interactive components with Astro's island architecture
- 🎯 **TypeScript** — Full type safety throughout

### 📄 49 Pre-built Pages

- 🏠 **Homepage** — Hero, trusted clients, key features, statistics, pricing, testimonials, FAQ, CTA
- 📖 **About** — Company story, team, gallery, goals
- ✨ **Features** — Essential features & why choose us sections
- 💰 **Pricing** — Monthly/yearly toggle pricing cards
- 📞 **Contact** — Contact form with company details
- 📝 **Blog** — Blog listing with pagination + 6 blog posts
- 📊 **Case Studies** — Case study listing with pagination + 4 case studies
- 💼 **Careers** — Job listings + 8 individual career pages
- 📋 **Changelog** — Version history timeline
- 🔗 **Integrations** — Integration showcase + 15 individual integration pages
- 📄 **Regular Pages** — Elements, Privacy Policy, Terms of Service
- 🚫 **404** — Custom not found page

## 🔗 Integrations

- [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/) — React components as islands
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) — MDX support for rich content
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — Auto-generated sitemap
- [@tailwindcss/vite](https://tailwindcss.com/docs/installation/vite) — Tailwind CSS v4 via Vite
- [astro-auto-import](https://github.com/delucis/astro-auto-import) — Auto-import shortcodes in MDX
- [motion](https://motion.dev/) — Animations and scroll reveals
- [react-icons](https://react-icons.github.io/react-icons/) — Icon library

## 🚀 Getting Started

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) v22+ (see `.nvmrc`)
- npm, yarn, or pnpm

### 👉 Installation

```bash
# Clone the repository
git clone https://github.com/mastershifuprime/powerai-astro.git
cd powerai-astro

# Install dependencies
npm install
# or
yarn install
```

### 👉 Development

```bash
npm run dev
# or
yarn dev
```

This starts the dev server at `http://localhost:4321` with hot reload.

### 👉 Build for Production

```bash
npm run build
# or
yarn build
```

Output is generated in the `dist/` directory.

### 👉 Preview Production Build

```bash
npm run preview
# or
yarn preview
```

### 👉 Type Check

```bash
npm run check
# or
yarn check
```

## 📁 Project Structure

```
powerai-astro/
├── public/                  # Static assets (images, icons, fonts)
│   └── images/
├── scripts/                 # Build scripts
│   ├── themeGenerator.js    # Generates CSS from theme.json
│   └── jsonGenerator.js     # Generates JSON search index
├── src/
│   ├── config/              # Site configuration
│   │   ├── config.json      # Site settings, metadata, GTM
│   │   ├── menu.json        # Navigation menu structure
│   │   ├── social.json      # Social media links
│   │   └── theme.json       # Colors, fonts, sizing
│   ├── content/             # Markdown content (Astro Content Collections)
│   │   ├── homepage/        # Homepage content
│   │   ├── blog/            # Blog posts
│   │   ├── case-studies/    # Case study entries
│   │   ├── careers/         # Job listings
│   │   ├── integrations/    # Integration pages
│   │   ├── sections/        # Reusable section content (CTA, FAQ, etc.)
│   │   └── pages/           # Regular pages (privacy, terms)
│   ├── layouts/
│   │   ├── Base.astro       # Main HTML layout
│   │   ├── components/      # UI components (.astro + .tsx)
│   │   │   ├── animations/  # Motion animation wrappers
│   │   │   └── shape/       # SVG decorative shapes
│   │   ├── helpers/         # Helper components (DynamicIcon, etc.)
│   │   ├── partials/        # Page sections (Header, Footer, etc.)
│   │   └── shortcodes/      # MDX shortcodes (Accordion, Tabs, etc.)
│   ├── lib/                 # Utility libraries
│   │   ├── animations.ts    # Animation variant definitions
│   │   ├── contentParser.ts # Content loading utilities
│   │   └── utils/           # Helper functions
│   ├── pages/               # Astro file-based routing
│   ├── styles/              # CSS files
│   │   ├── main.css         # Main entry point
│   │   ├── base.css         # Base/reset styles
│   │   ├── buttons.css      # Button styles
│   │   ├── components.css   # Component styles
│   │   ├── navigation.css   # Nav/header styles
│   │   └── utilities.css    # Utility classes
│   ├── types/               # TypeScript type definitions
│   └── content.config.ts    # Astro content collection config
├── astro.config.mjs         # Astro configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## ⚙️ Configuration

### Site Settings (`src/config/config.json`)

```json
{
  "site": {
    "title": "Power AI",
    "base_url": "https://your-domain.com",
    "favicon": "/images/favicon.png"
  },
  "settings": {
    "pagination": 3,
    "sticky_header": true
  }
}
```

### Theme Customization (`src/config/theme.json`)

Customize colors, fonts, and sizing:

```json
{
  "colors": {
    "default": {
      "theme_color": {
        "primary": "#8F2FFE",
        "secondary": "#DF53FE",
        "body": "#0E0912",
        "card": "#151019"
      }
    }
  },
  "fonts": {
    "font_family": {
      "primary": "Inter:wght@300;400;500;600"
    }
  }
}
```

### Navigation (`src/config/menu.json`)

Supports regular links, dropdowns, and mega menus:

```json
{
  "main": [
    { "name": "Home", "url": "/" },
    { "name": "Features", "url": "/features" },
    {
      "name": "Pages",
      "hasChildren": true,
      "mega_menu": { ... }
    }
  ]
}
```

## 📝 Adding Content

### Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description"
image: "/images/blog/your-image.png"
category: "Technology"
author:
  name: "Author Name"
  avatar: "/images/avatars/avatar.jpg"
date: 2026-01-01
draft: false
featured: false
---

Your markdown content here...
```

### Case Studies

Create a new `.md` file in `src/content/case-studies/`:

```markdown
---
title: "Case Study Title"
description: "Brief description"
image: "/images/case-studies/image.png"
logo: "/images/case-studies/logo.png"
date: 2026-01-01
featured: false
---

Case study content...
```

### Career Listings

Create a new `.md` file in `src/content/careers/`:

```markdown
---
title: "Job Title"
description: "Role description"
job_info:
  employ_type: "Full-time"
  experience: "3+ years"
  salary_range: "$80k - $120k"
  location: "Remote"
  department: "Engineering"
  deadline: "2026-12-31"
---

Job details...
```

## 🏗️ Architecture

This theme uses **Astro's Island Architecture**:

- **Static `.astro` pages** — Pre-rendered at build time for maximum performance
- **React Islands** — Interactive components hydrated on the client only where needed:
  - `client:load` — Header (mega menu), Contact Form, Hero animations
  - `client:visible` — Scroll animations, Pricing toggle, FAQ accordion, Statistics counter

This approach delivers near-perfect Lighthouse scores while maintaining rich interactivity.

## 🚀 Deployment

### Netlify

Pre-configured with `netlify.toml`. Just connect your repo.

### Vercel

```bash
npx astro add vercel
npm run build
```

### Cloudflare Pages

```bash
npx astro add cloudflare
npm run build
```

### Docker

```bash
docker build -t powerai-astro .
docker run -p 3000:80 powerai-astro
```

### Static Hosting

Upload the `dist/` folder to any static hosting provider (Nginx, Apache, S3, etc.).

## 🐞 Reporting Issues

Found a bug? Please [open an issue](https://github.com/mastershifuprime/powerai-astro/issues).

## 📝 License

Copyright (c) 2024 - Present, Designed by [Themefisher](https://themefisher.com/) | Astro conversion by [mastershifuprime](https://github.com/mastershifuprime)

**Code License:** Released under the [MIT](https://github.com/mastershifuprime/powerai-astro/blob/main/LICENSE) license.

**Image license:** The images are only for demonstration purposes. They have their own licenses.

## 🙏 Credits

- Original Next.js theme: [Power AI by Themefisher](https://github.com/teamosis-products/powerai-nextjs)
- Astro boilerplate structure: [Astroplate by Zeon Studio](https://github.com/zeon-studio/astroplate)
