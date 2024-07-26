// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;



