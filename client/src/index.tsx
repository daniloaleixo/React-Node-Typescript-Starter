import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { AppContainer } from "react-hot-loader";
import App from "./app/app.component";
import './app/app.component.scss';

import store from './app/store';

const rootEl = document.getElementById("root");

const appElement =
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>;

render(
    appElement,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./app/app.component", () => {
        const NewApp = require("./app/app.component").default;

        render(
            appElement,
            rootEl
        );
    });
}
