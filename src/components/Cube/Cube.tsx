import { useEffect, useRef } from 'react';
import cn from 'classnames';

import styles from './Cube.module.css';

import type { FC, HTMLAttributes } from 'react';

interface CubeProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Cube: FC<CubeProps> = (props) => {
  const { className, size, ...restProps } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef?.current) return;

    wrapperRef.current.style.setProperty('--size', `${size || 300}px`);
  }, [size]);

  return (
    <div className={cn(styles.wrapper, className)} ref={wrapperRef} {...restProps}>
      <div className={styles.cube}>
        <div className={cn(styles.side, styles.front)}>React</div>
        <div className={cn(styles.side, styles.back)}>Next.js</div>
        <div className={cn(styles.side, styles.top)} />
        <div className={cn(styles.side, styles.bottom)} />
        <div className={cn(styles.side, styles.left)}>TypeScript</div>
        <div className={cn(styles.side, styles.right)}>Redux Toolkit</div>
      </div>
    </div>
  );
};

export default Cube;
