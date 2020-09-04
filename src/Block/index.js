import React, {
  Fragment,
  useRef,
  useState,
} from 'react'
import { useIntersectionObserver } from '../hooks/intersection';

export const Block = ({ children, className, height, width }) => {
  if (!children) return;

  const ref = useRef();

  const [isVisible, setIsVisible] = useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        if (!isVisible) {
          setIsVisible(true);
        }
        observerElement.unobserve(ref.current);
      }
    }
  });

  return (
    <div
      className={className}
      ref={ref}
    >
      {isVisible &&
        <div
          className={
            isVisible
              ? `${className} full`
              : `${className} blur`
            }
        >
          {children}
        </div>
      }
    </div>
  )
}
