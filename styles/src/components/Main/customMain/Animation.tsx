import { useState, useRef, useEffect } from 'react';

type RefType = HTMLDivElement | null;

const useOnScreen = (ref: React.RefObject<RefType>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkIfVisible = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      const isVisible = top + 50 < window.innerHeight;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', checkIfVisible);
    checkIfVisible();

    return () => window.removeEventListener('scroll', checkIfVisible);
  }, [ref]);

  return isVisible;
};

export default useOnScreen;
