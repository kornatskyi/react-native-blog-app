import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "./src/screens/Home/Home.jsx";
import Profile from "./src/screens/Profile/Profile.jsx";
import Blog from "./src/screens/Blog/Blog.jsx";
import NewPost from "./src/screens/NewPost/NewPost.jsx";
import EditPost from "./src/screens/EditPost/EditPost.jsx";
//Styles
import { mainColor } from "./constants/style";

//Redux
import { configureStore } from "./src/redux/store.js";
import { Provider, useDispatch } from 'react-redux'
import { storeUser, storeUserAsync } from "./src/redux/actions.js";

//Amplify related
import Amplify, {
  Auth,
  API,
  graphqlOperation
} from "aws-amplify";

import { withAuthenticator } from 'aws-amplify-react-native'
import config from "./src/aws-exports";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";


Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  }
});




const store = configureStore();
const Stack = createStackNavigator();

function App() {

  const getRandomImage = () =>
    "https://lh3.googleusercontent.com/ogw/ADea4I7I63F88WWUyN07qmDo1HfXsZUn8NiAFUAye1v2=s32-c-mo";

  const saveUserToDB = async (user) => {
    await API.graphql(graphqlOperation(createUser, { input: user }));
  };

  const dispatch = useDispatch()


  useEffect(() => { 
        dispatch(storeUserAsync())
  }, []);


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
            <Stack.Screen
              name="EditPost"
              component={EditPost}
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


function ReduxProviderWrapper() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default withAuthenticator(ReduxProviderWrapper)

