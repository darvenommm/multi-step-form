import { Time } from '../types';

export const getShortTimeOfTarif = (time: Time): 'mo' | 'yr' =>
  time === 'monthly' ? 'mo' : 'yr';
