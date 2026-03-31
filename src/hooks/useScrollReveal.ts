import { useEffect, useRef } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Attaches an IntersectionObserver to the returned ref.
 * - When element enters viewport → rises into view (reveal-visible)
 * - When element leaves viewport → instantly resets to hidden (reveal-hidden)
 *   so the animation replays every time the user scrolls back to it.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.1, rootMargin = "0px 0px -20px 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initial state
    el.classList.add("reveal-hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              el.classList.remove("reveal-hidden");
              el.classList.add("reveal-visible");
              // Stop observing once visible so it doesn't repeat
              observer.unobserve(el);
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
