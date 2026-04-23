# José Antonio López Molina - AdTech Portfolio

A personal portfolio website showcasing expertise in AdTech, Full Stack development, and digital advertising technology. Built with Astro 4.15.3, this project demonstrates modern web development practices with a distinctive newspaper-style editorial design.

## Description

This portfolio represents my professional journey in the digital advertising and technology space. It features comprehensive information about my experience, projects, knowledge areas, and technical skills—all presented through an innovative AdTech-inspired interface that mirrors real-world advertising formats.

The site includes 8 complete pages: a home page and 7 detailed articles covering my experience, education, projects, courses, technical knowledge, Header Bidding expertise, and personal introduction.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 4.15.3 | Static site generator and framework |
| TypeScript | — | Type-safe JavaScript |
| CSS (Vanilla) | — | Styling (no frameworks) |
| @astrojs/sitemap | — | Automatic sitemap generation |

Additional integrations and dependencies include ViewTransitions for SPA-like navigation, and various Astro integrations configured in the project.

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:4321` by default.

## Features

- **8 Complete Pages**: Home page plus 7 comprehensive articles covering experience, education, projects, courses, technical knowledge, Header Bidding, and About Me
- **Dark/Light Mode**: ThemeToggle component with localStorage persistence for user preference
- **ViewTransitions**: Smooth, SPA-like navigation between pages without full page reloads
- **Full SEO Implementation**:
  - Open Graph meta tags for social sharing
  - Twitter Card support
  - JSON-LD Schema.org Person data
  - Auto-generated sitemap.xml
  - robots.txt configuration
- **Responsive Design**: Mobile-first approach ensuring seamless experience across all devices
- **Newspaper-Style AdTech Theme**: Editorial layout inspired by traditional newspapers, reimagined for digital advertising technology context

## Architecture

```
src/
├── layouts/
│   └── Layout.astro          # Base layout with SEO, theme, ViewTransitions
├── pages/
│   ├── index.astro           # Home page
│   ├── articulo-experiencia.astro
│   ├── articulo-educacion.astro
│   ├── articulo-proyectos.astro
│   ├── articulo-cursos.astro
│   ├── articulo-conocimientos.astro
│   ├── articulo-header-bidding.astro
│   └── articulo-sobre-mi.astro
├── components/
│   ├── ads/                  # Ad component demos
│   │   ├── BillboardAd.astro
│   │   ├── LeaderboardAd.astro
│   │   ├── SkyscraperAd.astro
│   │   ├── MediumRectangleAd.astro
│   │   ├── WideSkyscraperAd.astro
│   │   ├── TechStackSkinAd.astro
│   │   ├── ContactSkyscraperAd.astro
│   │   ├── PublicationAd.astro
│   │   └── TestimonialAd.astro
│   ├── AdBanner.astro
│   ├── AdCard.astro
│   ├── AdCarousel.astro
│   ├── AdTechExpertBanner.astro
│   ├── Breadcrumbs.astro
│   ├── Card.astro
│   ├── Experience.astro
│   ├── ExperienceCard.astro
│   ├── FrontPageArticle.astro
│   ├── Knowledge.astro
│   ├── NewspaperArticle.astro
│   ├── NewspaperHeader.astro
│   ├── NavMenu.astro
│   ├── Projects.astro
│   ├── StickyFooterBanner.astro
│   ├── TechStack.astro
│   └── ThemeToggle.astro
├── svgs/
│   └── [50+ tech logo components]
│       ├── LogosAstroIcon.astro
│       ├── LogosReact.astro
│       ├── LogosNodejs.astro
│       ├── LogosTypescriptIcon.astro
│       ├── LogosPython.astro
│       ├── LogosJava.astro
│       ├── LogosPhp.astro
│       ├── LogosDockerIcon.astro
│       ├── LogosAws.astro
│       ├── LogosGoogleAds.astro
│       ├── LogosGoogleAdsense.astro
│       ├── LogosGoogleTagManager.astro
│       └── [many more]
├── data/
│   ├── articles.json
│   ├── publications.json
│   └── recommendations.json
└── env.d.ts                  # TypeScript environment definitions

public/
└── logos/                    # Company and brand logos
```

### Layout System

The project uses a single base layout (`Layout.astro`) that provides:

- Global CSS variables for theming
- ViewTransitions integration
- SEO meta tags and JSON-LD
- Theme persistence logic
- Navigation structure

### Component Categories

1. **Ad Components** (`/src/components/ads/`): Realistic ad unit demonstrations mimicking standard IAB advertising formats
2. **Layout Components**: Header, navigation, footer, breadcrumbs
3. **Content Components**: Article displays, experience cards, project listings
4. **UI Components**: ThemeToggle, Cards, Banners
5. **SVG Components**: Tech stack logos and brand icons

### Data Management

JSON files in `/src/data/` store structured content:

- `articles.json`: Article metadata and content structure
- `publications.json`: Published works and contributions
- `recommendations.json`: Professional recommendations

## SEO & Metadata

### Meta Tags

The site implements comprehensive meta tags including:

- Canonical URLs
- Open Graph tags (og:title, og:description, og:image, og:type, og:url)
- Twitter Card meta tags (twitter:card, twitter:site, twitter:title, twitter:description, twitter:image)
- Robots meta directives

### Structured Data

JSON-LD Schema.org Person markup provides search engines with structured information:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "José Antonio López Molina",
  "jobTitle": "AdTech & Full Stack Developer",
  "url": "https://josewemass.es"
}
```

### Sitemap

The `@astrojs/sitemap` integration automatically generates `sitemap-index.xml` and `sitemap-0.xml` at build time, including all pages, last modified dates, and change frequency hints.

### robots.txt

Configured to allow all crawlers while specifying sitemap location.

## Deployment

### Vercel (Recommended)

Vercel provides the optimal deployment experience for Astro projects:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel automatically detects Astro and configures the build settings
4. Deploy with zero configuration

```bash
# Optional: Deploy from CLI
npm i -g vercel
vercel
```

### GitHub Pages

1. Update `astro.config.mjs` with your GitHub Pages URL
2. Configure GitHub Actions or use the built-in deployment option
3. Push changes to trigger deployment

### Netlify

1. Connect your repository to Netlify
2. Specify build command: `npm run build`
3. Specify publish directory: `dist`
4. Deploy automatically on push

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create production-optimized build in `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run astro` | Run Astro CLI commands |

## Development Notes

### Theme System

The theme toggle uses CSS custom properties and localStorage for persistence. The theme is applied at the document root level, ensuring all components respect the user's preference.

### ViewTransitions

Astro's ViewTransitions API provides seamless navigation. The layout includes the `<ViewTransitions />` component which intercepts link clicks and updates the DOM without full page reloads.

### Ad Component System

Ad components are built as Astro components and demonstrate various IAB standard ad formats. They serve both as visual examples and as reusable UI elements throughout the portfolio.

## Browser Support

The project supports all modern browsers including Chrome, Firefox, Safari, Edge, and mobile browsers. The responsive design ensures compatibility across desktop, tablet, and mobile devices.

## License

This project is a personal portfolio. All content, images, and creative work are proprietary. Contact the author for any usage inquiries.

## Author

**José Antonio López Molina**

- AdTech & Full Stack Developer
- Specialized in digital advertising technology, header bidding, and modern web development
- Location: Spain

---

Built with Astro 4.15.3 • TypeScript • Vanilla CSS