import { useCallback, useEffect, useRef } from 'react';
import { sendAnalyticsEvent } from '../services/api';
import type { AnalyticsEvent } from '../types/product';

export function useAnalytics() {
  const maxScrollDepth = useRef(0);

  const track = useCallback((type: AnalyticsEvent['type'], payload?: Record<string, unknown>) => {
    void sendAnalyticsEvent({
      type,
      payload,
      timestamp: new Date().toISOString(),
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const depth = Math.round((window.scrollY / scrollable) * 100);
      const milestone = Math.floor(depth / 25) * 25;

      if (milestone >= 25 && milestone > maxScrollDepth.current) {
        maxScrollDepth.current = milestone;
        track('scroll_depth', { depth: milestone });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [track]);

  return { track };
}
