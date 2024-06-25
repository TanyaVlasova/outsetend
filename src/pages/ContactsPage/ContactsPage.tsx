import VariableTitle from 'components/VariableTitle';

import Form from 'components/Form';

import styles from './ContactsPage.module.css';

import type { FC } from 'react';

const ContactsPage: FC = () => {
  return (
    <div className={styles.page}>
      <VariableTitle text="Contacts" fontSizeInVW={20} />

      <Form />
    </div>
  );
};

export default ContactsPage;
