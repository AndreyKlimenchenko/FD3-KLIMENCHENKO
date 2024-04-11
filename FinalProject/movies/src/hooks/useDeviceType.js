import { useLayoutEffect, useState } from "react";

export const DESKTOP = "desktop";
export const TABLET = "tablet";
export const MOBILE = "mobile";

export const TABLET_WINDOW_SIZE = 1024;
export const MOBILE_WINDOW_SIZE = 480;

export const useDeviceType = () => {
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const isMobile = size <= MOBILE_WINDOW_SIZE;
  const isTablet = size <= TABLET_WINDOW_SIZE;
  const isDesktop = !isMobile && !isTablet;

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};