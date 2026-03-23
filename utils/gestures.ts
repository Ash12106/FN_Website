/**
 * Touch and Gesture Utilities for Mobile Interactions
 * Provides helper hooks and functions for mobile-friendly components
 */

import React, { useRef, useEffect, useCallback } from 'react';
import { throttle, debounce } from './mobile';

export interface TouchPosition {
  x: number;
  y: number;
  timestamp: number;
}

export interface GestureEvent {
  type: 'tap' | 'swipe' | 'pinch' | 'long-press';
  x: number;
  y: number;
  deltaX?: number;
  deltaY?: number;
  scale?: number;
  duration?: number;
}

/**
 * Hook for detecting touch gestures on an element
 */
export const useTouchGestures = (
  onTap?: (e: GestureEvent) => void,
  onSwipe?: (e: GestureEvent) => void,
  onLongPress?: (e: GestureEvent) => void
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<TouchPosition | null>(null);
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        timestamp: Date.now(),
      };

      // Start long press timer (500ms)
      longPressTimerRef.current = setTimeout(() => {
        if (touchStartRef.current) {
          onLongPress?.({
            type: 'long-press',
            x: touch.clientX,
            y: touch.clientY,
            duration: Date.now() - touchStartRef.current.timestamp,
          });
        }
      }, 500);
    }
  }, [onLongPress]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    clearTimeout(longPressTimerRef.current);

    if (!touchStartRef.current) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const duration = Date.now() - touchStartRef.current.timestamp;

    // Detect tap (minimal movement, short duration)
    if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && duration < 200) {
      onTap?.({
        type: 'tap',
        x: touch.clientX,
        y: touch.clientY,
      });
    }
    // Detect swipe (significant movement, short duration)
    else if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
      onSwipe?.({
        type: 'swipe',
        x: touch.clientX,
        y: touch.clientY,
        deltaX,
        deltaY,
      });
    }

    touchStartRef.current = null;
  }, [onTap, onSwipe]);

  return {
    ref: elementRef,
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };
};

/**
 * Hook for pinch-to-zoom gesture
 */
export const usePinchGesture = (
  onPinch?: (scale: number) => void,
  minScale: number = 1,
  maxScale: number = 3
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const initialDistanceRef = useRef<number>(0);
  const initialScaleRef = useRef<number>(1);

  const getDistance = (touch1: React.Touch, touch2: React.Touch) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      initialDistanceRef.current = getDistance(e.touches[0], e.touches[1]);
      initialScaleRef.current = 1;
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialDistanceRef.current > 0) {
      const currentDistance = getDistance(e.touches[0], e.touches[1]);
      const scale = currentDistance / initialDistanceRef.current;
      const clampedScale = Math.max(minScale, Math.min(maxScale, scale));
      
      onPinch?.(clampedScale);
    }
  }, [onPinch, minScale, maxScale]);

  const handleTouchEnd = useCallback(() => {
    initialDistanceRef.current = 0;
    initialScaleRef.current = 1;
  }, []);

  return {
    ref: elementRef,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
};

/**
 * Hook for scroll position with throttling (prevents jank)
 */
export const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = React.useState({ x: 0, y: 0 });

  const handleScroll = useCallback(
    throttle(() => {
      setScrollPos({
        x: window.scrollX,
        y: window.scrollY,
      });
    }, 16) // ~60fps
    , []
  );

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollPos;
};

/**
 * Hook for viewport intersection (lazy loading)
 */
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};

/**
 * Hook for window resize with debouncing
 */
export const useWindowResize = () => {
  const [size, setSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const handleResize = useCallback(
    debounce(() => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 150), // Wait 150ms after resize stops
    []
  );

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return size;
};

/**
 * Hook for orientation change
 */
export const useOrientation = () => {
  const [orientation, setOrientation] = React.useState<'portrait' | 'landscape'>(
    typeof window !== 'undefined' && window.innerHeight > window.innerWidth
      ? 'portrait'
      : 'landscape'
  );

  React.useEffect(() => {
    const handleOrientationChange = debounce(() => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    }, 100);

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return orientation;
};

/**
 * Component: Responsive Image with Lazy Loading
 */
export interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  placeholder?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="1"%3E%3Crect fill="%23f0f0f0"/%3E%3C/svg%3E',
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const isVisible = useIntersectionObserver(imgRef);

  const classes = `transition-opacity duration-300 ${className}`;

  return React.createElement('img', {
    ref: imgRef,
    src: isVisible ? src : placeholder,
    alt,
    width,
    height,
    className: classes,
    loading: 'lazy',
  });
};

/**
 * Component: Touch-friendly button
 */
export interface TouchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onTap?: (e: GestureEvent) => void;
}

export const TouchButton: React.FC<TouchButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onTap,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-primary hover:bg-primary/90 text-white',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white',
    outline: 'border border-primary text-primary hover:bg-primary/5',
  };

  const gestures = useTouchGestures(onTap);

  const buttonClasses = `
    rounded-lg font-medium transition-all
    active:scale-95 touch-none
    min-h-[48px] min-w-[48px]
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return React.createElement(
    'button',
    {
      ref: gestures.ref,
      onTouchStart: gestures.onTouchStart,
      onTouchEnd: gestures.onTouchEnd,
      className: buttonClasses,
      ...props,
    },
    children
  );
};

/**
 * Component: Touch-friendly card
 */
export interface TouchCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onTap?: (e: GestureEvent) => void;
  clickable?: boolean;
}

export const TouchCard: React.FC<TouchCardProps> = ({
  children,
  onTap,
  clickable = false,
  className = '',
  ...props
}) => {
  const gestures = useTouchGestures(onTap);

  const cardClasses = `
    rounded-lg border border-primary/20 bg-background-dark/50
    backdrop-blur-sm p-4 transition-all
    ${clickable ? 'active:scale-95 active:bg-primary/10 touch-none cursor-pointer' : ''}
    ${className}
  `.trim();

  return React.createElement(
    'div',
    {
      ref: gestures.ref,
      onTouchStart: gestures.onTouchStart,
      onTouchEnd: gestures.onTouchEnd,
      className: cardClasses,
      ...props,
    },
    children
  );
};
