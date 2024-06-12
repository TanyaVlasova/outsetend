import { useEffect, useState } from 'react';

import VariableTitle from 'components/VariableTitle';

import styles from './ProjectsPage.module.css';
import { dictionary } from './data';

import type { FC } from 'react';

function getTime() {
  const date = new Date();
  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');

  return `${hours}:${minutes}`;
}

const startTime = getTime();

const ProjectsPage: FC = () => {
  const [time, setTime] = useState<string>(startTime);
  const [currentWord, setCurrentWord] = useState(0);
  const [shownTranslation, setShownTranslation] = useState(false);

  const handleClick = () => {
    if (!shownTranslation) {
      setShownTranslation(true);
    } else {
      setCurrentWord((prev) => {
        if (prev + 1 === dictionary.length) return 0;

        return prev + 1;
      });
      setShownTranslation(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();
      if (time !== newTime) setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className={styles.page}>
      <VariableTitle text="Projects" fontSizeInVW={20} />

      <div className={styles.project}>
        <div className={styles.text}>
          <div className={styles.type}>Веб-приложение</div>
          <div className={styles.name}>Learning English</div>
          <div className={styles.description}>
            Минималистичное веб-приложение для изучения английского языка для программистов.
            Используй готовые слова и добавляй свои.
          </div>
          <div className={styles.history}>
            Это мой первый full-stack проект. Было интересно пройтись по всем этапам создания
            веб-приложений. От верстки и создания базы данных до авторизации и деплоя на облачный
            сервер. К тому же идея приложения очень практична. Приятно в свободное время заходить на
            свой сайт и изучать нужные слова в удобном для меня формате.
          </div>
          <a
            className={styles.link}
            href="http://learning-tech-english.ru"
            target="_blank"
            rel="noreferrer"
          >
            Смотреть проект
          </a>
        </div>
        <div className={styles.preview}>
          <div className={styles.phone}>
            <div className={styles.screen}>
              <div className={styles.header}>
                <div className={styles.time}>{time}</div>
                <div className={styles.island} />
              </div>
              <div className={styles.main}>
                <div className={styles.word}>{dictionary[currentWord].word}</div>
                <div className={styles.translation}>
                  {shownTranslation ? dictionary[currentWord].translation : '...'}
                </div>
                <button className={styles.button} onClick={handleClick}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
