# Derek Wu - Personal Portfolio Website

A modern, responsive portfolio website showcasing my work in machine learning engineering, venture capital, and technology consulting. Features an animated SVG visualization that morphs between chemical engineering, neural networks, and decision trees - representing my career journey.

## 🌟 Features

- **Animated Hero Section**: Custom SVG animation morphing through 3 states (molecules → neural network → decision trees)
- **Multi-page Architecture**: Home, Projects, Blog, and Contact pages
- **Project Showcase**: Detailed case studies of ML and VC projects
- **Blog Integration**: Ready for Substack embed
- **Dark Mode**: System-aware theme switching with manual toggle
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Performance Optimized**: Pure CSS/SVG animations, minimal JavaScript
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 📁 Project Structure

```
personal-website/
├── index.html              # Home page with animated SVG
├── css/
│   └── styles.css         # Custom styles and animations
├── js/
│   └── main.js            # Dark mode, navigation, utilities
├── images/                # Image assets
├── pages/
│   ├── projects.html      # Portfolio showcase
│   ├── blog.html          # Blog with Substack embed
│   ├── contact.html       # Contact form and info
│   └── projects/          # Individual project detail pages
│       ├── fraud-detection.html
│       ├── healthcare-ai.html
│       └── ... (more projects)
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Option 1: Python Simple Server (Recommended)

```bash
# Navigate to the project directory
cd personal-website

# Start a local server on port 8000
python3 -m http.server 8000

# Or use npm script
npm run dev
```

Visit `http://localhost:8000` in your browser.

### Option 2: Live Server (VS Code Extension)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Direct File Access

Simply open `index.html` in your browser (some features like dark mode persistence may not work)

## 🎨 Customization Guide

### 1. Update Personal Information

**Home Page (index.html)**
- Line 77: Change name from "DEREK WU"
- Lines 100-104: Update hero text
- Lines 125-140: Modify About section with your story
- Lines 163-173: Update skills
- Lines 185-250: Customize project cards

**All Pages**
- Update header navigation links
- Change footer social media links
- Modify contact information

### 2. Configure Substack Blog (pages/blog.html)

```html
<!-- Line 72: Replace with your Substack URL -->
<iframe src="YOUR_SUBSTACK_URL" ...></iframe>

<!-- Line 142: Update newsletter CTA link -->
<a href="YOUR_SUBSTACK_URL/subscribe" ...>
```

### 3. Setup Contact Form (pages/contact.html)

The contact form needs a backend service. Options:

**Formspree (Recommended - Free tier available)**
```javascript
// In js/main.js, uncomment and configure:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
});
```

**Netlify Forms**
Add to form tag: `<form name="contact" method="POST" data-netlify="true">`

**Web3Forms**
Add hidden input: `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">`

### 4. Customize Colors

Edit color variables in Tailwind config (all HTML files):

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                "primary": "#2b7cee",        // Change primary blue
                "background-light": "#f6f7f8",
                "background-dark": "#101822",
            }
        }
    }
}
```

Or in `css/styles.css`:

```css
:root {
    --primary: #2b7cee;
    --primary-dark: #1a5bb8;
    /* ... */
}
```

### 5. Add More Projects

1. Create new project detail page in `pages/projects/`
2. Use `fraud-detection.html` as a template
3. Add project card to `pages/projects.html`
4. Update filtering categories as needed

## 🎭 Animated SVG Customization

The hero SVG morphs through 3 states on a 15-second loop:
- **0-5s**: Chemical molecules (benzene ring structure)
- **5-10s**: Neural network layers
- **10-15s**: VC decision tree

To modify animations, edit the SVG in `index.html` (lines 110-320):
- Adjust durations: Change `dur="15s"` attributes
- Modify colors: Update gradient stops
- Add states: Create new `<g>` groups with opacity animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (stacked layouts, simplified navigation)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: > 1024px (full multi-column layouts)

## 🌓 Dark Mode

Dark mode is automatically detected from system preferences and can be toggled manually. Preference is saved to localStorage.

Toggle button is in the header (moon icon).

## 🔧 Development Tips

### Testing Locally

```bash
# Start server
npm run dev

# Test dark mode
# Open DevTools → Console → Run:
document.documentElement.classList.toggle('dark')

# Test responsive
# DevTools → Toggle Device Toolbar (Cmd+Shift+M)
```

### Adding Analytics

Add Google Analytics or Plausible to `<head>` of each page:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO Optimization

Each page includes basic meta tags. Consider adding:
- Open Graph tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data
- Sitemap.xml
- robots.txt

## 🚀 Deployment Options

### Netlify (Recommended)

1. Push to GitHub
2. Connect repo to Netlify
3. Build settings: (none needed - static site)
4. Deploy!

**Bonus**: Netlify Forms work automatically

### GitHub Pages

```bash
# Push to main branch
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages
# Settings → Pages → Source: main branch
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Traditional Web Hosting

Upload all files via FTP to your web host's public_html directory.

## 📋 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork for your own use
- Submit bug reports
- Suggest improvements

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 📧 Contact

- Email: your.email@example.com
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)

---

**Built with:**
- HTML5, CSS3, JavaScript (Vanilla)
- Tailwind CSS (CDN)
- Google Fonts (Manrope, Playfair Display)
- Material Symbols Icons

**Design Philosophy:**
Clean, minimal, fast, accessible, and professional.
