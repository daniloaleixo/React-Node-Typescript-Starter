import { createStore, applyMiddleware, compose, Middleware, Store, AnyAction } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, RootState, RootAction } from './shared/store/index';
import { routerMiddleware } from 'react-router-redux';
import { History, createHashHistory } from 'history';

const composeEnhancers = (
    process.env.ENV === 'development' &&
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

export const history: History = createHashHistory();

function configureStore(initialState?: RootState) {
    // Configure middlewares
    const middlewares: Middleware<any, any, any>[] = [
        //     createEpicMiddleware(rootEpic),
        routerMiddleware(history)
    ];

    // Compose enhancers
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    );

    // Create store
    return createStore(
        rootReducer,
        initialState!,
        enhancer
    );
}

// Pass an optional param to rehydrate state on app start
const store: Store<RootState, AnyAction> = configureStore();

// Export store singleton instance
export default store;
