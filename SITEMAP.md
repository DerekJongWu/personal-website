# Website Sitemap

Visual representation of the complete website structure.

```
🏠 Home (index.html)
│
├─ 📖 About Section (#about)
├─ 💼 Skills Section (#skills)
├─ 🎯 Featured Projects Section (#projects)
│
└─ Navigation Links:
   │
   ├─ 📁 Projects (pages/projects.html)
   │  │
   │  ├─ Filter: All Projects
   │  ├─ Filter: Machine Learning
   │  ├─ Filter: Healthcare
   │  ├─ Filter: Fintech
   │  ├─ Filter: Consulting
   │  │
   │  └─ Individual Project Pages:
   │     │
   │     ├─ 🔐 Fraud Detection ML System (pages/projects/fraud-detection.html)
   │     ├─ 🏥 AI Healthcare Platform (pages/projects/healthcare-ai.html) *
   │     ├─ 👁️ Intelligence Image Processing (pages/projects/intelligence-imaging.html) *
     │     ├─ 🎵 CRM Wrapped (pages/projects/crm-wrapped.html)
     │     └─ 🌐 Personal Website (pages/projects/personal-website.html)
   │
   ├─ 📝 Blog (pages/blog.html)
   │  │
   │  ├─ Substack Embed (iframe)
   │  ├─ Featured Posts Section
   │  └─ Newsletter Signup CTA
   │
   └─ 📧 Contact (pages/contact.html)
      │
      ├─ Contact Information Cards
      │  ├─ Email (with copy function)
      │  ├─ LinkedIn
      │  ├─ GitHub
      │  └─ Twitter
      │
      └─ Contact Form
         ├─ Name
         ├─ Email
         ├─ Subject
         ├─ Category Dropdown
         ├─ Message
         └─ Privacy Checkbox
```

\* *These project detail pages need to be created. Use `fraud-detection.html` as a template.*

## Page Features

### 🏠 Home Page
- **Animated SVG Hero**: Morphing visualization (molecules → neural network → decision trees)
- **About Section**: Personal story and background
- **Skills Display**: Technology stack showcase
- **Featured Projects**: 3 highlighted projects with cards
- **Dark Mode Toggle**: System-aware with manual override

### 📁 Projects Page
- **Category Filtering**: Interactive project filtering
- **Project Grid**: Responsive 3-column layout
- **Project Cards**: Hover effects, technology tags, categories
- **6 Projects Total** (3 more detail pages to create)

### 📝 Blog Page
- **Substack Integration**: Full embed via iframe
- **Featured Posts**: Showcase section with 2 sample posts
- **Newsletter CTA**: Prominent signup section
- **Category Tags**: ML Engineering, Venture Capital

### 📧 Contact Page
- **Two-Column Layout**: Contact info + form
- **Multiple Contact Methods**: Email, LinkedIn, GitHub, Twitter
- **Interactive Form**: Ready for backend integration (Formspree/Netlify/Web3Forms)
- **Email Copy Function**: One-click email copy
- **Availability Info**: Current status display

## Technical Features Across All Pages

✅ **Responsive Design** - Mobile, tablet, desktop
✅ **Dark Mode** - Auto-detect + manual toggle
✅ **Smooth Scrolling** - Navigation animations
✅ **Active Link Highlighting** - Current page indication
✅ **Mobile Menu** - Hamburger navigation
✅ **Accessibility** - Semantic HTML, ARIA labels
✅ **Performance** - Minimal JS, CSS animations
✅ **SEO Ready** - Meta tags, descriptions

## Assets & Resources

### Fonts
- **Manrope**: Primary UI font (200-800 weights)
- **Playfair Display**: Accent serif font (400-900 weights)
- **Material Symbols Outlined**: Icon font

### Frameworks & Libraries
- **Tailwind CSS**: Utility-first styling (CDN)
- **Vanilla JavaScript**: No framework dependencies

### Colors
- **Primary**: `#2b7cee` (Blue)
- **Primary Dark**: `#1a5bb8`
- **Background Light**: `#f6f7f8`
- **Background Dark**: `#101822`

## Future Enhancements (Optional)

- [ ] Add remaining 5 project detail pages
- [ ] Create actual blog post detail pages
- [ ] Add testimonials section
- [ ] Include resume download
- [ ] Add case study PDFs
- [ ] Create photography/gallery section
- [ ] Add animations to project cards
- [ ] Include video embeds
- [ ] Add search functionality for blog
- [ ] Create tags/categories for projects

## File Organization

```
Root Directory
├── HTML Pages (7 total)
│   ├── index.html (Home)
│   ├── pages/projects.html (Portfolio)
│   ├── pages/blog.html (Blog)
│   ├── pages/contact.html (Contact)
│   └── pages/projects/*.html (6 project details)
│
├── Assets
│   ├── css/styles.css (Custom styles)
│   ├── js/main.js (Interactivity)
│   └── images/ (Future: project images)
│
└── Configuration
    ├── package.json (Project metadata)
    ├── netlify.toml (Deployment config)
    ├── .gitignore (Git exclusions)
    ├── README.md (Full documentation)
    ├── CUSTOMIZATION_GUIDE.md (Quick start)
    └── SITEMAP.md (This file)
```

## Navigation Flow

**Typical User Journey:**

1. **Land on Home** → See animated SVG + intro
2. **Read About** → Learn background story
3. **View Projects** → Explore portfolio (filter by category)
4. **Project Details** → Deep dive into specific work
5. **Read Blog** → Engage with content on Substack
6. **Contact** → Reach out via form or social links

**Alternative Flow:**

1. **Direct to Blog** → From social media/newsletter
2. **Discover Projects** → Via blog post links
3. **Contact** → After reading case studies

## SEO Structure

**URL Structure:**
- `yourdomain.com/` - Home
- `yourdomain.com/pages/projects.html` - Projects
- `yourdomain.com/pages/projects/fraud-detection.html` - Project Detail
- `yourdomain.com/pages/blog.html` - Blog
- `yourdomain.com/pages/contact.html` - Contact

**Note:** Can be simplified with proper routing or static site generator in the future.

---

**Last Updated:** 2024
**Total Pages:** 4 main + 6 project detail pages (1 created, 5 templates needed)
**Estimated Build Time:** Fully functional, ready to deploy!
