import 'react-native-gesture-handler';
import * as React from "react";
import { View, Text, StyleSheet, StatusBar as NativeStatusBar, SafeAreaView, StatusBar, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home/Home.jsx'
import Profile from './src/screens/Profile/Profile.jsx'
import Blog from './src/screens/Blog/Blog.jsx'

import { mainColor } from './style';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
        animated={true}
        backgroundColor={mainColor}
      />
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        <Stack.Screen name="Home">
          {props => <Home {...props} extraData={"sf"} />}
        </Stack.Screen>
        <Stack.Screen name="Blog" component={Blog} />

      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:mainColor
    // marginTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
});