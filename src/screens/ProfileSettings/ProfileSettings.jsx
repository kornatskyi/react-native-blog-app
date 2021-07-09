import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { ListItem, Text } from "react-native-elements";
import { useSelector } from "react-redux";

export default function ProfileSettings() {
  const [text, onChangeText] = React.useState("Useless Text");

  const [changeName, setChangeName] = useState(false);

  const user = useSelector((state) => state.user.user);

  return (
    <View>
      {(() => {
        if (!changeName) {
          return (
            <View>
              <Text style={styles.title} >Login and security</Text>
              <ListItem  bottomDivider>
                <ListItem.Title>Username</ListItem.Title>
                <ListItem.Subtitle>{user.name}</ListItem.Subtitle>
              </ListItem>
              <ListItem  bottomDivider>
                <ListItem.Title>Email</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              </ListItem>
              <ListItem  bottomDivider>
                <ListItem.Title>Password</ListItem.Title>
              </ListItem>
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
    fontWeight: 'bold',
    fontSize:18,
    padding:10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    flexDirection: "column",
  },
});
