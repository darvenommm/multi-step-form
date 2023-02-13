import { Time } from '../../timeOfTarif';

export type ExtraTitle =
  | 'online service'
  | 'larger strorage'
  | 'customizable profile';

export type ExtraPrice = Record<Time, number>;

export interface Extra {
  title: ExtraTitle;
  description: string;
  price: ExtraPrice;
}
