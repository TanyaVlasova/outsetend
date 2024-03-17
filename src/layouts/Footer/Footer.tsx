import cn from "classnames";
import { FC, HTMLAttributes } from "react";
import styles from "./Footer.module.css";
import Navigation from "components/Navigation";
import Socials from "components/Socials";

interface FooterProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Footer: FC<FooterProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <footer className={cn(styles.footer, className)} {...restProps}>
      <a className={cn(styles.item, styles.nickname)} href="/Portfolio">
        outsetend
      </a>
      <Navigation
        className={cn(styles.item, styles.navigation)}
        view="vertical"
      />
      <a
        className={cn(styles.item, styles.email)}
        href="mailto:outsetend@gmail.com"
      >
        outsetend@gmail.com
      </a>
      <div className={cn(styles.item, styles.tagline)}>
        <div>
          <span className={styles.icon}>mood</span>
          Нормально делай&nbsp;— нормально будет
        </div>
      </div>
      <Socials className={cn(styles.item, styles.socials)} />
    </footer>
  );
};

export default Footer;
