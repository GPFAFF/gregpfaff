import { useEffect, useState } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(0);

  const resizeMedia = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('load', resizeMedia);
    window.addEventListener('resize', resizeMedia);

    return () => {
      window.removeEventListener('load', resizeMedia);
      window.removeEventListener('resize', resizeMedia);
    };
  }, [width]);

  return {
    width,
  };
};

export default useViewport;
