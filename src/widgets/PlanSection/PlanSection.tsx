import { Section } from '../../templates';

import { PlanList } from '../../features/plan';
import { TimeOfTarifToggle } from '../../features/timeOfTarif';

import { useTimeOfTarif } from '../../features/timeOfTarif';

import styles from './PlanSection.module.scss';

const title = 'Select your plan';
const description = 'You have the option of monthly or yearly billing.';

export const PlanSection = (): JSX.Element => {
  const timeOfTarif = useTimeOfTarif();

  return (
    <Section title={title} description={description}>
      <div>
        <div className={styles.listContainer}>
          <PlanList timeOfTarif={timeOfTarif} />
        </div>
        <div className={styles.toggleContainer}>
          <TimeOfTarifToggle />
        </div>
      </div>
    </Section>
  );
};
