import VariableTitle from 'components/VariableTitle';
import ProfileCard from 'components/ProfileCard';

import styles from './IndexPage.module.css';

import type { FC } from 'react';

const IndexPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <VariableTitle
        text="HEY I'M TANYA <BR/> FRONTEND DEV"
        fontSizeInVW={12}
        card={<ProfileCard />}
      />
    </div>
  );
};

export default IndexPage;
