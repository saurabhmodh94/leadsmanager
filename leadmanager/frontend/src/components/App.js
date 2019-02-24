import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./leads/Dashboard";
import Header from "./layout/Header";
import { Provider } from "react-redux";
import store from "../store";
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header></Header>
          <div className="container">
            <Dashboard></Dashboard>
          </div>
        </Fragment>
      </Provider>

    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
