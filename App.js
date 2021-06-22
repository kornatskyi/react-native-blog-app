import 'react-native-gesture-handler';
import * as React from "react";
import { View, Text, StyleSheet, StatusBar as NativeStatusBar, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home/Home.jsx'
import Profile from './src/screens/Profile/Profile.jsx'
import Blog from './src/screens/Blog/Blog.jsx'

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name="Home">
          {props => <Home {...props} extraData={"sf"} />}
        </Stack.Screen> */}
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        {/* <Stack.Screen name="Blog" component={Blog} /> */}

      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
});