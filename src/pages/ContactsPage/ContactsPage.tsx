import VariableTitle from 'components/VariableTitle';
import Cube from 'components/Cube';

import { useMatchMedia } from 'hooks';

import styles from './ContactsPage.module.css';

import type { FC } from 'react';

const ContactsPage: FC = () => {
  const { isMobile, isTablet } = useMatchMedia();

  return (
    <div className={styles.page}>
      <VariableTitle text="Contacts" fontSizeInVW={20} />

      {/* TODO: переделать логику указания размера - неудобно */}
      <Cube className={styles.cube} size={isTablet ? 200 : isMobile ? 120 : 300} />
    </div>
  );
};

export default ContactsPage;
