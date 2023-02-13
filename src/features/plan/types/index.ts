import { Time } from '../../timeOfTarif';

export type Plan = 'arcade' | 'advanced' | 'pro';

type PlanPrice = Record<Time, number>;

export interface PlanProperties {
  planTitle: Plan;
  price: PlanPrice;
  imageSrc: string;
}
