// Terminal Code Animation
class TerminalAnimation {
    constructor() {
        this.container = document.getElementById('terminal-content');
        this.typingElement = document.getElementById('typing-text');
        this.currentLine = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.lines = [];
        this.currentText = '';
        
        this.init();
    }
    
    init() {
        if (!this.container || !this.typingElement) return;
        
        // Define code snippets to display
        this.codeSnippets = [
            {
                prompt: 'whoami',
                output: 'Derek Wu\nVenture Capital & Developer\nBuilding the future of tech',
                delay: 100
            },
            {
                prompt: 'cat skills.txt',
                output: '• Machine Learning Engineering\n• Full-Stack Development\n• Venture Capital Analysis\n• Product Strategy',
                delay: 80
            },
            {
                prompt: 'ls projects/',
                output: 'market-intelligence/\nvc-website/\ncompany-bets/\ncrm-wrapped/\npersonal-website/',
                delay: 60
            },
            {
                prompt: 'python analyze_investment.py',
                output: 'Analyzing startup metrics...\n✓ Market size: $50B+\n✓ Team strength: Excellent\n✓ Product-market fit: Strong\n→ Recommendation: INVEST',
                delay: 70
            },
            {
                prompt: 'git log --oneline',
                output: 'a1b2c3d Build ML pipeline\nf4e5d6c Add VC dashboard\n7g8h9i0 Refactor API\nj1k2l3m Initial commit',
                delay: 50
            },
            {
                prompt: 'npm run deploy',
                output: 'Building for production...\n✓ Compiled successfully\n✓ Deployed to production\n→ https://derekwu.dev',
                delay: 65
            }
        ];
        
        this.type();
    }
    
    type() {
        if (this.currentLine >= this.codeSnippets.length) {
            // Loop back to beginning
            this.currentLine = 0;
            this.clearTerminal();
            setTimeout(() => this.type(), 1000);
            return;
        }
        
        const snippet = this.codeSnippets[this.currentLine];
        
        if (!this.isDeleting && this.currentChar === 0) {
            // Start typing the prompt
            this.typingElement.textContent = '';
            this.typePrompt(snippet.prompt, () => {
                // After prompt, show output
                setTimeout(() => {
                    this.showOutput(snippet.output, () => {
                        // After showing output, wait then delete
                        setTimeout(() => {
                            this.isDeleting = true;
                            this.deleteAndNext();
                        }, 3000);
                    });
                }, 500);
            });
        }
    }
    
    typePrompt(prompt, callback) {
        if (this.currentChar < prompt.length) {
            this.typingElement.textContent = prompt.substring(0, this.currentChar + 1);
            this.currentChar++;
            setTimeout(() => this.typePrompt(prompt, callback), 80);
        } else {
            this.currentChar = 0;
            if (callback) callback();
        }
    }
    
    showOutput(output, callback) {
        const lines = output.split('\n');
        let lineIndex = 0;
        let charIndex = 0;
        
        const typeLine = () => {
            if (lineIndex >= lines.length) {
                if (callback) callback();
                return;
            }
            
            const line = lines[lineIndex];
            if (charIndex < line.length) {
                // Create or get output line
                let outputLine = this.container.querySelector(`.output-line-${lineIndex}`);
                if (!outputLine) {
                    outputLine = document.createElement('div');
                    outputLine.className = `output-line-${lineIndex} text-gray-200 dark:text-gray-400 mt-1`;
                    this.container.appendChild(outputLine);
                }
                
                outputLine.textContent = line.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeLine, 30);
            } else {
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 100);
            }
        };
        
        typeLine();
    }
    
    deleteAndNext() {
        // Delete all output lines
        const outputLines = this.container.querySelectorAll('[class*="output-line"]');
        if (outputLines.length > 0) {
            outputLines[outputLines.length - 1].remove();
            setTimeout(() => this.deleteAndNext(), 30);
        } else {
            // Delete prompt
            const prompt = this.codeSnippets[this.currentLine].prompt;
            if (this.currentChar > 0) {
                this.typingElement.textContent = prompt.substring(0, this.currentChar - 1);
                this.currentChar--;
                setTimeout(() => this.deleteAndNext(), 40);
            } else {
                // Move to next line
                this.isDeleting = false;
                this.currentLine++;
                this.currentChar = 0;
                setTimeout(() => this.type(), 500);
            }
        }
    }
    
    clearTerminal() {
        // Clear all output lines
        const outputLines = this.container.querySelectorAll('[class*="output-line"]');
        outputLines.forEach(line => line.remove());
        this.typingElement.textContent = '';
        this.currentChar = 0;
    }
}

// Initialize terminal animation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.terminalAnimation = new TerminalAnimation();
});

