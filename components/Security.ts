/**
 * Security & Firewall Module
 * Protects against common web exploits and developer tool access
 */

// List of suspicious user agents that indicate bots or automated tools
const SUSPICIOUS_USER_AGENTS = [
  'bot',
  'crawler',
  'spider',
  'scraper',
  'curl',
  'wget',
  'python',
  'java',
  'perl',
  'ruby',
  'php',
  'headless',
  'phantom',
  'selenium',
  'puppeteer',
  'nightmare',
  'watir',
];

// List of suspicious URL patterns
const SUSPICIOUS_PATTERNS = [
  /\.\.\/\.\.\//g, // Path traversal
  /eval\(/g, // Eval execution
  /<script/gi, // Script injection
  /javascript:/gi, // JavaScript protocol
  /onerror=/gi, // Event handler injection
  /onclick=/gi, // Click handler injection
  /onload=/gi, // Load handler injection
];

/**
 * Check if the user agent is suspicious
 */
const isSuspiciousUserAgent = (): boolean => {
  const userAgent = navigator.userAgent.toLowerCase();
  return SUSPICIOUS_USER_AGENTS.some(agent => userAgent.includes(agent));
};

/**
 * Check if the URL contains suspicious patterns
 */
const hasSuspiciousPatterns = (url: string): boolean => {
  return SUSPICIOUS_PATTERNS.some(pattern => pattern.test(url));
};

/**
 * Detect if DevTools is open
 */
const detectDevTools = (): boolean => {
  const threshold = 160; // Arbitrary threshold
  
  if (
    window.outerHeight - window.innerHeight > threshold ||
    window.outerWidth - window.innerWidth > threshold
  ) {
    return true;
  }

  // Check for debugger
  try {
    const start = performance.now();
    debugger;
    const end = performance.now();
    // If debugger was hit, it takes time
    if (end - start > 100) {
      return true;
    }
  } catch (e) {
    // Ignored
  }

  return false;
};

/**
 * Block right-click context menu
 */
const blockRightClick = (): void => {
  document.addEventListener('contextmenu', (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
};

/**
 * Block keyboard shortcuts for opening DevTools
 */
const blockDevToolsShortcuts = (): void => {
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    // F12 - DevTools
    if (e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+Shift+I - Inspect Element (Windows/Linux)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+Shift+C - Inspect Element (Chrome)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+Shift+J - Console (Windows/Linux)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Cmd+Shift+I - Inspect Element (macOS)
    if (e.metaKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Cmd+Shift+C - Inspect Element (macOS)
    if (e.metaKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Cmd+Shift+J - Console (macOS)
    if (e.metaKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Cmd+Option+I - Inspect Element (Safari)
    if (e.metaKey && e.altKey && e.key === 'I') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Cmd+Option+U - View Source (Safari)
    if (e.metaKey && e.altKey && e.key === 'U') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });
};

/**
 * Disable text selection to prevent easy copying
 */
const disableTextSelection = (): void => {
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  (document.body as any).style.msUserSelect = 'none';
  (document.body as any).style.mozUserSelect = 'none';
};

/**
 * Block copy/paste operations
 */
const blockCopyPaste = (): void => {
  document.addEventListener('copy', (e: ClipboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  document.addEventListener('paste', (e: ClipboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  document.addEventListener('cut', (e: ClipboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
};

/**
 * Disable mouse right-click menu
 */
const disableContextMenu = (): void => {
  document.body.addEventListener('mousedown', (e: MouseEvent) => {
    if (e.button === 2) { // Right click
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });
};

/**
 * Firewall check - validates incoming requests/navigation
 */
const firewallCheck = (): void => {
  // Check for suspicious user agent
  if (isSuspiciousUserAgent()) {
    console.warn('🔒 Security: Suspicious user agent detected');
  }

  // Check for suspicious URL parameters
  const currentUrl = window.location.href;
  if (hasSuspiciousPatterns(currentUrl)) {
    console.warn('🔒 Security: Suspicious URL pattern detected');
    window.location.href = '/'; // Redirect to home
    return;
  }

  // Detect DevTools
  if (detectDevTools()) {
    console.warn('🔒 Security: Developer Tools detected. Access denied.');
    // Optional: Redirect or disable functionality
    // window.location.href = '/';
  }
};

/**
 * Add security headers via meta tags (works for CSP basics)
 */
const addSecurityHeaders = (): void => {
  // Content Security Policy
  const cspMeta = document.createElement('meta');
  cspMeta.httpEquiv = 'Content-Security-Policy';
  cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:";
  document.head.appendChild(cspMeta);

  // X-UA-Compatible
  const uaCompatMeta = document.createElement('meta');
  uaCompatMeta.httpEquiv = 'X-UA-Compatible';
  uaCompatMeta.content = 'ie=edge';
  document.head.appendChild(uaCompatMeta);

  // Referrer Policy
  const referrerMeta = document.createElement('meta');
  referrerMeta.name = 'referrer';
  referrerMeta.content = 'no-referrer';
  document.head.appendChild(referrerMeta);

  // Permissions Policy (formerly Feature Policy)
  const permissionsMeta = document.createElement('meta');
  permissionsMeta.httpEquiv = 'Permissions-Policy';
  permissionsMeta.content = 'geolocation=(), microphone=(), camera=()';
  document.head.appendChild(permissionsMeta);
};

/**
 * Monitor console for suspicious activity (non-destructive version)
 */
const monitorConsole = (): void => {
  // Store original console methods for security logging
  const originalLog = console.log;
  const originalError = console.error;
  const originalWarn = console.warn;

  // Track console access patterns for audit logging
  let consoleAccessCount = 0;
  const trackConsoleAccess = () => {
    consoleAccessCount++;
    if (consoleAccessCount > 100) {
      // Excessive console use - could indicate suspicious activity
      originalWarn('🔒 Security: Excessive console access detected');
    }
  };

  // Wrap console methods to track usage (non-destructive)
  const wrappedLog = function(...args: any[]) {
    trackConsoleAccess();
    return originalLog.apply(console, args);
  };

  const wrappedError = function(...args: any[]) {
    trackConsoleAccess();
    return originalError.apply(console, args);
  };

  const wrappedWarn = function(...args: any[]) {
    trackConsoleAccess();
    return originalWarn.apply(console, args);
  };

  // Override with tracking versions (keep console functional)
  (console as any).log = wrappedLog;
  (console as any).error = wrappedError;
  (console as any).warn = wrappedWarn;
};

/**
 * Initialize all security measures
 */
export const initializeSecurity = (): void => {
  try {
    // Run firewall checks
    firewallCheck();

    // Add security headers
    addSecurityHeaders();

    // Block DevTools and inspect element
    blockRightClick();
    blockDevToolsShortcuts();
    disableContextMenu();
    // blockCopyPaste(); // Commented: too aggressive, breaks normal UX
    // disableTextSelection(); // Commented: interferes with UI

    // Monitor console (non-destructive tracking)
    monitorConsole();

    console.log('✅ Security measures initialized');
  } catch (error) {
    console.error('⚠️ Error initializing security measures:', error);
  }
};

/**
 * Check if user is attempting to access restricted areas
 */
export const checkSecurityClearance = (userRole?: string): boolean => {
  // Basic validation
  if (!userRole) {
    return false;
  }

  const validRoles = ['student', 'faculty', 'admin'];
  return validRoles.includes(userRole.toLowerCase());
};

/**
 * Sanitize user input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Hash sensitive data (basic, client-side only)
 */
export const hashData = (data: string): string => {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString(16);
};

export default {
  initializeSecurity,
  checkSecurityClearance,
  sanitizeInput,
  validateEmail,
  hashData,
};
