import { usePlan } from './../../hooks';

import { Time } from '../../../timeOfTarif';

import { capitalize } from '../../../../helpers';

import styles from './PlanTitle.module.scss';

interface PlanTitleProps {
  timeOfTarif: Time;
}

export const PlanTitle = ({ timeOfTarif }: PlanTitleProps): JSX.Element => {
  const plan = usePlan();

  return (
    <h3 className={styles.title}>
      {capitalize(plan)} ({capitalize(timeOfTarif)})
    </h3>
  );
};
