import styles from './ProfileCard.module.css';
import photo from './photo.jpg';

import type { FC } from 'react';

const ProfileCard: FC = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={photo} alt="" />
      <div className={styles.profession}>Frontend Developer</div>
      <div className={styles.person}>Tatyana Vlasova</div>
    </div>
  );
};

export default ProfileCard;
