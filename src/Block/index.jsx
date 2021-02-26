import React, {
  useRef,
  useState,
} from 'react';
import useViewport from '../hooks/viewport';
import { useIntersectionObserver } from '../hooks/intersection';

const Block = ({ children, className }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const { width } = useViewport();

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        if (!isVisible) {
          setIsVisible(true);
        }
        observerElement.unobserve(ref.current);
      }
    },
    rootMargin: '40px',
    threshold: 0.4,
  });

  return (
    <div
      className={
        isVisible
          ? `${className} full`
          : `${className} blur`
      }
      ref={ref}
    >
      {isVisible && (
        <div className={className}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Block;
