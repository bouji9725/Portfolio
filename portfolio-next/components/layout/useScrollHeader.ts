"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Controls header visibility based on scroll direction.
 *
 * Behavior:
 * - visible near the top
 * - hides while scrolling down
 * - shows while scrolling up
 */
export function useScrollHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsHidden(false);
      } else if (currentScrollY > prevScrollY.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isHidden };
}