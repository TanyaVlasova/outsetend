import VariableTitle from 'components/VariableTitle';
import Cube from 'components/Cube';

import styles from './ContactsPage.module.css';

import type { FC } from 'react';

const ContactsPage: FC = () => {
  return (
    <div className={styles.page}>
      <VariableTitle text="Contacts" fontSizeInVW={20} />
      <Cube className={styles.cube} size={300} />
    </div>
  );
};

export default ContactsPage;
