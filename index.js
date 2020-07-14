/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './Components/Store';

AppRegistry.registerComponent(appName, () => (
  <Provider store={store}>App</Provider>
));
