/**
 * Mobile Detection and Optimization Utilities
 * Provides device detection, responsive utilities, and performance optimization
 */

/**
 * Detect if device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768;
};

/**
 * Detect if device is tablet
 */
export const isTabletDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return /iPad|Android/i.test(navigator.userAgent) && window.innerWidth < 1024;
};

/**
 * Get device type
 */
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const getDeviceType = (): DeviceType => {
  if (typeof window === 'undefined') return 'desktop';
  
  if (isMobileDevice() && window.innerWidth < 640) return 'mobile';
  if (isTabletDevice()) return 'tablet';
  return 'desktop';
};

/**
 * Check if device supports WebGL
 */
export const supportsWebGL = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
};

/**
 * Check connection speed (4G/5G vs slower)
 */
export const isFastConnection = (): boolean => {
  if (typeof navigator === 'undefined') return true;
  
  // @ts-ignore - Connection API not in all browsers
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (!connection) return true;
  
  return (
    connection.effectiveType === '4g' ||
    connection.effectiveType === '5g' ||
    (connection.downlink && connection.downlink > 2)
  );
};

/**
 * Optimize 3D settings based on device
 */
export interface GalaxyOptimizationSettings {
  density: number;
  glowIntensity: number;
  particleCount: number;
  renderQuality: number;
  enableParallax: boolean;
  enableAnimations: boolean;
}

export const getGalaxyOptimizations = (): GalaxyOptimizationSettings => {
  const device = getDeviceType();
  const hasWebGL = supportsWebGL();
  const fastConnection = isFastConnection();
  
  // Determine quality tier
  const isMobile = device === 'mobile';
  const isTablet = device === 'tablet';
  
  if (!hasWebGL) {
    // Fallback for no WebGL support
    return {
      density: 0.3,
      glowIntensity: 0,
      particleCount: 1000,
      renderQuality: 0.25,
      enableParallax: false,
      enableAnimations: false,
    };
  }
  
  if (isMobile) {
    return {
      density: 0.4,
      glowIntensity: 0.1,
      particleCount: 2000,
      renderQuality: fastConnection ? 0.5 : 0.35,
      enableParallax: fastConnection,
      enableAnimations: true,
    };
  }
  
  if (isTablet) {
    return {
      density: 0.6,
      glowIntensity: 0.2,
      particleCount: 3500,
      renderQuality: 0.7,
      enableParallax: true,
      enableAnimations: true,
    };
  }
  
  // Desktop
  return {
    density: 1,
    glowIntensity: 0.3,
    particleCount: 5000,
    renderQuality: 1,
    enableParallax: true,
    enableAnimations: true,
  };
};

/**
 * Preload images with lazy loading support
 */
export const setupLazyLoading = (): void => {
  if (typeof window === 'undefined') return;
  
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px',
    });
    
    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const htmlImg = img as HTMLImageElement;
      htmlImg.src = htmlImg.dataset.src || '';
    });
  }
};

/**
 * Request idle callback with fallback
 */
export const requestIdleCallback = (callback: () => void): number => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return (window as any).requestIdleCallback(callback);
  }
  
  // Fallback for browsers without requestIdleCallback
  return setTimeout(callback, 1000) as any;
};

/**
 * Check if animations should be reduced
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Throttle function for scroll events
 */
export const throttle = (func: (...args: any[]) => void, limit: number): ((...args: any[]) => void) => {
  let inThrottle: boolean;
  return function (...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Debounce function for resize events
 */
export const debounce = (func: (...args: any[]) => void, wait: number): ((...args: any[]) => void) => {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
