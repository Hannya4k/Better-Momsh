/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './App';
import {name as appName} from './app.json';
// import { enableAllPlugins } from 'react-native-axios';
// enableAllPlugins([axios]);


AppRegistry.registerComponent(appName, () => App);
