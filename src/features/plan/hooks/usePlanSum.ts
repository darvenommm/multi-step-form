import { usePlan } from './usePlan';

import { Time } from '../../timeOfTarif';

import { plans } from '../mock';

export const usePlanSum = (timeOfTarif: Time): number => {
  const planTitle = usePlan();

  return (
    plans.find((plan) => plan.planTitle === planTitle)?.price[timeOfTarif] ||
    NaN
  );
};
