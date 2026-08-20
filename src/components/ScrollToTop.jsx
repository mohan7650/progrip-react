import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.slice(1);
    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
      }
    };

    // Element may not exist yet on first paint (e.g. a full page load
    // landing straight on a hash), so retry on the next frame too.
    scrollToHash();
    requestAnimationFrame(scrollToHash);
  }, [pathname, hash]);

  return null;
}
