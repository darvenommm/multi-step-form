import { useAppSelector } from '../../../hooks';
import { selectTimeOfTarif } from '../logic';

import { Time } from '../types';

export const useTimeOfTarif = (): Time => {
  return useAppSelector(selectTimeOfTarif);
};
