import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './pages/home/home';
import Selector from './pages/selector/selector';

const Routes = () => (
	<Router>
    <Scene key='root'>
      <Scene key='home' hideNavBar component={Home} title="Home" initial={true} />
      <Scene key='selector' hideNavBar component={Selector} title="Selector" />
    </Scene>
  </Router>
);

export default Routes;