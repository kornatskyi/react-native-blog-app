import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MyStack from "./src/navigation/MyStack.jsx";
import Loader from "./src/components/Loader/Loader";

//Styles
import { mainColor } from "./constants/style";

//Redux
import { configureStore } from "./src/redux/store.js";
import { Provider, useDispatch, useSelector } from "react-redux";
import { storeUserAsync } from "./src/redux/actions.js";

//Amplify related
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";

import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";
import { createUser } from "./src/graphql/mutations";

import authenticatorStyles from "./styles/authenticatorStyles";
import { Text } from "react-native";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});


const store = configureStore();

function App() {
  //Checked user and show loading page while user isn't checked
  const isUserStored = useSelector((state) => !!state.user.user.id);

  const [isLoader, setLoader] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeUserAsync());
  }, []);

  //Set up loader to avoid memory leak
  useEffect(() => {
    setLoader(false);
  }, [isUserStored]);

  if (isUserStored) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor={mainColor} />
        <MyStack />
      </SafeAreaView>
    );
  } else {
    return (
      <View>
        <Loader visible={isLoader}></Loader>
      </View>
    );
  }
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
      <App />
    </Provider>
  );
}

export default withAuthenticator(ReduxProviderWrapper, {
  // customize the UI/styling
  theme: { ...authenticatorStyles },
});
