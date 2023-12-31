
import 'react-native-gesture-handler';

import { StyleSheet, View } from 'react-native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context';




import AppNavigator from './src/navigation'
import Dashboard from './src/screens/Dashboard';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  )
}

export default App;

const styles = StyleSheet.create({})