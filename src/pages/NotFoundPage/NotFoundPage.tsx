import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.css';

import type { FC } from 'react';

const NotFoundPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      404 <br />
      Not found page
      <Link className={styles.link} to="/Portfolio">
        На главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
