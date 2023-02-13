import { clsx } from 'clsx';

import Switch from 'react-switch';

import { useAppDispatch } from '../../../../hooks';
import { useTimeOfTarif } from '../../hooks';
import { setTimeOfTarif } from '../../logic';

import styles from './TimeOfTarifToggle.module.scss';

const SWITCH_COLOR = '#2d3a87';

export const TimeOfTarifToggle = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const timeOfTarif = useTimeOfTarif();
  const isChecked = timeOfTarif === 'yearly';

  const changeSwitchHanlder = (): void => {
    dispatch(setTimeOfTarif(timeOfTarif === 'monthly' ? 'yearly' : 'monthly'));
  };

  return (
    <div className={styles.container}>
      <p className={clsx(styles.text, isChecked || styles.activeText)}>
        Monthly
      </p>
      <Switch
        className={styles.toggle}
        checked={isChecked}
        onChange={changeSwitchHanlder}
        offColor={SWITCH_COLOR}
        onColor={SWITCH_COLOR}
        uncheckedIcon={false}
        checkedIcon={false}
        width={60}
      />
      <p className={clsx(styles.text, isChecked && styles.activeText)}>
        Yearly
      </p>
    </div>
  );
};
