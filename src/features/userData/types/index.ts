import { ZodString } from 'zod';

export interface UserData {
  name: string;
  email: string;
  phone: string;
}

export type UserDataFieldNames = keyof UserData;

export interface UserDataProperty {
  fieldName: UserDataFieldNames;
  value: string;
}

export interface InitialState {
  data: UserData;
  correct: boolean;
}

export interface UserDataFieldProps {
  fieldName: UserDataFieldNames;
  label: string;
  placeholder: string;
  shema: ZodString;
  name: string;
  type?: 'text' | 'email' | 'tel';
}
