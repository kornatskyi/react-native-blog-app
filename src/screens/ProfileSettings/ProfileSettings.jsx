import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { Text } from "react-native-elements";
import { useSelector } from "react-redux";

export default function ProfileSettings() {
  const [text, onChangeText] = React.useState("Useless Text");

  const [changeName, setChangeName] = useState(false);

  const user = useSelector((state) => state.user.user);
  return (
    <View>
      {(() => {
        console.log("🚀 ~ changeName", changeName);
        if (!changeName) {
          return (
            <View style={styles.userNameContainer}>
              <Text>Username</Text>
              <Text>{user.name}</Text>
            </View>
          );
        } else {
          return <TextInput style={styles.input} onChangeText={onChangeText} />;
        }
      })()}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
