"use client";

import { useEffect, useRef, useState } from "react";
import { UI } from "@/lib/constants/ui";

export function useScrollHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < UI.SCROLL_THRESHOLD_PX) {
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
