// hooks/useCustomScrollTrigger.js
"use client";
import { useRef, useEffect, useState, useCallback } from 'react';

const useCustomScrollTrigger = ({
  triggerDistance = 100, // pixels from bottom of viewport
  requireFullVisibility = false,
  debug = false
} = {}) => {
  const ref = useRef(null);
  const [isTriggered, setIsTriggered] = useState(false);
  const [debugInfo, setDebugInfo] = useState('');

  const checkVisibility = useCallback(() => {
    if (!ref.current) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate trigger point
    const triggerPoint = windowHeight - triggerDistance;
    
    let shouldTrigger = false;
    
    if (requireFullVisibility) {
      // Element phải hoàn toàn trong viewport
      shouldTrigger = rect.top >= 0 && rect.bottom <= triggerPoint;
    } else {
      // Element chỉ cần top edge vào trigger zone
      shouldTrigger = rect.top <= triggerPoint && rect.bottom > 0;
    }

    if (debug) {
      setDebugInfo(`
        Element Top: ${Math.round(rect.top)}
        Element Bottom: ${Math.round(rect.bottom)}
        Trigger Point: ${triggerPoint}
        Window Height: ${windowHeight}
        Should Trigger: ${shouldTrigger}
        Is Triggered: ${isTriggered}
      `);
    }

    if (shouldTrigger && !isTriggered) {
      setIsTriggered(true);
    }
  }, [triggerDistance, requireFullVisibility, isTriggered, debug]);

  useEffect(() => {
    // Throttled scroll handler
    let timeoutId;
    const throttledCheck = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        checkVisibility();
        timeoutId = null;
      }, 16); // ~60fps
    };

    // Initial check
    checkVisibility();

    // Add scroll listener
    window.addEventListener('scroll', throttledCheck, { passive: true });
    window.addEventListener('resize', throttledCheck, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledCheck);
      window.removeEventListener('resize', throttledCheck);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [checkVisibility]);

  return {
    ref,
    isTriggered,
    debugInfo,
    reset: () => setIsTriggered(false)
  };
};

export default useCustomScrollTrigger;