import type { FC } from "react";
import styles from "./App.module.css";

import Header from "layouts/Header";
import CustomCursor from "components/CustomCursor";
import Sidebar from "layouts/Sidebar/Sidebar";
import Footer from "layouts/Footer/Footer";
import { useMatchMedia } from "hooks";

const App: FC = () => {
  const { isMobile } = useMatchMedia();

  return (
    <div className={styles.app}>
      {isMobile ? <Sidebar /> : <Header />}

      <Footer />

      <CustomCursor />
    </div>
  );
};

export default App;
