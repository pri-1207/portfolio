<<<<<<< HEAD
# Prisha Gupta — Portfolio Website

A premium, minimalist, pastel-themed portfolio website built with Next.js, Tailwind CSS, GSAP, and React Three Fiber.

![Portfolio Preview](https://via.placeholder.com/1200x630/F7F4FF/9B8AC4?text=Prisha+Gupta+Portfolio)

## ✨ Features

- **Modern Design** — Pastel color palette with glassmorphism effects
- **Smooth Animations** — GSAP ScrollTrigger for scroll-based animations
- **3D Elements** — React Three Fiber floating orbs with subtle movement
- **Responsive** — Optimized for mobile, tablet, and desktop
- **Focus Mode** — Toggle to reduce animations for accessibility
- **SEO Optimized** — Meta tags, OpenGraph, and semantic HTML

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | GSAP + ScrollTrigger |
| 3D Graphics | React Three Fiber + Drei |
| Fonts | Space Grotesk + Inter |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd "portfolio website"

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio website/
├── app/
│   ├── layout.js      # Root layout with SEO
│   ├── page.js        # Main page
│   └── globals.css    # Global styles
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Achievements.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ScrollProgress.jsx
│   ├── CustomCursor.jsx
│   ├── FocusModeToggle.jsx
│   └── three/
│       └── FloatingOrb.jsx
├── public/
│   └── resume.pdf     # Add your resume here
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the pastel palette:

```js
colors: {
  pastel: {
    lavender: '#F7F4FF',
    blue: '#F2F7FF',
    beige: '#FFF5F0',
    accent: '#9B8AC4',
    // ...
  }
}
```

### Content

Update content in individual component files:
- `components/About.jsx` — Bio and stats
- `components/Projects.jsx` — Project cards
- `components/Experience.jsx` — Work history
- `components/Contact.jsx` — Contact info

## 🚢 Deployment (Vercel)

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Deploy with default settings

```bash
# Or deploy via CLI
npx vercel
```

## ⚡ Performance Tips

- Images: Use WebP format, optimize with `next/image`
- Fonts: Already using `next/font` for optimal loading
- 3D: FloatingOrb uses minimal geometry for performance
- Animations: Focus Mode disables animations for low-power devices

## 📊 Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | 90+ |
| Accessibility | 90+ |
| Best Practices | 90+ |
| SEO | 90+ |

## 📄 License

MIT License — feel free to use this template for your own portfolio.

---

**Built with calm design & sharp engineering.**
=======
# portfolio
My portfolio webiste
>>>>>>> 858b036cbc6442f104aed6a12ff4748f425a806e
