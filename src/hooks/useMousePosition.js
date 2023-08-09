import {useEffect} from 'react';

export function useMousePosition() {
  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty('--move-x', `${(e.clientX - window.innerWidth / 2) * -.005}deg`);
    document.documentElement.style.setProperty('--move-y', `${(e.clientY - window.innerHeight / 2) * -.01}deg`);
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
}


