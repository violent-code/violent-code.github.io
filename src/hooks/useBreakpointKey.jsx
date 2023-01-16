import { useState, useEffect } from 'react';

const breakpoints = {
  'mobile-only': 480,
  'tablet-portrait': 768,
  'tablet-landscape': 880,
  desktop: 1200,
  'big-desktop': 1536,
  'big-desktop-up': 1537,
};

const getDeviceConfig = (width) => {
  // Find the largest width value in the lookup table that is less than or equal to the given width
  const [breakpointKey, _] = Object.entries(breakpoints)
    .reverse()
    .find(([_, value]) => value <= width) ?? ['mobile-only'];
  return breakpointKey;
};

const useBreakpointKey = () => {
  const [breakpointKey, setBreakpoint] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const listener = () => setBreakpoint(getDeviceConfig(window.innerWidth));
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [window.innerWidth]);

  return breakpointKey;
};
export default useBreakpointKey;
