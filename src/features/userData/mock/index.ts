import { nameShema, emailShema, phoneShema } from '../validation';

import { UserDataFieldProps } from '../types';

export const fieldsData: Array<UserDataFieldProps> = [
  {
    label: 'Name',
    placeholder: 'e.g. Stephen King',
    shema: nameShema,
    name: 'name',
    fieldName: 'name',
  },
  {
    label: 'Email Address',
    placeholder: 'e.g. stephenking@lorem.com',
    shema: emailShema,
    name: 'email',
    fieldName: 'email',
    type: 'email',
  },
  {
    label: 'Phone Number',
    placeholder: 'e.g. 123 456 78 90',
    shema: phoneShema,
    name: 'phone',
    fieldName: 'phone',
    type: 'tel',
  },
];
