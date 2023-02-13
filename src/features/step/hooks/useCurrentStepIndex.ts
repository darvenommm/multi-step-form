import { useAppSelector } from '../../../hooks';
import { selectStep } from '../logic/redux';

import { StepByIndex } from '../types';

export const useCurrentStepIndex = (): number => {
  const currentStep = useAppSelector(selectStep);
  return StepByIndex[currentStep];
};
