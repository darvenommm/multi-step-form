import { useExtras } from './useExtras';

import { Time } from '../../timeOfTarif';

import { extras } from '../mock';

export const useExtrasSum = (timeOfTarif: Time): number => {
  const extraTitles = useExtras();

  return extras.reduce((sum, current) => {
    if (!extraTitles.includes(current.title)) {
      return sum;
    }

    return sum + current.price[timeOfTarif];
  }, 0);
};
