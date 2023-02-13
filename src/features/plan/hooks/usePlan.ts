import { useAppSelector } from '../../../hooks';
import { selectPlan } from '../logic';

import { Plan } from '../types';

export const usePlan = (): Plan => {
  return useAppSelector(selectPlan);
};
