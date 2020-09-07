import { useEffect, useState } from 'react';

const useViewport = () => {
  const [isDesktop, setIsDesktop] = useState(null);
  const [isMobile, setIsMobile] = useState(null);

  const updateMedia = () => {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    window.addEventListener('load', updateMedia);

    return () => {
      window.removeEventListener('resize', updateMedia);
      window.addEventListener('load', updateMedia);
    };
  }, []);

  return {
    isDesktop,
    isMobile,
  };
};

export default useViewport;
