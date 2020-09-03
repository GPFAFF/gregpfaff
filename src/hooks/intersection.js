import React, { useEffect } from "react";

export const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 0.2,
  rootMargin = '0px',
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold
    });
    const current = target.current;
    observer.observe(current);

    () => observer.unobserve(current);
  }, [target, onIntersect]);
};

export default useIntersectionObserver;