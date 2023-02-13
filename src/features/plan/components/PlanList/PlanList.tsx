import { PlanItem } from '../PlanItem';

import { Time } from '../../../timeOfTarif';

import styles from './PlanList.module.scss';

import { plans } from '../../mock';

export interface PlanListProps {
  timeOfTarif: Time;
}

export const PlanList = ({ timeOfTarif }: PlanListProps): JSX.Element => {
  const planElements = plans.map(({ planTitle, imageSrc }) => (
    <PlanItem
      key={planTitle}
      timeOfTarif={timeOfTarif}
      planTitle={planTitle}
      imageSrc={imageSrc}
    />
  ));

  return <ul className={styles.list}>{planElements}</ul>;
};
