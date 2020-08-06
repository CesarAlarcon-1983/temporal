import React from 'react';
import Intro from './views/intro/intro';
import Main from './views/main/main';
import Scan from './views/scan/scan';
import Ocations from './views/ocations/ocations';
import FoodCourse from './views/food-course/food-course';
import WineType from './views/wine-type/wine-type';
import CheeseType from './views/cheese-type/cheese-type';
import PriceRange from './views/price-range/price-range';
import WineDetail from './views/wine-detail/wine-detail';
import { AnimatePresence } from 'framer-motion'
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

function App()  {
  const location = useLocation();

  return(
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
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
        <Route path="/cheese-type">
          <CheeseType />
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
    </AnimatePresence>
  );
}

export default App;