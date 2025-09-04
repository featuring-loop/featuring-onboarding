import { useRef, useEffect } from 'react';

export const useTableScroll = () => {
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const bodyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bodyContainer = bodyContainerRef.current;
    const headerContainer = headerContainerRef.current;

    if (!bodyContainer || !headerContainer) return;

    const handleScroll = () => {
      headerContainer.scrollLeft = bodyContainer.scrollLeft;
    };

    bodyContainer.addEventListener('scroll', handleScroll);

    return () => {
      bodyContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    headerContainerRef,
    bodyContainerRef,
  };
};
