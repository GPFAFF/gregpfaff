import { useEffect, MutableRefObject } from 'react';

interface Props {
  target: MutableRefObject<HTMLElement>;
  onIntersect: any;
  rootMargin: string;
  threshold: number;
}

export const useIntersectionObserver = (props: Props) => {
  const {
    target,
    onIntersect,
    rootMargin,
    threshold,
  } = props;

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
