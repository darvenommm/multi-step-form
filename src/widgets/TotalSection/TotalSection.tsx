import { clsx } from 'clsx';

import { Section } from '../../templates';
import { Price } from '../../components';
import { PlanPrice, PlanTitle } from '../../features/plan';
import { StepLink } from '../../features/step';
import { ExtraPrice } from '../../features/extra';

import { useTimeOfTarif } from '../../features/timeOfTarif';
import { usePlan, usePlanSum } from '../../features/plan';
import { useExtras, useExtrasSum } from '../../features/extra';

import { capitalize } from '../../helpers';
import { getShortTimeOfTarif } from './../../features/timeOfTarif/helpers/getShortTimeOfTarif';

import styles from './TotalSection.module.scss';

const title = 'Finishing up';
const description = 'Double-check everything look OK before confirming.';
const nextText = 'Confirm';

export const TotalSection = (): JSX.Element => {
  const timeOfTarif = useTimeOfTarif();
  const planTitle = usePlan();

  const extras = useExtras();
  const extrasElements = extras.map((extra) => (
    <li className={styles.extra}>
      <h3 className={styles.extraTitle}>{capitalize(extra)}</h3>
      <div className={styles.extraPrice}>
        <ExtraPrice timeOfTarif={timeOfTarif} title={extra} />
      </div>
    </li>
  ));

  const totalSum = usePlanSum(timeOfTarif) + useExtrasSum(timeOfTarif);

  return (
    <Section title={title} description={description} nextText={nextText}>
      <div>
        <div className={styles.firstContainer}>
          <div
            className={clsx(
              styles.planContainer,
              extras.length || styles.planContainerWithoutExtras,
            )}
          >
            <div>
              <div className={styles.planTitle}>
                <PlanTitle timeOfTarif={timeOfTarif} />
              </div>
              <StepLink step="plans" />
            </div>
            <div className={styles.planPrice}>
              <PlanPrice timeOfTarif={timeOfTarif} planTitle={planTitle} />
            </div>
          </div>
          <ul className={styles.extras}>{extrasElements}</ul>
        </div>
        <div className={styles.lastContainer}>
          <p className={styles.totalTitle}>Total (per month)</p>
          <div className={styles.totalPrice}>
            <Price
              sum={totalSum}
              initial={getShortTimeOfTarif(timeOfTarif)}
              hasPlus
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
