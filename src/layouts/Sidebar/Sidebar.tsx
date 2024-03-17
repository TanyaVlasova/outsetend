import cn from "classnames";
import styles from "./Sidebar.module.css";
import Navigation from "components/Navigation";
import { useCallback, type FC, type HTMLAttributes, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import OutsideClickHandler from "./OutsideClickHandler";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className, ...restProps } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={cn(styles.sidebar, className)} {...restProps}>
      <div className={styles.container}>
        <OutsideClickHandler onOutsideClick={handleClickOutside}>
          <BurgerMenu
            className={styles.burgerMenu}
            onClick={handleToggleSidebar}
          />
          <Navigation
            className={cn(styles.navigation, { [styles.isOpen]: isOpen })}
            view="vertical"
            withTheme
          />
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Sidebar;
