import cn from 'classnames';

import Navigation from 'components/Navigation';
import { useCallback, type FC, type HTMLAttributes, useState } from 'react';

import styles from './Sidebar.module.css';
import BurgerMenu from './BurgerMenu';
import OutsideClickHandler from './OutsideClickHandler';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className, ...restProps } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={cn(styles.sidebar, className)} {...restProps}>
      {isOpen && <div className={styles.overlay} />}

      <div className={styles.container}>
        <OutsideClickHandler onOutsideClick={handleCloseSidebar}>
          <BurgerMenu className={styles.burgerMenu} onClick={handleToggleSidebar} />
          <Navigation
            className={cn(styles.navigation, { [styles.isOpen]: isOpen })}
            view="vertical"
            withTheme
            onClose={handleCloseSidebar}
          />
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Sidebar;
