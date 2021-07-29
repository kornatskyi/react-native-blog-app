import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { mainColor } from "../../../constants/style";
import { storeUserAsync, updateUserName } from "../../redux/actions";


export default function ChangeCredential({ route, navigation }) {
  const [credential, setCredential] = useState(route.params.credential);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        <Text>Current</Text>
        <TextInput
          value={route.params.credential}
          placeholder={"Post body"}
          style={styles.bodyInput}
          maxLength={50}
          editable={false}
        ></TextInput>
        <Text>New {route.params.credentialType}</Text>
        <TextInput
          value={credential}
          onChangeText={(value) => setCredential(value)}
          style={styles.bodyInput}
          maxLength={50}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(updateUserName(credential));
          dispatch(storeUserAsync());

          navigation.goBack(null)
        }}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    justifyContent: "space-between",
  },
  bodyInput: {
    fontSize: 16,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: 10,
  },
  button: {
    backgroundColor: mainColor,

    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
