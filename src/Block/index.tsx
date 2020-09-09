import React, {
  ReactNode,
  useRef,
  useState,
} from 'react';
import { useIntersectionObserver } from '../hooks/intersection';

interface Props {
  children: ReactNode;
  className: string;
}

const Block = (props: Props) => {
  const ref = useRef();
  const { children, className } = props;

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
