import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// The pixel snippet in index.html fires PageView on the initial load only.
// This fires it again on each client-side route change.
export default function MetaPixelPageView() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
