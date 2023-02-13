import { useAppSelector } from '../../../hooks';
import { selectExtras } from '../logic';

import { ExtraTitle } from '../types';

export const useExtras = (): Array<ExtraTitle> => {
  return useAppSelector(selectExtras);
};
