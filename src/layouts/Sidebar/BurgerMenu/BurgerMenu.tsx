import cn from 'classnames';

import styles from './BurgerMenu.module.css';

import type { ButtonHTMLAttributes, FC } from 'react';

interface BurgerMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const BurgerMenu: FC<BurgerMenuProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <button className={cn(styles.burgerMenu, className)} {...restProps}>
      <span className={styles.icon}>menu</span>
    </button>
  );
};

export default BurgerMenu;
