import { type FC } from "react";
import styles from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import IndexPage from "pages/IndexPage";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";
import NotFoundPage from "pages/NotFoundPage";
import ProjectsPage from "pages/ProjectsPage";
import RootPage from "pages/RootPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/Portfolio/" element={<RootPage />}>
        <Route index element={<IndexPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
