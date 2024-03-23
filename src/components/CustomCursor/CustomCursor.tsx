import { useEffect, useRef } from 'react';

import styles from './CustomCursor.module.css';

import type { FC } from 'react';

const CustomCursor: FC = () => {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    const handleResize = () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!cursor?.current) return;

      const cursorCoords = {
        x: ((event.clientX / windowWidth) * 100 - 50).toFixed(3),
        y: ((event.clientY / windowHeight) * 100 - 50).toFixed(3),
      };

      cursor.current.style.transform = `translate(calc(${cursorCoords.x}vw), 
        calc(${cursorCoords.y}vh))`;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.cursor} ref={cursor} />
    </div>
  );
};

export default CustomCursor;
