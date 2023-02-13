import { useAppSelector } from '../../../hooks';
import { selectUserDataCorrect } from '../logic';

export const useIsCorrectUserData = (): boolean => {
  return useAppSelector(selectUserDataCorrect);
};
