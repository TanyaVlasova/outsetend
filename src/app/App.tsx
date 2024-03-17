import { useState, type FC, useEffect } from "react";
import styles from "./App.module.css";

import Header from "layouts/Header";
import CustomCursor from "components/CustomCursor";
import Sidebar from "layouts/Sidebar/Sidebar";
import Footer from "layouts/Footer/Footer";
import { useMatchMedia } from "hooks";

const App: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isMobile } = useMatchMedia();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className={styles.app}>
      {isMobile ? <Sidebar /> : <Header />}

      <Footer />

      <CustomCursor />
    </div>
  );
};

export default App;
