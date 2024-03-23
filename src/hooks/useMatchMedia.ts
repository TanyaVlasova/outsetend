import { useLayoutEffect, useState } from 'react';

type Device = 'isDesktop' | 'isTablet' | 'isMobile';

type MediaQueries = { [key in Device]: string };
type MatchedMedia = { [key in Device]: boolean };

const mediaQueries: MediaQueries = {
  isDesktop: '(min-width: 1281px)',
  isTablet: '(min-width: 768px) and (max-width: 1280px)',
  isMobile: '(max-width: 767px)',
};

export function useMatchMedia(): MatchedMedia {
  const [matchedMedia, setMatchedMedia] = useState<MatchedMedia>({
    isDesktop: false,
    isTablet: false,
    isMobile: false,
  });

  useLayoutEffect(() => {
    function handleResize() {
      const entries = Object.entries(mediaQueries).map(([device, query]) => {
        const match = window.matchMedia(query).matches;

        return [device, match];
      });

      const matchedMedia: MatchedMedia = Object.fromEntries(entries);

      setMatchedMedia(matchedMedia);
    }

    setTimeout(handleResize);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return matchedMedia;
}
