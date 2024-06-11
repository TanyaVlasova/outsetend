import { ListData } from 'components/List';

import { images } from './images';

const today = new Date();
const birth = new Date('2001-12-29T21:00:00.000Z');
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
      description: 'frontend разработчик',
      value: ' февраль 2023 - настоящее время',
    },
  ],
};

export const skills: ListData = {
  title: 'Навыки',
  items: [
    {
      subtitle: 'html + css',
      value: 80,
      image: images.htmlcss,
    },
    {
      subtitle: 'typescript',
      value: 70,
      image: images.typescript,
    },
    {
      subtitle: 'react js',
      value: 60,
      image: images.htmlcss,
    },
    {
      subtitle: 'next js',
      value: 40,
      image: images.typescript,
    },
    {
      subtitle: 'redux toolkit',
      value: 20,
      image: images.htmlcss,
    },
    {
      subtitle: 'node js',
      value: 10,
      image: images.typescript,
    },
    {
      subtitle: 'git',
      value: 70,
      image: images.htmlcss,
    },
    {
      subtitle: 'postgresql',
      value: 20,
      image: images.typescript,
    },
    {
      subtitle: 'unit tests',
      value: 0,
      image: images.htmlcss,
    },
  ],
};
