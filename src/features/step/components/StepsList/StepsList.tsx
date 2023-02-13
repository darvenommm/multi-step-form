import { StepItem } from '../StepItem';

import { useCurrentStepIndex } from '../../hooks';

import styles from './StepsList.module.scss';

export const StepsList = (): JSX.Element => {
  const activeIndex = useCurrentStepIndex();

  const elementsTitle = ['your info', 'select plan', 'add-ons', 'summary'];

  const length = elementsTitle.length;
  const stepsElements = elementsTitle.map((elementsTitle, index) => {
    const itemIndex = index + 1;

    return (
      <StepItem
        key={elementsTitle}
        index={itemIndex}
        title={elementsTitle}
        isActive={
          length > activeIndex
            ? activeIndex === itemIndex
            : itemIndex === length
        }
      />
    );
  });

  return <ul className={styles.list}>{stepsElements}</ul>;
};
