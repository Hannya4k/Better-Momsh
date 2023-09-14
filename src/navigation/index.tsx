import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Authentication from '../screens/Authentication';
import SignUp from '../components/auth/SignUp';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Authentication} options={{header: () => null}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
