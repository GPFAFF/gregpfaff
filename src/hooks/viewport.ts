import { useEffect, useState } from 'react';

interface ViewPort {
  isDesktop: boolean;
  isMobile: boolean;
}

const useViewport = () => {
  const [isDesktop, setIsDesktop] = useState<ViewPort>({ isDesktop: false, isMobile: false });
  const [isMobile, setIsMobile] = useState<ViewPort>({isDesktop: false, isMobile: false });

  const updateMedia = () => {
    if (window.innerWidth <= 767) {
      setIsMobile({ isDesktop: false, isMobile: true});
      setIsDesktop({ isDesktop: true, isMobile: false});
    } else {
      setIsDesktop({ isDesktop: true, isMobile: false});
      setIsMobile({ isDesktop: false, isMobile: true});
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
