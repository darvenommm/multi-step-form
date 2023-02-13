import { Price } from '../../../../components';

import { Plan } from '../../types';
import { Time } from '../../../timeOfTarif';

import { getShortTimeOfTarif } from '../../../timeOfTarif';

import { plans } from '../../mock';

interface PlanPriceProps {
  planTitle: Plan;
  timeOfTarif: Time;
}

export const PlanPrice = ({
  timeOfTarif,
  planTitle,
}: PlanPriceProps): JSX.Element => {
  const price = plans.find((plan) => plan.planTitle === planTitle)?.price[
    timeOfTarif
  ];

  return (
    <Price sum={price || NaN} initial={getShortTimeOfTarif(timeOfTarif)} />
  );
};
