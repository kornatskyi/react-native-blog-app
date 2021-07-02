import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Avatar from "../Avatar/Avatar";
import { mainColor } from "../../../constants/style";
import { TouchableOpacity } from "react-native";

import Auth from "@aws-amplify/auth";

export default function ProfileHeader({ navigation }) {
  async function logout() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <TouchableOpacity
          style={styles.titleButton}
          onPress={() => {
            console.log("here should be a settings function ");
          }}
        >
          <Text style={styles.titleText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.titleButton}
          onPress={() => {
            console.log("here should be a profile function ");
          }}
        >
          <Text style={styles.titleText} h3>
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.titleButton}
          onPress={() => {
            logout();
          }}
        >
          <Text
            style={styles.titleText}
            onPress={() => {
             
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <Avatar
          style={styles.avatarImage}
          source={require("../../../assets/images/avatar.png")}
        />
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>Victoria Robertson</Text>
      </View>
      <View style={styles.mantraContainer}>
        <Text style={styles.mantra}>A mantra goes here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // flex: 0.26,
    height: 180,
    backgroundColor: mainColor,
    marginBottom: 85,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    top: 20,
  },
  titleButton: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    // textAlign: "center",
    color: "#fff",

    fontSize: 18,
  },
  avatarContainer: {
    top: 50,
    alignItems: "center",
  },
  avatarImage: {
    width: 135,
    height: 135,
    marginBottom: 50,
  },
  nameContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
  },
  mantraContainer: {
    alignItems: "center",
  },
  mantra: {
    fontSize: 14,
  },
});
