// Vault Password Protection
// Simple client-side authentication for the vault page
//
// HOW TO CHANGE THE PASSWORD:
// 1. Go to https://emn178.github.io/online-tools/sha256.html
// 2. Enter your desired password in the input field
// 3. Copy the generated SHA-256 hash
// 4. Replace the VAULT_PASSWORD_HASH value below with your new hash
//
// NOTE: This is client-side protection only. For production use, implement server-side authentication.

// Password hash (SHA-256 hash of the password)
// Default password is "password" - CHANGE THIS!
const VAULT_PASSWORD_HASH = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'; // Default: "password"

// Session timeout in milliseconds (default: 30 minutes)
// Change this value to adjust how long the session lasts
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

// Check if user is authenticated and session hasn't expired
function isAuthenticated() {
    const authStatus = sessionStorage.getItem('vault_authenticated');
    const authTimestamp = sessionStorage.getItem('vault_auth_timestamp');
    
    if (authStatus !== 'true' || !authTimestamp) {
        return false;
    }
    
    // Check if session has expired
    const now = Date.now();
    const sessionStart = parseInt(authTimestamp, 10);
    const sessionAge = now - sessionStart;
    
    if (sessionAge > SESSION_TIMEOUT) {
        // Session expired - clear authentication
        clearAuthentication();
        return false;
    }
    
    return true;
}

// Clear authentication data
function clearAuthentication() {
    sessionStorage.removeItem('vault_authenticated');
    sessionStorage.removeItem('vault_auth_timestamp');
}

// Hash a string using SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Authenticate user
async function authenticate(password) {
    const hashedPassword = await hashPassword(password);
    if (hashedPassword === VAULT_PASSWORD_HASH) {
        const now = Date.now();
        sessionStorage.setItem('vault_authenticated', 'true');
        sessionStorage.setItem('vault_auth_timestamp', now.toString());
        return true;
    }
    return false;
}

// Show login form
function showLoginForm() {
    // Check if login form already exists
    if (document.getElementById('vault-login-section')) {
        return; // Already showing login form
    }

    const vaultContent = document.getElementById('vault-content');
    const main = document.querySelector('main');
    
    if (!main) {
        console.error('Vault auth: main element not found');
        return;
    }

    // Hide vault content if it exists
    if (vaultContent) {
        vaultContent.style.display = 'none';
    }

    // Create login form
    const loginSection = document.createElement('section');
    loginSection.className = 'w-full max-w-[1200px] px-6 lg:px-10 py-12 lg:py-20';
    loginSection.id = 'vault-login-section';
    loginSection.innerHTML = `
        <div class="flex flex-col items-center justify-center min-h-[60vh]">
            <div class="w-full max-w-md space-y-8">
                <div class="text-center space-y-4">
                    <div class="size-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <span class="material-symbols-outlined text-primary text-4xl">lock</span>
                    </div>
                    <h1 class="text-4xl sm:text-5xl font-black text-[#111418] dark:text-white">
                        Vault Access
                    </h1>
                    <p class="text-[#637588] dark:text-gray-400 text-lg">
                        Password protected. Deals I liked but we didn't invest in.
                    </p>
                </div>
                
                <form id="vault-login-form" class="space-y-6">
                    <div>
                        <label for="vault-password" class="block text-sm font-medium text-[#111418] dark:text-white mb-2">
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="vault-password" 
                            name="password"
                            required
                            autocomplete="off"
                            class="w-full px-4 py-3 rounded-lg border border-[#e5e7eb] dark:border-gray-800 bg-white dark:bg-[#1a2634] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="Enter password"
                        />
                    </div>
                    
                    <div id="vault-error-message" class="hidden text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                        Incorrect password. Please try again.
                    </div>
                    
                    <button 
                        type="submit"
                        class="w-full px-6 py-3 bg-primary hover:bg-blue-600 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                        <span class="material-symbols-outlined">lock_open</span>
                        Access Vault
                    </button>
                </form>
            </div>
        </div>
    `;

    // Insert login form into main
    if (vaultContent && vaultContent.parentNode) {
        vaultContent.parentNode.insertBefore(loginSection, vaultContent);
    } else {
        // If vault-content doesn't exist, just append to main
        main.appendChild(loginSection);
    }
    
    // Add form submission handler
    setTimeout(() => {
        const form = document.getElementById('vault-login-form');
        if (form) {
            form.addEventListener('submit', handleLogin);
        }
        
        // Focus password input
        const passwordInput = document.getElementById('vault-password');
        if (passwordInput) {
            passwordInput.focus();
        }
    }, 50);
}

// Handle login form submission
async function handleLogin(e) {
    e.preventDefault();
    const passwordInput = document.getElementById('vault-password');
    const errorMessage = document.getElementById('vault-error-message');
    
    if (!passwordInput) return;
    
    const password = passwordInput.value;
    
    // Clear previous error
    if (errorMessage) {
        errorMessage.classList.add('hidden');
    }
    
    // Authenticate
    const success = await authenticate(password);
    
    if (success) {
        // Reload page to show content
        window.location.reload();
    } else {
        // Show error
        if (errorMessage) {
            errorMessage.classList.remove('hidden');
        }
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Show vault content
function showVaultContent() {
    const vaultContent = document.getElementById('vault-content');
    const loginSection = document.getElementById('vault-login-section');
    
    // Show vault content
    if (vaultContent) {
        vaultContent.style.display = '';
    }
    
    // Remove login form if it exists
    if (loginSection) {
        loginSection.remove();
    }
}

// Initialize vault authentication
function initVaultAuth() {
    const vaultContent = document.getElementById('vault-content');
    const main = document.querySelector('main');
    
    // If main doesn't exist, wait and try again
    if (!main) {
        setTimeout(initVaultAuth, 100);
        return;
    }
    
    // Check authentication status
    if (isAuthenticated()) {
        // User is authenticated - show vault content
        if (vaultContent) {
            showVaultContent();
        }
    } else {
        // User is not authenticated - show login form
        showLoginForm();
    }
}

// Initialize when everything is ready
(function() {
    function startVaultAuth() {
        // Wait for DOM to be fully ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                // Give navbar loader and other scripts a moment to finish
                setTimeout(initVaultAuth, 300);
            });
            // Also listen for window load as fallback
            window.addEventListener('load', () => {
                setTimeout(initVaultAuth, 100);
            });
        } else {
            // DOM already loaded, but wait a bit for async scripts
            setTimeout(initVaultAuth, 300);
        }
    }
    
    // Start initialization
    startVaultAuth();
})();

