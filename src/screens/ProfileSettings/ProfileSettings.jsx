import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { ListItem, Text } from "react-native-elements";
import { useSelector } from "react-redux";

export default function ProfileSettings({ navigation }) {
  const changeCredential = (credentialName) => {
    // navigation.setParams({ title: "Hello" });
    navigation.navigate("ChangeCredential", { title: credentialName });
  };

  const [text, onChangeText] = React.useState("Useless Text");

  const [changeName, setChangeName] = useState(false);

  const user = useSelector((state) => state.user.user);

  return (
    <View>
      {(() => {
        if (!changeName) {
          return (
            <View>
              <Text style={styles.title}>Login and security</Text>
              <TouchableOpacity
                onPress={() => {
                  changeCredential("Change Username");
                }}
              >
                <ListItem bottomDivider>
                  <ListItem.Title>Username</ListItem.Title>
                  <ListItem.Subtitle>{user.name}</ListItem.Subtitle>
                </ListItem>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  changeCredential("Change Email");
                }}
              >
                <ListItem bottomDivider>
                  <ListItem.Title>Email</ListItem.Title>
                  <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  changeCredential("Change Password");
                }}
              >
                <ListItem bottomDivider>
                  <ListItem.Title>Password</ListItem.Title>
                </ListItem>
              </TouchableOpacity>
            </View>
          );
        } else {
          return (
            <ListItem style={styles.userNameContainer}>
              <Text>Username:</Text>
              <TextInput style={styles.input} onChangeText={onChangeText} />
            </ListItem>
          );
        }
      })()}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    flexDirection: "column",
  },
});
