import { useMatchMedia } from "hooks";
import styles from "./RootPage.module.css";

import { useState, type FC, useEffect } from "react";
import Sidebar from "layouts/Sidebar";
import Header from "layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "layouts/Footer";
import CustomCursor from "components/CustomCursor";

const RootPage: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isMobile } = useMatchMedia();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className={styles.root}>
      {isMobile ? <Sidebar /> : <Header />}
      <Outlet />
      <Footer />
      <CustomCursor />
    </div>
  );
};

export default RootPage;
