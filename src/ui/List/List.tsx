import cn from 'classnames';

import styles from './List.module.css';

import type { FC, HTMLAttributes } from 'react';

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  data: ListData;
}

export type ListData = {
  title: string;
  items: ItemData[];
};

export type ItemData = {
  subtitle: string;
  description?: string;
  value?: string;
};

const List: FC<ListProps> = (props) => {
  const { className, data } = props;
  const { title, items = [] } = data;

  return (
    <div className={cn(styles.wrapper, className)}>
      {title && <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />}

      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item}>
            <span className={styles.leftText}>
              <span
                className={styles.subtitle}
                dangerouslySetInnerHTML={{ __html: item.subtitle }}
              />

              {item.description && (
                <span
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}
            </span>

            {item.value && (
              <span className={styles.value} dangerouslySetInnerHTML={{ __html: item.value }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
