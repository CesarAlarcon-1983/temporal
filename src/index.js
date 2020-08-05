import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './index.styles';
import Intro from './views/intro/intro';
import Main from './views/main/main';
import Scan from './views/scan/scan';
import Ocations from './views/ocations/ocations';
import FoodCourse from './views/food-course/food-course';
import WineType from './views/wine-type/wine-type';
import PriceRange from './views/price-range/price-range';
import WineDetail from './views/wine-detail/wine-detail';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/scan">
          <Scan />
        </Route>
        <Route path="/food-pairing">
          <FoodCourse />
        </Route>
        <Route path="/wine-type">
          <WineType />
        </Route>
        <Route path="/wine-detail">
          <WineDetail />
        </Route>
        <Route path="/ocations">
          <Ocations />
        </Route>
        <Route path="/price-range">
          <PriceRange />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
