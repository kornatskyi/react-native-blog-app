import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home.jsx'
import Profile from '../screens/Profile/Profile.jsx'
import Blog from '../screens/Blog/Blog.jsx'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Blog" component={Blog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};