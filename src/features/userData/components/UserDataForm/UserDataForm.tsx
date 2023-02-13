import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { selectUserData } from '../../logic';

import { UserDataField } from '../UserDataField';

import { setCorrect } from '../../logic';
import { userDataShema } from '../../validation';

import { fieldsData } from '../../mock';

export const UserDataForm = (): JSX.Element => {
  const formElements = fieldsData.map((field) => (
    <UserDataField key={field.fieldName} {...field} />
  ));

  const userData = useAppSelector(selectUserData);
  const check = userDataShema.safeParse(userData);

  const dispatch = useAppDispatch();
  dispatch(setCorrect(check.success));

  return <form autoComplete="off">{formElements}</form>;
};
