import cn from "classnames";
import styles from "./Navigation.module.css";
import { useCallback, type FC, type HTMLAttributes, useState } from "react";
import { Theme } from "types/base";

interface NavigationProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  view: "vertical" | "horizontal";
  withTheme?: boolean;
}

const Navigation: FC<NavigationProps> = (props) => {
  const {
    className,
    view = "horizontal",
    withTheme = false,
    ...restProps
  } = props;
  const [currentTheme, setCurrentTheme] = useState(
    (window.localStorage.getItem("theme") as Theme) || "dark"
  );

  const handleThemeSwitch = useCallback(() => {
    const newTheme: Theme = currentTheme === "dark" ? "light" : "dark";

    window.localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setCurrentTheme(newTheme);
  }, [currentTheme]);

  return (
    <nav
      className={cn(styles.navigation, className, {
        [styles.vertical]: view === "vertical",
        [styles.horizontal]: view === "horizontal",
      })}
      {...restProps}
    >
      {withTheme && (
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
      )}

      <a className={styles.item} href="/Portfolio">
        <span className={styles.icon}>face</span>
        <span>Обо мне</span>
      </a>
      <a className={styles.item} href="/Portfolio">
        <span className={styles.icon}>image</span>
        <span>Проекты</span>
      </a>
      <a className={styles.item} href="/Portfolio">
        <span className={styles.icon}>email</span>
        <span>Контакты</span>
      </a>
    </nav>
  );
};

export default Navigation;
