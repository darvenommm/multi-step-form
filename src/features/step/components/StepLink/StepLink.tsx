import { useAppDispatch } from '../../../../hooks';
import { setStep } from '../../logic';

import { MouseEvent } from 'react';
import { Step } from '../../types';

import styles from './StepLink.module.scss';

interface StepLinkProps {
  step: Step;
  text?: string;
}

export const StepLink = ({
  step,
  text = 'Change',
}: StepLinkProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const clickLinkHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    dispatch(setStep(step));
  };

  return (
    <a className={styles.link} onClick={clickLinkHandler}>
      {text}
    </a>
  );
};
