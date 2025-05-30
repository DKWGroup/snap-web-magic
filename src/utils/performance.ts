
import React from 'react';

// Performance monitoring utilities
export const measurePerformance = () => {
  if (typeof window === 'undefined') return;

  // Measure Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
      }
      if (entry.entryType === 'first-input') {
        const fidEntry = entry as PerformanceEventTiming;
        console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
      }
      if (entry.entryType === 'layout-shift') {
        const clsEntry = entry as any;
        if (!clsEntry.hadRecentInput) {
          console.log('CLS:', clsEntry.value);
        }
      }
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/images/hero-bg.jpg',
    '/videos/bg.webm',
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    
    if (resource.includes('font')) {
      link.as = 'style';
      link.crossOrigin = 'anonymous';
    } else if (resource.includes('.webm')) {
      link.as = 'video';
    } else {
      link.as = 'image';
    }
    
    link.href = resource;
    document.head.appendChild(link);
  });
};

// Lazy load components
export const lazyLoadComponent = (importFn: () => Promise<any>) => {
  return React.lazy(importFn);
};
