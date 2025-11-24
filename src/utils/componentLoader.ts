import { lazy } from 'react';

export const componentLoader = {
  layouts: {
    mobile: lazy(() => import('@/layouts/MobileLayout')),
    tabletHorizontal: lazy(() => import('@/layouts/HorizontalTabletLayout')),
  },
  headers: {
    mobile: lazy(() => import('@/components/mobile/MobileHeader')),
    tablet: lazy(() => import('@/components/tablet/TabletHeader')),
  },
  bodies: {
    mobile: lazy(() => import('@/components/mobile/MobileBody')),
    tablet: lazy(() => import('@/components/tablet/TabletBody')),
  },
  footers: {
    mobile: lazy(() => import('@/components/mobile/MobileFooter')),
    tablet: lazy(() => import('@/components/tablet/TabletFooter')),
  },
};

export function getComponentsForScreen(isTabletHorizontal: boolean) {
  return {
    Layout: isTabletHorizontal
      ? componentLoader.layouts.tabletHorizontal
      : componentLoader.layouts.mobile,
    Header: isTabletHorizontal
      ? componentLoader.headers.tablet
      : componentLoader.headers.mobile,
    Body: isTabletHorizontal
      ? componentLoader.bodies.tablet
      : componentLoader.bodies.mobile,
    Footer: isTabletHorizontal
      ? componentLoader.footers.tablet
      : componentLoader.footers.mobile,
  };
}
