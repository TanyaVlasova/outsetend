import { useMatchMedia } from 'hooks';
import { Outlet } from 'react-router-dom';

import { useState, type FC, useEffect } from 'react';
import Sidebar from 'layouts/Sidebar';
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
import Toasts from 'components/Toasts';
import CustomCursor from 'components/CustomCursor';

import styles from './RootPage.module.css';

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
      <Toasts />
      <CustomCursor />
    </div>
  );
};

export default RootPage;
