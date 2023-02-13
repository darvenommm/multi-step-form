import { clsx } from 'clsx';

import { useAppDispatch } from '../../../../hooks';
import { setPlan } from '../../logic';
import { usePlan } from '../../hooks';

import { PlanPrice } from '../PlanPrice/PlanPrice';

import { PlanListProps } from '../PlanList';
import { Plan } from '../../types';

import styles from './PlanItem.module.scss';

interface PlanItemProps extends PlanListProps {
  planTitle: Plan;
  imageSrc: string;
}

export const PlanItem = ({
  timeOfTarif,
  planTitle,
  imageSrc,
}: PlanItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const isActive = usePlan() === planTitle;

  const clickItemHandler = (): void => {
    dispatch(setPlan(planTitle));
  };

  return (
    <li
      className={clsx(styles.container, isActive && styles.active)}
      onClick={clickItemHandler}
    >
      <img
        className={styles.images}
        src={imageSrc}
        alt="gamepad."
        width="50"
        height="50"
      />
      <div>
        <h3 className={styles.title}>{planTitle}</h3>
        <div className={styles.textContainer}>
          <PlanPrice timeOfTarif={timeOfTarif} planTitle={planTitle} />
        </div>
        {timeOfTarif === 'yearly' && (
          <p className={styles.extra}>2 months free</p>
        )}
      </div>
    </li>
  );
};
