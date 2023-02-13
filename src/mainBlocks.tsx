import {
  UserDataSection,
  PlanSection,
  ExtrasSection,
  TotalSection,
  ThankSection,
} from './widgets';

import { Step } from './features/step/types';

interface MainBlock {
  step: Step;
  component: JSX.Element;
}

export const mainBlocks: Array<MainBlock> = [
  {
    step: 'userData',
    component: <UserDataSection />,
  },
  {
    step: 'plans',
    component: <PlanSection />,
  },
  {
    step: 'extra',
    component: <ExtrasSection />,
  },
  {
    step: 'total',
    component: <TotalSection />,
  },
  {
    step: 'thank',
    component: <ThankSection />,
  },
];
