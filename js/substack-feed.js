// Substack RSS Feed Loader
class SubstackFeed {
    constructor(substackUrl, containerId, maxPosts = 6) {
        this.substackUrl = substackUrl.replace(/\/$/, ''); // Remove trailing slash
        this.rssUrl = `${this.substackUrl}/feed`;
        this.containerId = containerId;
        this.maxPosts = maxPosts;
        this.init();
    }

    async init() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        try {
            // Show loading state
            container.innerHTML = this.getLoadingHTML();
            
            // Fetch RSS feed using CORS proxy (since RSS feeds often have CORS restrictions)
            const feed = await this.fetchRSSFeed();
            const posts = this.parseRSSFeed(feed);
            
            // Display posts
            container.innerHTML = this.renderPosts(posts);
        } catch (error) {
            console.error('Error loading Substack feed:', error);
            container.innerHTML = this.getErrorHTML();
        }
    }

    async fetchRSSFeed() {
        // Try direct fetch first (Substack RSS feeds usually allow CORS)
        try {
            const response = await fetch(this.rssUrl, {
                mode: 'cors',
                headers: {
                    'Accept': 'application/rss+xml, application/xml, text/xml'
                }
            });
            if (!response.ok) throw new Error('Failed to fetch RSS feed');
            const text = await response.text();
            return text;
        } catch (error) {
            console.warn('Direct RSS fetch failed, trying CORS proxy:', error);
            // If direct fetch fails due to CORS, use a CORS proxy
            try {
                // Using allorigins.win as a free CORS proxy
                const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(this.rssUrl)}`;
                const response = await fetch(proxyUrl);
                if (!response.ok) throw new Error('Failed to fetch RSS feed via proxy');
                const data = await response.json();
                return data.contents; // allorigins returns {contents: "..."}
            } catch (proxyError) {
                console.error('Proxy fetch also failed:', proxyError);
                // Try RSS2JSON as fallback
                try {
                    const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(this.rssUrl)}`;
                    const response = await fetch(rss2jsonUrl);
                    if (!response.ok) throw new Error('RSS2JSON failed');
                    const data = await response.json();
                    // Return as JSON object for special handling
                    return { _isJSON: true, ...data };
                } catch (rss2jsonError) {
                    throw new Error('All RSS feed methods failed');
                }
            }
        }
    }

    extractImageFromHTML(html) {
        if (!html) return null;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const img = doc.querySelector('img');
        if (img) {
            return img.getAttribute('src') || img.getAttribute('data-src');
        }
        return null;
    }

    parseRSSFeed(feed) {
        // If feed is already parsed JSON from RSS2JSON
        if (typeof feed === 'object' && feed._isJSON && feed.items) {
            return feed.items.slice(0, this.maxPosts).map(item => {
                // Extract image from content/description
                const imageUrl = this.extractImageFromHTML(item.content || item.description || '') || 
                               item.enclosure?.link || 
                               item.thumbnail || 
                               null;
                
                return {
                    title: item.title || 'Untitled',
                    link: item.link || '#',
                    pubDate: item.pubDate || '',
                    description: item.description || item.content || '',
                    content: item.content || item.description || '',
                    author: item.author || feed.feed?.title || 'Substack',
                    image: imageUrl
                };
            });
        }

        // Otherwise parse XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(feed, 'text/xml');
        
        // Check for parsing errors
        const parseError = xmlDoc.querySelector('parsererror');
        if (parseError) {
            throw new Error('Failed to parse RSS feed XML');
        }
        
        const items = xmlDoc.querySelectorAll('item');
        
        const posts = [];
        for (let i = 0; i < Math.min(items.length, this.maxPosts); i++) {
            const item = items[i];
            
            // Extract image from various sources
            let imageUrl = null;
            
            // Try enclosure tag first (common for podcasts/images)
            const enclosure = item.querySelector('enclosure');
            if (enclosure && enclosure.getAttribute('type')?.startsWith('image/')) {
                imageUrl = enclosure.getAttribute('url');
            }
            
            // Try media:content tag
            if (!imageUrl) {
                const mediaContent = item.querySelector('media\\:content') || item.querySelector('content');
                if (mediaContent) {
                    imageUrl = mediaContent.getAttribute('url') || mediaContent.getAttribute('url');
                }
            }
            
            // Try extracting from content:encoded or description HTML
            if (!imageUrl) {
                const content = item.querySelector('content\\:encoded')?.textContent || 
                               item.querySelector('description')?.textContent || '';
                imageUrl = this.extractImageFromHTML(content);
            }
            
            // Try image tag
            if (!imageUrl) {
                const imageTag = item.querySelector('image');
                if (imageTag) {
                    imageUrl = imageTag.querySelector('url')?.textContent || imageTag.getAttribute('url');
                }
            }
            
            posts.push({
                title: item.querySelector('title')?.textContent || 'Untitled',
                link: item.querySelector('link')?.textContent || '#',
                pubDate: item.querySelector('pubDate')?.textContent || '',
                description: item.querySelector('description')?.textContent || '',
                content: item.querySelector('content\\:encoded')?.textContent || item.querySelector('description')?.textContent || '',
                author: item.querySelector('author')?.textContent || item.querySelector('dc\\:creator')?.textContent || 'Substack',
                image: imageUrl
            });
        }
        return posts;
    }

    formatDate(dateString) {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        } catch {
            return dateString;
        }
    }

    stripHTML(html) {
        const tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    truncateText(text, maxLength = 150) {
        const stripped = this.stripHTML(text);
        if (stripped.length <= maxLength) return stripped;
        return stripped.substring(0, maxLength).trim() + '...';
    }

    renderPosts(posts) {
        if (posts.length === 0) {
            return this.getErrorHTML('No posts found.');
        }

        return `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${posts.map(post => this.renderPostCard(post)).join('')}
            </div>
        `;
    }

    renderPostCard(post) {
        const description = this.truncateText(post.description || post.content || '');
        const date = this.formatDate(post.pubDate);
        const hasImage = post.image && post.image.trim() !== '';
        
        // Image section
        const imageSection = hasImage ? `
            <div class="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/20 to-blue-600/20">
                <img 
                    src="${post.image}" 
                    alt="${post.title}"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onerror="this.style.display='none'; this.parentElement.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-blue-600/20');"
                />
            </div>
        ` : `
            <div class="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/20 to-blue-600/20">
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary/30 text-6xl">article</span>
                </div>
            </div>
        `;
        
        return `
            <article class="flex flex-col bg-white dark:bg-[#1a2634] rounded-xl border border-[#e5e7eb] dark:border-gray-800 shadow-sm hover:shadow-md transition-all overflow-hidden group">
                ${imageSection}
                <div class="p-6 flex flex-col flex-1">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-xs px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full font-medium">Article</span>
                        <span class="text-xs text-[#637588] dark:text-gray-400">${date}</span>
                    </div>
                    <h3 class="text-xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        ${post.title}
                    </h3>
                    <p class="text-[#637588] dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        ${description}
                    </p>
                    <a href="${post.link}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="inline-flex items-center text-sm font-bold text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Read on Substack
                        <span class="material-symbols-outlined text-base ml-1">arrow_forward</span>
                    </a>
                </div>
            </article>
        `;
    }

    getLoadingHTML() {
        return `
            <div class="flex items-center justify-center py-12">
                <div class="flex flex-col items-center gap-4">
                    <div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p class="text-[#637588] dark:text-gray-400">Loading posts...</p>
                </div>
            </div>
        `;
    }

    getErrorHTML(message = 'Unable to load Substack feed.') {
        return `
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                <div class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-yellow-600 dark:text-yellow-400 text-2xl">warning</span>
                    <div>
                        <h3 class="font-bold text-[#111418] dark:text-white mb-2">Unable to Load Feed</h3>
                        <p class="text-sm text-[#637588] dark:text-gray-400 mb-4">${message}</p>
                        <a href="${this.substackUrl}" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="inline-flex items-center text-sm font-bold text-primary hover:text-blue-600 transition-colors">
                            Visit Substack directly
                            <span class="material-symbols-outlined text-base ml-1">open_in_new</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Replace 'ctrlaltinvest' with your Substack publication name
    const substackUrl = 'https://ctrlaltinvest.substack.com';
    const feedContainer = document.getElementById('substack-feed-container');
    
    if (feedContainer) {
        window.substackFeed = new SubstackFeed(substackUrl, 'substack-feed-container', 6);
    }
});

