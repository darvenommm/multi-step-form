import { PlanProperties } from '../types';

export const plans: Array<PlanProperties> = [
  {
    planTitle: 'arcade',
    price: {
      monthly: 9,
      yearly: 90,
    },
    imageSrc: '/assets/images/icon-arcade.svg',
  },
  {
    planTitle: 'advanced',
    price: {
      monthly: 12,
      yearly: 120,
    },
    imageSrc: '/assets/images/icon-advanced.svg',
  },
  {
    planTitle: 'pro',
    price: {
      monthly: 15,
      yearly: 150,
    },
    imageSrc: '/assets/images/icon-pro.svg',
  },
];
