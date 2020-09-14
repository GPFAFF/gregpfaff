import { useEffect, useState } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(0);

  const resizeMedia = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', resizeMedia);

    return () => {
      window.removeEventListener('resize', resizeMedia);
    };
  }, [width]);

  return {
    width,
  };
};

export default useViewport;
