import {
    Dispatch as ReduxDispatch,
    Reducer as ReduxReducer,
} from 'redux';

import { RootAction } from './root.action';
import { RootState } from './root.state';

export type Dispatch = ReduxDispatch<RootAction>;
export type Reducer = ReduxReducer<RootState, RootAction>;
