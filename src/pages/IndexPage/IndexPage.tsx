import VariableTitle from 'components/VariableTitle';
import ProfileCard from 'components/ProfileCard';

import styles from './IndexPage.module.css';

import type { FC } from 'react';

const IndexPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <VariableTitle text="outsetend" card={<ProfileCard />} />
    </div>
  );
};

export default IndexPage;
