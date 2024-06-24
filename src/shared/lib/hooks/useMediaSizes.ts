'use client';

import { useEffect, useState } from 'react';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => window.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export const useMediaSizes = () => {
  const breakpoints = {
    isLessSm: useMediaQuery('(max-width: 600px)'),
    isBiggerSm: useMediaQuery('(min-width: 600px)'),
    isLessMd: useMediaQuery('(max-width: 900px)'),
    isBiggerMd: useMediaQuery('(min-width: 900px)'),
    isLessLg: useMediaQuery('(max-width: 1200px)'),
    isBiggerLg: useMediaQuery('(min-width: 1200px)'),
    isBiggerXl: useMediaQuery('(min-width: 1536px)'),
  };

  return breakpoints;
};
