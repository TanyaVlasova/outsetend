import cn from 'classnames';

import styles from './List.module.css';

import type { FC } from 'react';
import type { ListProps } from './typings';

const DefaultList: FC<ListProps> = (props) => {
  const { className, data, withImages } = props;
  const { title, items } = data;

  return (
    <div className={cn(styles.wrapper, className)}>
      {title && <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />}

      <ul className={styles.list}>
        {items.map((item) => (
          <li className={cn(styles.item, styles.withSeparator)}>
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
              <span
                className={styles.value}
                dangerouslySetInnerHTML={{ __html: item.value.toString() }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ScaleList: FC<ListProps> = (props) => {
  const { className, data, withImages } = props;
  const { title, items } = data;

  return (
    <div className={cn(styles.wrapper, className)}>
      {title && <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />}

      <ul className={styles.list}>
        {items.map((item) => (
          <li className={cn(styles.item, { [styles.withImages]: withImages })}>
            <span className={styles.subtitle} dangerouslySetInnerHTML={{ __html: item.subtitle }} />

            {typeof item.value === 'number' && (
              <div className={styles.scale}>
                <div className={styles.filling} style={{ width: `${item.value}%` }} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ListContainer: FC<ListProps> = (props) => {
  const { className, data, itemType, withImages } = props;

  if (itemType === 'scale') {
    return <ScaleList {...props} />;
  }

  return <DefaultList {...props} />;
};

export default ListContainer;
