import { useAppDispatch } from '../../../../hooks';
import { setStep } from '../../logic';

import { useCurrentStepIndex } from '../../hooks';

import { Step, StepByIndex } from '../../types';

import styles from './PrevStepButton.module.scss';

interface PrevStepButtonProps {
  text?: string;
}

export const PrevStepButton = ({
  text = 'Go Back',
}: PrevStepButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const stepIndex = useCurrentStepIndex();

  const clickButtonHanlder = (): void => {
    const newStep = StepByIndex[stepIndex - 1] as Step;
    dispatch(setStep(newStep));
  };

  return (
    <button className={styles.button} onClick={clickButtonHanlder}>
      {text}
    </button>
  );
};
