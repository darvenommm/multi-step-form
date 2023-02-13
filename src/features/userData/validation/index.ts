import { string, object, ZodString } from 'zod';

import { UserDataFieldNames } from '../types';

const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const nameShema = string()
  .trim()
  .min(2, { message: 'Name length should bigger than 2 chars' });
export const emailShema = string()
  .trim()
  .email({ message: 'Incorrect email address' });
export const phoneShema = string().trim().regex(phoneRegex, {
  message: 'Incorrect phone number',
});

type UserDataShema = Record<UserDataFieldNames, ZodString>;

export const userDataShema = object<UserDataShema>({
  name: nameShema,
  email: emailShema,
  phone: phoneShema,
});
