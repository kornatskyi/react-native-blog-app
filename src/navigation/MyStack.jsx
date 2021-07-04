import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile/Profile.jsx";
import Blog from "../screens/Blog/Blog.jsx";
import NewPost from "../screens/NewPost/NewPost.jsx";
import EditPost from "../screens/EditPost/EditPost.jsx";
import ProfileSettings from "../screens/ProfileSettings/ProfileSettings.jsx";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
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
        <Stack.Screen
          name="EditPost"
          component={EditPost}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProfileSettings"
          component={ProfileSettings}
          options={{ title: 'Profile settings' }}
        />

        <Stack.Screen name="Blog" component={Blog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
