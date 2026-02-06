# Elite Marketing Agency Website

A high-fidelity marketing landing page built with React, Vite, Tailwind CSS, and Three.js. This website features smooth scroll animations, WebGL 3D effects, and a modern, production-ready design.

## Features

- **WebGL Hero Section**: Interactive 3D floating geometric shapes powered by Three.js
- **Smooth Scroll Animations**: Framer Motion-powered fade-in animations as you scroll
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with dark theme and gradient accents
- **Performance Optimized**: Built with Vite for fast loading and optimal performance

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - WebGL 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx       # Top navigation bar
│   ├── Hero.tsx            # Hero section with content
│   ├── HeroScene.tsx       # WebGL 3D scene
│   ├── LogoSection.tsx     # Client logos
│   ├── ResultsSection.tsx  # Results showcase
│   ├── RevenueSection.tsx  # Revenue stats and case studies
│   ├── ServicesSection.tsx # Done For You / Done With You
│   ├── ScheduleSection.tsx # Booking interface
│   ├── Footer.tsx          # Footer with links
│   └── AnimatedSection.tsx # Scroll animation wrapper
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css             # Global styles
```

## Installation

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Component Overview

### Hero Section
- Fullscreen WebGL canvas with animated 3D shapes
- Main headline and call-to-action buttons
- Tilted card with TikTok branding
- Smooth floating animations

### Logo Section
- Grid of client brand logos
- Hover effects
- Responsive layout

### Results Section
- Two-column layout
- Image and text content
- Call-to-action button

### Revenue Section
- Revenue statistics
- Case study cards with custom backgrounds
- Hover effects and animations

### Services Section
- "Done For You" and "Done With You" service descriptions
- Alternating left/right layouts
- Team collaboration imagery

### Schedule Section
- Booking interface mockup
- Calendar visualization
- Team member avatars
- Call-to-action

### Footer
- Navigation links
- Social media icons
- Copyright information

## Customization

### Colors
The site uses a dark theme with the following primary colors:
- Background: `#0a0a1f` (deep navy)
- Accent: Blue-to-purple gradients
- Text: White and gray shades

### Animations
Animation timings and easing can be adjusted in `AnimatedSection.tsx`:
- Duration: 0.6s
- Easing: `[0.25, 0.1, 0.25, 1]` (smooth ease-in-out)

### 3D Scene
The WebGL scene can be customized in `HeroScene.tsx`:
- Geometry types and colors
- Animation speeds
- Camera position
- Lighting

## Performance Notes

- The Three.js bundle is approximately 1.1MB (332KB gzipped)
- Consider code-splitting for larger applications
- Images use gradient placeholders for optimal loading
- All animations are GPU-accelerated

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

WebGL support required for 3D effects.
