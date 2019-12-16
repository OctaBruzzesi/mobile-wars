import React, { Fragment } from 'react';
import {
  StatusBar, View,
} from 'react-native';

import Application from './src/navigation';



const App: React.FC<{}> = () => {
  return (
    <View style={{ backgroundColor: '#303030', flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Application />
    </View>
  );
};

export default App;