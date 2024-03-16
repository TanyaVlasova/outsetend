import cn from "classnames";
import styles from "./Header.module.css";
import { useCallback, type FC, type HTMLAttributes, useState } from "react";
import { Theme } from "types/base";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className } = props;
  const [currentTheme, setCurrentTheme] = useState(
    (window.localStorage.getItem("theme") as Theme) || "dark"
  );

  console.log(currentTheme);

  const handleThemeSwitch = useCallback(() => {
    const newTheme: Theme = currentTheme === "dark" ? "light" : "dark";

    window.localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setCurrentTheme(newTheme);
  }, [currentTheme]);

  return (
    <header className={cn(styles.header, className)}>
      <nav className={styles.list}>
        <div className={cn(styles.item, styles.withSwitcher)}>
          <span className={styles.icon}>sunny</span>
          <div className={styles.switcher} onClick={handleThemeSwitch}>
            <div
              className={cn(styles.thumb, {
                [styles.light]: currentTheme === "light",
                [styles.dark]: currentTheme === "dark",
              })}
            />
          </div>
          <span className={styles.icon}>dark_mode</span>
        </div>
        <a className={styles.item} href="/">
          <span className={styles.icon}>face</span>
          <span>Обо мне</span>
        </a>
        <a className={styles.item} href="/">
          <span className={styles.icon}>image</span>
          <span>Проекты</span>
        </a>
        <a className={styles.item} href="/">
          <span className={styles.icon}>email</span>
          <span>Контакты</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
