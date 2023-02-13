import { ExtraItem } from '../ExtraItem';

import { Time } from '../../../timeOfTarif';

import { extras } from '../../mock';

import styles from './ExtrasList.module.scss';

export interface ExtrasListProps {
  timeOfTarif: Time;
}

export const ExtrasList = ({ timeOfTarif }: ExtrasListProps): JSX.Element => {
  const extrasElements = extras.map(({ title, description }) => (
    <ExtraItem
      key={title}
      timeOfTarif={timeOfTarif}
      title={title}
      description={description}
    />
  ));

  return <ul className={styles.list}>{extrasElements}</ul>;
};
