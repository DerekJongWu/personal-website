# Quick Customization Guide

This guide helps you customize the portfolio website with your own information.

## ✅ Essential Updates (Do These First!)

### 1. Update Your Name & Title
**File:** `index.html`
- Line 6: Update page title
- Line 77: Change "DEREK WU" to your name
- Lines 100-104: Update your name in the hero section

### 2. Add Your Substack Blog
**File:** `pages/blog.html`
- Line 72: Replace `YOUR_SUBSTACK_URL` with your actual Substack URL
  - Example: `https://yourname.substack.com`
- Line 142: Update the newsletter signup link

### 3. Update Contact Information
**File:** `pages/contact.html`
- Line 145: Replace `your.email@example.com` with your email
- Lines 153, 165, 177: Update LinkedIn, GitHub, Twitter URLs
- Line 150: Update the `copyEmail` function with your email

### 4. Configure Social Media Links

Update in **ALL** HTML files (footer section):
```html
<a href="https://linkedin.com/in/YOURPROFILE">LinkedIn</a>
<a href="https://github.com/YOURUSERNAME">GitHub</a>
<a href="https://twitter.com/YOURUSERNAME">Twitter</a>
```

Files to update:
- `index.html` (doesn't have footer - add if needed)
- `pages/projects.html` (line ~366)
- `pages/blog.html` (line ~100)
- `pages/contact.html` (line ~309)
- `pages/projects/fraud-detection.html` (line ~484)

## 🎨 Optional Customizations

### 5. Change Primary Color

**Option A:** Update Tailwind config in all HTML files
```javascript
colors: {
    "primary": "#2b7cee",  // Change this hex color
}
```

**Option B:** Update CSS variables in `css/styles.css`
```css
:root {
    --primary: #2b7cee;
    --primary-dark: #1a5bb8;
}
```

### 6. Modify About Section
**File:** `index.html` (lines 125-155)

Replace the text with your own story:
- Your background/transition
- Work experience
- Current focus
- Achievements

### 7. Update Skills
**File:** `index.html` (lines 163-173)

Replace skill tags with your own:
```html
<span class="...">Your Skill</span>
```

### 8. Customize Projects

**Update Home Page Projects** (`index.html`, lines 185-250):
- Change project titles
- Update descriptions
- Modify icons (Material Symbols)
- Link to your actual project pages

**Add New Project Detail Pages:**
1. Copy `pages/projects/fraud-detection.html`
2. Rename to your project name
3. Update all content sections
4. Add project card to `pages/projects.html`

## 📧 Setup Contact Form

Choose one option and update `js/main.js`:

### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. In `js/main.js` (line 85), uncomment and update:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
});
```

### Option 2: Netlify Forms (If deploying to Netlify)
Add to form tag in `pages/contact.html`:
```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 3: Web3Forms
1. Get API key from [web3forms.com](https://web3forms.com)
2. Add hidden input to form:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
```

## 🖼️ Add Images

### Project Images
1. Add images to `/images/projects/` folder
2. Update image paths in project HTML files:
```html
<img src="../../images/projects/your-project.jpg" alt="Description">
```

### Profile Photo (Optional)
1. Add photo to `/images/profile.jpg`
2. Add to home page or about section:
```html
<img src="images/profile.jpg" alt="Derek Wu" class="rounded-full w-48 h-48">
```

## 📊 Add Analytics

### Google Analytics
Add to `<head>` of all HTML files:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Privacy-friendly)
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🚀 Deploy Your Site

### Quick Deploy to Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy site"
6. Done! Your site is live

### Custom Domain
1. In Netlify: Site settings → Domain management
2. Add custom domain
3. Update DNS records at your domain provider
4. SSL certificate automatically configured

## 📝 Checklist Before Launch

- [ ] Updated all occurrences of "Derek Wu" with your name
- [ ] Changed email addresses to yours
- [ ] Updated all social media links
- [ ] Configured Substack URL
- [ ] Setup contact form backend
- [ ] Replaced project content with your projects
- [ ] Updated About section with your story
- [ ] Changed skills to match yours
- [ ] Tested all navigation links
- [ ] Tested dark mode toggle
- [ ] Tested responsive design on mobile
- [ ] Added Google Analytics (optional)
- [ ] Configured custom domain (optional)

## 🆘 Troubleshooting

### Dark mode not persisting
- Make sure `js/main.js` is properly linked
- Check browser console for errors

### Contact form not working
- Verify form backend is configured
- Check network tab for API errors

### Navigation links broken
- Verify file paths are correct
- Check capitalization (case-sensitive on Linux servers)

### SVG animation not showing
- Clear browser cache
- Ensure JavaScript is enabled

## 📞 Need Help?

Check the main [README.md](README.md) for more details or open an issue on GitHub.

---

**Pro Tip:** Search for "Derek Wu" across all files to find places you need to update!

```bash
grep -r "Derek Wu" . --exclude-dir=node_modules
```
