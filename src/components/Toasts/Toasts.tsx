import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { removeToast } from 'store/toasts/toasts.slice';

import styles from './Toasts.module.css';

import type { FC } from 'react';

const Toasts: FC = () => {
  const [removing, setRemoving] = useState<string | null>(null);
  const { toasts } = useAppSelector((state) => state.toasts);
  const dispatch = useAppDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleRemoveToast = (id: string) => {
    setTimeout(() => {
      setRemoving(id);

      setTimeout(() => {
        dispatch(removeToast(id));
        setRemoving(null);
      }, 100);
    }, 4000);
  };

  useEffect(() => {
    if (!wrapperRef?.current) return;

    wrapperRef.current.style.setProperty('--count', `${toasts.length || 0}`);
  }, [toasts]);

  return (
    <div className={cn(styles.wrapper, { [styles.removing]: removing })} ref={wrapperRef}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(styles.toast, styles.animated, styles[toast.type])}
          dangerouslySetInnerHTML={{ __html: toast.message }}
          onAnimationEnd={() => handleRemoveToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default Toasts;
