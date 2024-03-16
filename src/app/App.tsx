import type { FC } from "react";
import styles from "./App.module.css";

import Header from "layouts/Header";
import CustomCursor from "components/CustomCursor";
import Sidebar from "layouts/Sidebar/Sidebar";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />

      <CustomCursor />
    </div>
  );
};

export default App;
