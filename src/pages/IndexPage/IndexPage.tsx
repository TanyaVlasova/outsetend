import VariableTitle from 'components/VariableTitle';
import ProfileCard from 'components/ProfileCard';

import List from 'components/List';

import { generalInfo, experience, skills } from './data';
import styles from './IndexPage.module.css';

import type { FC } from 'react';

const IndexPage: FC = () => {
  return (
    <div className={styles.page}>
      <VariableTitle
        className={styles.title}
        text="HEY I'M TANYA <br/> FRONTEND DEV"
        fontSizeInVW={12}
        card={<ProfileCard />}
      />

      <List className={styles.list} data={generalInfo} itemType="default" />
      <List className={styles.list} data={experience} itemType="default" />
      <List className={styles.list} data={skills} itemType="scale" withImages />
    </div>
  );
};

export default IndexPage;
