export function useScreenLayout() {
  if (typeof window === 'undefined')
    return { isMobile: true, isTabletHorizontal: false };

  const isTablet = window.matchMedia('(min-width: 768px)').matches;
  const isHorizontal = window.matchMedia(
    '(min-width: 768px) and (orientation: landscape)'
  ).matches;

  return {
    isMobile: !isTablet,
    isTabletHorizontal: isTablet && isHorizontal,
  };
}
