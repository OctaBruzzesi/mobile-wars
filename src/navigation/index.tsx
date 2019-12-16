import React from 'react';
import { createAppContainer } from 'react-navigation';

import Application from './Application';

const AppNav = createAppContainer(Application);

const App = () => <AppNav theme="dark" />

export default App;