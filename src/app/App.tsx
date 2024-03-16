import type { FC } from "react";
import styles from "./App.module.css";

import Header from "layouts/Header";
import CustomCursor from "components/CustomCursor";

const App: FC = () => {
  return (
    <div>
      <Header className={styles.header} />
      <CustomCursor />
    </div>
  );
};

export default App;
