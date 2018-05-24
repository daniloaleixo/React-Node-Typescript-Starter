import * as React from "react";
import { connect } from 'react-redux';
import { Switch, Router, Route, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";

import * as axios from 'axios';
import { Modal } from 'antd';


import { InitService } from './shared/services/init.service';
import { LoadingComponent } from './shared/components/loading.component';
import { ROUTES_PATHS } from './shared/constants/barrel-constants';
import { RootState } from './shared/store/';

// Components
import { HomeComponent } from './home/home.component';

// Init
import { history } from './store';

import "./app.component.scss";


interface IAppComponentProps {}

interface IAppComponentState {
  showLoading: boolean;
}

/**
 * Class that designates everything that the system has to init,
 * the routes are just for outside platform, inside Home we have our
 * inside-platform routes
 */
export class AppComponent extends React.Component<IAppComponentProps, IAppComponentState> {

  constructor(props: IAppComponentProps) {
    super(props);

    this.state = {
      showLoading: true
    };
    // Init Store
    // Store.initStore();

    // Makes request to /init
    InitService.initApp()
      .then((res) => this.setState({ showLoading: false }))
      .catch((err) => this.setState({ showLoading: false }));

    // Get all erros
    window.onerror = (err) => {
      this.showError(err);
    };
  }


  public showError(error: any) {
    Modal.error({
      title: 'Ocorreu um erro :(',
      content: error.toString(),
      onOk() {
        // Reload page
        location.reload();
      }
    });
  }

  componentDidCatch(error, info) {
    this.showError(error);
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        {
          this.state.showLoading ?
            <LoadingComponent showLoading={this.state.showLoading} />
            :
            <Switch>
              <Route exact path={ROUTES_PATHS.root} component={HomeComponent} /> )} />
            </Switch>

        }
      </ConnectedRouter>
    );
  }
}


function mapStateToProps(state: RootState): IAppComponentProps {
  return {};
}

const App: React.ComponentClass<Pick<any, IAppComponentState & any>> = connect(mapStateToProps, null)(AppComponent);

export default App;
