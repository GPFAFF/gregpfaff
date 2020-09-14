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

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }]: any, observerElement : any) => {
      if (isIntersecting) {
        if (!isVisible) {
          setIsVisible(true);
        }
        observerElement.unobserve(ref.current);
      }
    },
    rootMargin: '100px',
    threshold: 0.3,
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
