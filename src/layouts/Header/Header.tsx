import cn from "classnames";
import styles from "./Header.module.css";
import Navigation from "components/Navigation";
import type { FC, HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <header className={cn(styles.header, className)} {...restProps}>
      <Navigation view="horizontal" withTheme />
    </header>
  );
};

export default Header;
