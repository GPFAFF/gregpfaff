import React, {
  useRef,
  useState,
} from 'react';
import { useIntersectionObserver } from '../hooks/intersection';

const Block = ({
  children,
  className,
  height,
  width,
}) => {
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
    },
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
      {isVisible
        && (
        <div className={className}>
          {children}
        </div>
        )}
    </div>
  );
};

export default Block;
