# 🚀 Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## 1️⃣ Start Local Development Server

```bash
cd personal-website
npm run dev
```

Then open: **http://localhost:8000**

## 2️⃣ Essential Customizations

### Update Your Info (Priority!)

**Name & Title**
```bash
# File: index.html (lines 77, 100-104)
Replace: "DEREK WU" → "Your Name"
Replace: "Derek Wu" → "Your Name"
```

**Email**
```bash
# File: pages/contact.html (line 145)
Replace: your.email@example.com → your@email.com
```

**Social Links** (Update in ALL page footers)
```bash
LinkedIn: https://linkedin.com/in/YOURPROFILE
GitHub: https://github.com/YOURUSERNAME
Twitter: https://twitter.com/YOURUSERNAME
```

**Substack Blog**
```bash
# File: pages/blog.html (line 72)
Replace: YOUR_SUBSTACK_URL → https://yourname.substack.com
```

## 3️⃣ Deploy to Web (Choose One)

### Option A: Netlify (Recommended - 30 seconds!)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. Deploy:
   - Go to [netlify.com](https://netlify.com)
   - "New site from Git"
   - Select your repo
   - Click "Deploy" (settings are already configured!)

3. Done! Your site is live at: `https://random-name.netlify.app`

### Option B: Vercel

```bash
npm i -g vercel
vercel
```

### Option C: GitHub Pages

```bash
# Push to GitHub (same as above)
# Then: Settings → Pages → Source: main branch → Save
# Live at: https://username.github.io/repo-name
```

## 4️⃣ Setup Contact Form

### Quick: Formspree (Free tier available)

1. Sign up at [formspree.io](https://formspree.io)
2. Create form, get ID
3. Edit `js/main.js` line 85:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_ID', {
       method: 'POST',
       body: formData,
       headers: { 'Accept': 'application/json' }
   });
   ```

### Easier: Netlify Forms (if using Netlify)

Add to form in `pages/contact.html`:
```html
<form name="contact" method="POST" data-netlify="true">
```

Done! Forms work automatically.

## 5️⃣ Customize Content

Edit these sections in `index.html`:

- **About** (lines 125-155): Your story
- **Skills** (lines 163-173): Your tech stack
- **Projects** (lines 185-250): Your work

## 📁 Important Files

| File | Purpose |
|------|---------|
| `index.html` | Home page with animated SVG |
| `pages/projects.html` | Portfolio showcase |
| `pages/blog.html` | Blog (Substack embed) |
| `pages/contact.html` | Contact form |
| `css/styles.css` | Custom styles |
| `js/main.js` | Dark mode, navigation |
| `README.md` | Full documentation |
| `CUSTOMIZATION_GUIDE.md` | Detailed customization |

## 🎨 Quick Color Change

All HTML files, find:
```javascript
"primary": "#2b7cee"  // Change to your color
```

## 🐛 Troubleshooting

**Site not loading?**
- Check you're in the right directory: `pwd`
- Try: `python3 -m http.server 8000` directly

**Links broken?**
- File paths are case-sensitive
- Check capitalization matches exactly

**Dark mode not working?**
- Clear browser cache
- Check browser console for errors

**Contact form not submitting?**
- Need to configure backend (see step 4)

## 📚 Learn More

- **Full docs**: Read [README.md](README.md)
- **Customization**: See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)
- **Site structure**: Check [SITEMAP.md](SITEMAP.md)

## 🆘 Common Tasks

### Add a project detail page
```bash
cp pages/projects/fraud-detection.html pages/projects/your-project.html
# Edit your-project.html with your content
# Add project card to pages/projects.html
```

### Change primary color
```bash
# Find and replace in all .html files:
#2b7cee → #YOUR_COLOR
```

### Add Google Analytics
```html
<!-- Add to <head> of all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## ✅ Pre-Launch Checklist

- [ ] Updated name everywhere
- [ ] Changed email and social links
- [ ] Configured Substack URL
- [ ] Setup contact form backend
- [ ] Customized About section
- [ ] Updated Skills section
- [ ] Modified project content
- [ ] Tested on mobile
- [ ] Tested dark mode
- [ ] Added analytics (optional)

**Ready to launch? Push to GitHub and deploy!**

```bash
git add .
git commit -m "Customize portfolio"
git push
```

Then deploy via Netlify/Vercel/GitHub Pages. 🚀

---

**Need help?** Open an issue or check the full README.md
