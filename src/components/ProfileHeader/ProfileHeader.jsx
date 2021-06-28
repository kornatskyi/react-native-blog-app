import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Avatar from "../Avatar/Avatar";
import { mainColor } from "../../../constants/style";

export default function ProfileHeader({ navigation }) {
  
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Text style={styles.titleChild}>Settings</Text>
        <Text style={styles.titleChild} h3>
          Profile
        </Text>
        <Text
          style={styles.titleChild}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          Logout
        </Text>
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

const styleShrink = StyleSheet.create({
  header: {
    // flex: 0.26,
    height: 60,
    backgroundColor: mainColor,
    marginBottom: 50,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    top: 20,
  },
  titleChild: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
  avatarContainer: {
    top: 30,
    alignItems: "flex-start",
    left: 10,
  },
  avatarImage: {
    width: 50,
    height: 50,
  },
  nameContainer: {
    left: 70,
    top: -10,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
  },
  mantraContainer: {
    display: "none",
  },
  mantra: {
    fontSize: 14,
  },
});

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
  titleChild: {
    flex: 1,
    textAlign: "center",
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
