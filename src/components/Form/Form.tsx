import { useRef } from 'react';
import cn from 'classnames';
import { v4 as getId } from 'uuid';

import Cube from 'components/Cube';
import { useMatchMedia } from 'hooks';
import { useAppDispatch } from 'store/hooks';
import { addToast } from 'store/toasts/toasts.slice';

import styles from './Form.module.css';

import type { FC, FormEvent, HTMLAttributes } from 'react';

interface FormProps extends HTMLAttributes<HTMLDivElement> {}

// TODO: удолить
const TOKEN = '6900525038:AAFcKOOmz1mhxe2ZeaB3O4XQhfxm_1KhlMY';
const CHAT_ID = '-1002215680433';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const Form: FC<FormProps> = (props) => {
  const { className, ...restProps } = props;
  const { isMobile, isTablet } = useMatchMedia();
  const dispatch = useAppDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');

    const body = {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      // eslint-disable-next-line max-len
      text: `<b>Новое сообщение из формы! 🙂</b>\n\nИмя: ${name}\nПочта: ${email}\nСообщение: ${message}`,
    };

    const response = await fetch(URI_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (result.ok) {
      dispatch(
        addToast({ id: getId(), message: 'Сообщение успешно отправлено!', type: 'success' }),
      );

      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (messageRef.current) messageRef.current.value = '';
    } else {
      dispatch(addToast({ id: getId(), message: 'Произошла ошибка', type: 'error' }));
    }
  };

  return (
    <div className={cn(styles.wrapper, className)} {...restProps}>
      {/* TODO: переделать логику указания размера - неудобно */}
      <Cube className={styles.cube} size={isTablet ? 150 : isMobile ? 120 : 300} />

      <form className={styles.form} action="" encType="text/plain" onSubmit={handleFormSubmit}>
        <label className={styles.label} htmlFor="name">
          Имя
        </label>
        <input
          className={styles.input}
          name="name"
          id="name"
          type="text"
          placeholder="Саша из классной компании"
          required
          ref={nameRef}
        />

        <label className={styles.label} htmlFor="email">
          Почта
        </label>
        <input
          className={styles.input}
          name="email"
          id="email"
          type="email"
          placeholder="bestcompany@gmail.com"
          required
          ref={emailRef}
        />

        <label className={styles.label} htmlFor="message">
          Сообщение
        </label>
        <textarea
          className={styles.textarea}
          name="message"
          id="message"
          placeholder="Привет! Есть идея .."
          required
          ref={messageRef}
        ></textarea>

        <button className={styles.button} type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Form;
