import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Amplify from "aws-amplify";

import Home from "./src/screens/Home/Home.jsx";
import Profile from "./src/screens/Profile/Profile.jsx";
import Blog from "./src/screens/Blog/Blog.jsx";
import { mainColor } from "./constants/style";
import NewPost from "./src/screens/NewPost/NewPost.jsx";
import config from "./src/aws-exports";


Amplify.configure(config);

const Stack = createStackNavigator();





export default function App() {



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={mainColor} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewPost"
            component={NewPost}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home">
            {(props) => <Home {...props} extraData={"sf"} />}
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
    backgroundColor: mainColor,
    // marginTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
});
