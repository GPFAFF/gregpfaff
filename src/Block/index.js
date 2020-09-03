import React, {
  Fragment,
  useRef,
  useState
} from 'react'
import { useIntersectionObserver } from '../hooks/intersection';

export const Block = ({ children, className, height, width }) => {
  if (!children) return;

  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  console.log("AAAA", children, "B", isVisible)

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting}], observeElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observeElement.unobserve(ref.current);
      }
    }
  });

  return (
    <div
      className={className}
      ref={ref}
      className={isVisible ? `${className} full` : `${className} blur`}
    >
      {isVisible &&
        <Fragment>
          {children}
        </Fragment>
      }
    </div>
  )
}
