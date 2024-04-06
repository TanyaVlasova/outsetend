import type { ListData } from 'ui/List';

const today = new Date();
const birth = new Date('2001.12.20');
let age = today.getFullYear() - birth.getFullYear();

if (
  today.getMonth() < birth.getMonth() ||
  (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
) {
  age--;
}

export const generalInfo: ListData = {
  title: 'Общая информация',
  items: [
    {
      subtitle: 'Имя',
      value: 'Власова Татьяна',
    },
    {
      subtitle: 'Возраст',
      value: age.toString(),
    },
    {
      subtitle: 'Город',
      value: 'Владимир/Москва, Россия',
    },
    {
      subtitle: 'Языки',
      value: 'Английский (B1), Русский',
    },
  ],
};

export const experience: ListData = {
  title: 'Опыт',
  items: [
    {
      subtitle: 'divan.ru',
      value: ' февраль 2023 - настоящее время',
    },
  ],
};
