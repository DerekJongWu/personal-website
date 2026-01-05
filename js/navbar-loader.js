// Navbar Loader - Dynamically loads navbar component into pages
async function loadNavbar() {
    try {
        // Determine the correct path based on current page location
        const path = window.location.pathname;
        const isRoot = path.endsWith('index.html') || 
                       path.endsWith('/') ||
                       (!path.includes('/pages/') && !path.includes('/projects/'));
        
        // Calculate relative path to components directory
        let navbarPath;
        if (isRoot) {
            navbarPath = 'components/navbar.html';
        } else if (path.includes('/projects/')) {
            // Nested in projects subdirectory
            navbarPath = '../../components/navbar.html';
        } else {
            // In pages directory
            navbarPath = '../components/navbar.html';
        }
        
        // Add cache-busting parameter to ensure fresh load
        const cacheBuster = `?v=${Date.now()}`;
        const response = await fetch(navbarPath + cacheBuster);
        if (!response.ok) {
            throw new Error(`Failed to load navbar: ${response.statusText}`);
        }
        
        const navbarHtml = await response.text();
        
        // Find or create navbar container
        let navbarContainer = document.getElementById('navbar-container');
        if (!navbarContainer) {
            navbarContainer = document.createElement('div');
            navbarContainer.id = 'navbar-container';
            // Insert before the main content or at the start of body
            const body = document.body;
            const firstChild = body.firstElementChild;
            if (firstChild) {
                body.insertBefore(navbarContainer, firstChild);
            } else {
                body.appendChild(navbarContainer);
            }
        }
        
        navbarContainer.innerHTML = navbarHtml;
        
        // Fix navigation links based on current page location
        fixNavbarLinks(isRoot);
        
        // Initialize dark mode if the toggle exists
        if (typeof initDarkMode === 'function') {
            initDarkMode();
        }
        
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

function fixNavbarLinks(isRoot) {
    const navbar = document.getElementById('navbar-container');
    if (!navbar) return;
    
    const navLinks = navbar.querySelectorAll('nav a[data-nav-link]');
    const homeLink = navbar.querySelector('#navbar-home-link');
    const path = window.location.pathname;
    const isNested = path.includes('/projects/');
    
    if (isRoot) {
        // On root page
        if (homeLink) {
            homeLink.setAttribute('href', 'index.html');
        }
        navLinks.forEach(link => {
            const page = link.getAttribute('data-nav-link');
            link.setAttribute('href', `pages/${page}.html`);
        });
    } else if (isNested) {
        // In projects subdirectory
        if (homeLink) {
            homeLink.setAttribute('href', '../../index.html');
        }
        navLinks.forEach(link => {
            const page = link.getAttribute('data-nav-link');
            link.setAttribute('href', `../../pages/${page}.html`);
        });
    } else {
        // On subpages in pages directory
        if (homeLink) {
            homeLink.setAttribute('href', '../index.html');
        }
        navLinks.forEach(link => {
            const page = link.getAttribute('data-nav-link');
            link.setAttribute('href', `../pages/${page}.html`);
        });
    }
}

// Load navbar when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    loadNavbar();
}

