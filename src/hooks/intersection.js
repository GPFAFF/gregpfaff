import { useEffect } from 'react';

export const useIntersectionObserver = ({
  target, onIntersect, rootMargin, threshold,
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    });

    const { current } = target;

    if (current) {
      observer.observe(current);
    }

    return () => observer.unobserve(current);
  }, [onIntersect, rootMargin, target, threshold]);
};

export default useIntersectionObserver;
