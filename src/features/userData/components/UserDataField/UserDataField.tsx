import { useState, useLayoutEffect, useId, ChangeEvent } from 'react';
import { clsx } from 'clsx';

import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { setUserDataField, selectUserDataPropertyValue } from '../../logic';

import { UserDataFieldProps } from '../../types';

import styles from './UserDataField.module.scss';

export const UserDataField = ({
  fieldName,
  label,
  placeholder,
  shema,
  name,
  type,
}: UserDataFieldProps): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);

  const dispatch = useAppDispatch();

  const value = useAppSelector((state) =>
    selectUserDataPropertyValue(state, fieldName),
  );

  useLayoutEffect((): void => {
    if (value.length === 0) {
      setIsCorrect(true);
      setErrorMessage('');
    }
  }, [value]);

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const check = shema.safeParse(value);
    const success = check.success;

    setIsCorrect(success);
    setErrorMessage(success ? '' : check.error.errors[0].message);

    dispatch(
      setUserDataField({
        fieldName,
        value,
      }),
    );
  };

  const fieldId = useId();
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label className={styles.label} htmlFor={fieldId}>
          {label}
        </label>{' '}
        <span className={styles.error}>{errorMessage}</span>
      </div>
      <input
        className={clsx(styles.input, isCorrect || styles.inputError)}
        id={fieldId}
        name={name}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={changeInputHandler}
      />
    </div>
  );
};
