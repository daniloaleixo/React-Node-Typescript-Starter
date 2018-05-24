import { RouterState } from 'react-router-redux';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
    router: RouterState;
}
