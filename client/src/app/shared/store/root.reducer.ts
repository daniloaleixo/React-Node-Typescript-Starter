import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { RootAction } from './root.action';
import { RootState } from './root.state';


const appReducer = combineReducers<RootState, RootAction>({
    router: routerReducer
});

export const rootReducer = (state: RootState, action: RootAction) => {
    return appReducer(state, action);
};
