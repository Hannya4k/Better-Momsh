import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '@rneui/themed';

import Authentication from '../screens/Authentication';
import SignUp from '../components/auth/SignUp';
import LogIn from '../components/auth/LogIn';
import Dashboard from '../screens/Dashboard';
import UnavailablePage from '../components/404page';
import PregnancyBook from '../screens/PregnancyBook';
import FirstTrimester from '../components/babybook/firstTrimester';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Authentication} options={{ header: () => null }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{ header: () => null }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ header: () => null }} />
        <Stack.Screen name="FirstTrimester" component={FirstTrimester} options={{ header: () => null }} />
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
   
    <Tab.Navigator initialRouteName="Home"  screenOptions={{
      tabBarStyle: {
        backgroundColor: '#f08c8a', 
      },
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white'
      },
    }}
      >
      <Tab.Screen name="Doctors" component={UnavailablePage} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" type="" color={color} size={size} />  ),
        }}
      />
      <Tab.Screen name="Clinics" component={UnavailablePage} />
      <Tab.Screen name="Home" component={Dashboard} options={{ header: () => null }} />
      <Tab.Screen name="Baby book" component={PregnancyBook} 
      options={{ header: () => null, 
      tabBarIcons: () => (<Icon name="" type="" color="" size={10}/>) }}  />

      <Tab.Screen name="Profile" component={UnavailablePage} />
    </Tab.Navigator>
 
  );
}
export default AppNavigator;
