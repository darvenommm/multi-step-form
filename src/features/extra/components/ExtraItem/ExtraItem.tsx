import { clsx } from 'clsx';

import { ExtraPrice } from '../ExtraPrice';

import { useAppDispatch } from '../../../../hooks';
import { toggleExtra } from '../../logic';
import { useExtras } from '../../hooks';

import { ExtrasListProps } from '../ExtrasList';
import { ExtraTitle } from '../../types';

import { capitalize } from '../../../../helpers';

import styles from './ExtraItem.module.scss';

export interface ExtraItemProps extends ExtrasListProps {
  title: ExtraTitle;
  description: string;
}

export const ExtraItem = ({
  timeOfTarif,
  title,
  description,
}: ExtraItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const clickItemHandler = (): void => {
    dispatch(toggleExtra(title));
  };

  const extras = useExtras();
  const isActive = extras.includes(title);

  return (
    <li
      className={clsx(styles.item, isActive && styles.activeItem)}
      onClick={clickItemHandler}
    >
      <div className={styles.container}>
        <div
          className={clsx(styles.checkbox, isActive && styles.activeCheckbox)}
        >
          {/* check mark with css */}
        </div>
        <div>
          <h3 className={styles.title}>{capitalize(title)}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <ExtraPrice timeOfTarif={timeOfTarif} title={title} />
      </div>
    </li>
  );
};
