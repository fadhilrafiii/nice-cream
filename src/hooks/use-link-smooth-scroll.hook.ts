import { useEffect } from 'react';

import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

const useLinkSmoothScroll = () => {
  const handleLinkClick = (a: HTMLAnchorElement, e: Event) => {
    e.preventDefault();
    ScrollSmoother?.get()?.scrollTo(a.hash, true);
    window.history.pushState({}, '', a.hash);
  };

  const handleJumpLinkOnLoad = () => {
    if (window.location.hash) {
      ScrollSmoother?.get()?.scrollTo(window.location.hash, true);
    }
  };

  useEffect(() => {
    document.querySelectorAll("a[href^='#']").forEach((a: Element) => {
      a.addEventListener('click', (e) => handleLinkClick(a as HTMLAnchorElement, e));
    });

    window.addEventListener('load', handleJumpLinkOnLoad);
  });

  return () => {
    document.querySelectorAll("a[href^='#']").forEach((a) => {
      a.removeEventListener('click', (e) => handleLinkClick(a as HTMLAnchorElement, e));
    });

    window.removeEventListener('load', handleJumpLinkOnLoad);
  };
};

export default useLinkSmoothScroll;
