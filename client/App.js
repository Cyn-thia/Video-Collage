import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Home from './Home';
import Cam from './Camera';
import Layouts from './Layouts';
import Collage from './Collage'

const App = createSwitchNavigator(
    {
      Home,
      Cam,
      Layouts,
      Collage,
    },
    {
      initialRouteName: "Home"
    }
  );

export default App;
