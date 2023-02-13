import { useRef, useEffect } from 'react';

import { useAppDispatch } from '../../../../hooks';
import { setStep } from '../../logic';

import { useCurrentStepIndex } from '../../hooks';

import { Step, StepByIndex } from '../../types';

import styles from './NextStepButton.module.scss';

export interface NextStepButtonProps {
  text?: string;
  disabled?: boolean;
  isFocused?: boolean;
}

export const NextStepButton = ({
  text = 'Next Step',
  disabled = false,
  isFocused = false,
}: NextStepButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const stepIndex = useCurrentStepIndex();

  const clickButtonHanlder = (): void => {
    const newStep = StepByIndex[stepIndex + 1] as Step;
    dispatch(setStep(newStep));
  };

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect((): void => {
    if (!isFocused || disabled) {
      return;
    }

    const button = buttonRef.current;
    button && button.focus();
  }, [isFocused, disabled]);

  return (
    <button
      className={styles.button}
      onClick={clickButtonHanlder}
      disabled={disabled}
      ref={buttonRef}
    >
      {text}
    </button>
  );
};
