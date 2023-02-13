import { useAppSelector } from '../../../hooks';
import { selectStep } from '../logic/redux';

import { Step } from '../types';

export const useCurrentStep = (): Step => {
  return useAppSelector(selectStep);
};
