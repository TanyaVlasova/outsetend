import { useState, type FC, useEffect } from "react";
import styles from "./App.module.css";

import Header from "layouts/Header";
import CustomCursor from "components/CustomCursor";
import Sidebar from "layouts/Sidebar/Sidebar";
import Footer from "layouts/Footer/Footer";
import { useMatchMedia } from "hooks";
import { Route, Routes } from "react-router-dom";
import IndexPage from "pages/IndexPage";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";
import NotFoundPage from "pages/NotFoundPage";
import ProjectsPage from "pages/ProjectsPage";

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

      <Routes>
        <Route path="/Portfolio" element={<IndexPage />} />
        <Route path="/Portfolio/about" element={<AboutPage />} />
        <Route path="/Portfolio/projects" element={<ProjectsPage />} />
        <Route path="/Portfolio/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />

      <CustomCursor />
    </div>
  );
};

export default App;
