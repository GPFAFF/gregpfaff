import React, { useEffect, useState } from "react";

export const useIntersectionObserver = ({
  target,
  onIntersect,
  rootMargin = "-130px",
  threshold = 0.3,
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold
    });
    const current = target.current;

    if (current) {
      observer.observe(current);
    }
  }, []);
};

export default useIntersectionObserver;

// export const useOnScreen = (ref, threshold = 0.5, rootMargin = '-100px') => {
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIntersecting(entry.isIntersecting);
//       },
//       {
//         rootMargin,
//         threshold,
//       }
//     );
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//     // return () => {
//     //   observer.unobserve(ref.current);
//     // };
//   }, []);

//   return isIntersecting;
// }