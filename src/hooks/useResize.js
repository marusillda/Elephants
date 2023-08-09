import {useState, useEffect, useCallback} from 'react';

export function useResize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [timeoutId, setTimeoutId] = useState(0);

  const setScreenSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerWidth);
  }

  useEffect(() => {
    setScreenSize();
  }, []);

  const handleResize = useCallback(() => {
    if (timeoutId > 0) {
      clearTimeout(timeoutId);
    }

    setTimeoutId(setTimeout(() => {
      setScreenSize();
    }, 100));
    // eslint-disable-next-line
  }, [setWidth, setHeight, setTimeoutId]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize])

  return {width, height};
}