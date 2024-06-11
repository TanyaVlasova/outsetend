import type { HTMLAttributes } from 'react';

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  data: ListData;
  itemType: 'default' | 'scale';
  withImages?: boolean;
}

export type ListData = {
  title: string;
  items: ItemData[];
};

export type ItemData = {
  subtitle: string;
  description?: string;
  value?: string | Persent;
  image?: string;
};

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type Persent = NumberRange<0, 101>;
