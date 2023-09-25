import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Authentication from '../screens/Authentication';
import SignUp from '../components/auth/SignUp';
import LogIn from '../components/auth/LogIn';
import Dashboard from '../screens/Dashboard';
import UnavailablePage from '../components/404page';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Authentication} options={{ header: () => null }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{ header: () => null }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ header: () => null }} />
        <Stack.Screen name="Dashboard" component={DashboardStackScreen} options={{ header: () => null }} />
      </Stack.Navigator>
      {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Profile" component={UnavailablePage} />
    </Tab.Navigator> */}
    </NavigationContainer>
  );
}

function DashboardStackScreen() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Doctors" component={UnavailablePage} />
      <Tab.Screen name="Clinics" component={UnavailablePage} />
      <Tab.Screen name="Home" component={Dashboard} options={{ header: () => null }} />
      <Tab.Screen name="Baby book" component={UnavailablePage} />
      <Tab.Screen name="Profile" component={UnavailablePage} />
    </Tab.Navigator>
  );
}
export default AppNavigator;
