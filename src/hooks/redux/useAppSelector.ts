import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';

import { StateType } from '../../store';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
