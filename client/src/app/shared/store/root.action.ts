/**
 * RootActions
 */

import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { $call } from 'utility-types';


// Define LOGOUT ACTION
// const USER_LOGOUT = 'USER_LOGOUT';
// type LogoutAction = { type: typeof USER_LOGOUT };
// export const LOGOUT_ACTION: LogoutAction = {
//     type: USER_LOGOUT
// };


// // const returnsOfActions = [
// ].map($call);


// type AppAction = typeof returnsOfActions[number];
type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction =
    // | AppAction
    // | LogoutAction
    | ReactRouterAction;
