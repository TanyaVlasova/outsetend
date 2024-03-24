import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import Navigation from 'components/Navigation';
import { setHeaderHeight } from 'store/header/header.slice';

import styles from './Header.module.css';

import type { FC, HTMLAttributes } from 'react';

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className, ...restProps } = props;
  const headerRef = useRef<HTMLElement>(null);
  const dispatch = useDispatch();

  // Определить место занимаемое header-ом и записать в store
  useEffect(() => {
    const handleSetHeaderHeight = () => {
      if (!headerRef?.current) return;

      const height = headerRef.current.getBoundingClientRect().bottom;
      dispatch(setHeaderHeight(height));
    };

    handleSetHeaderHeight();

    window.addEventListener('resize', handleSetHeaderHeight);

    return () => {
      dispatch(setHeaderHeight(0));
      window.removeEventListener('resize', handleSetHeaderHeight);
    };
  }, [dispatch]);

  return (
    <header className={cn(styles.header, className)} ref={headerRef} {...restProps}>
      <Navigation view="horizontal" withTheme />
    </header>
  );
};

export default Header;
