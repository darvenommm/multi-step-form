import { PrevStepButton, NextStepButton } from '../../features/step';

import styles from './StepButton.module.scss';

export interface StepButtonsProps {
  disabled?: boolean;
  order?: 'first' | 'last';
  prevText?: string;
  nextText?: string;
  isFocused?: boolean;
}

export const StepButtons = ({
  disabled,
  order,
  prevText,
  nextText,
  isFocused,
}: StepButtonsProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div>{order === 'first' || <PrevStepButton text={prevText} />}</div>
      <div>
        {order === 'last' || (
          <NextStepButton
            text={nextText}
            disabled={disabled}
            isFocused={isFocused}
          />
        )}
      </div>
    </div>
  );
};
