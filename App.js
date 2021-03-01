import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import SplashNav from './src/navigations/SplashNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <SplashNav/>
    </NavigationContainer>
  );
};

export default App;
