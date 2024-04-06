import { useLayoutEffect, useState } from 'react';

interface MediaQueries {
  isDesktop: string;
  isTablet: string;
  isMobile: string;
  hasCursor: string;
}

interface MediaQueriesResult {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  hasCursor: boolean;
}

const mediaQueries: MediaQueries = {
  isDesktop: '(min-width: 1281px)',
  isTablet: '(min-width: 768px) and (max-width: 1280px)',
  isMobile: '(max-width: 767px)',
  hasCursor: '(hover: hover)',
};

export function useMatchMedia(): MediaQueriesResult {
  const [mediaQueriesResult, setMediaQueriesResult] = useState<MediaQueriesResult>({
    isDesktop: false,
    isTablet: false,
    isMobile: false,
    hasCursor: false,
  });

  useLayoutEffect(() => {
    function handleResize() {
      const entries = Object.entries(mediaQueries).map(([variable, query]) => {
        const match = window.matchMedia(query).matches;

        return [variable, match];
      });

      const newMediaQueriesResult: MediaQueriesResult = Object.fromEntries(entries);

      setMediaQueriesResult(newMediaQueriesResult);
    }

    setTimeout(handleResize);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return mediaQueriesResult;
}
