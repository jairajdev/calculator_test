import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./layouts/TopBar";
import configureStore from "./redux/configureStore";
import CalculatorComponent from "./components/CalculatorComponent";
import "./styles/index.scss";

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* <TopBar /> */}
        <Switch>
          <Route exact path="/" component={CalculatorComponent}></Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
