import React, { useState } from "react";
import { View, Button, StyleSheet, useWindowDimensions } from "react-native";
import { Text } from "react-native-elements";

import { TabView, SceneMap } from "react-native-tab-view";

import TabViewExample from "../../components/Tabs/Tabs";

import Avatar from "../../components/Avatar/Avatar";
import { mainColor } from "../../../style";
import Blogs from "../../components/Blogs/Blogs";
import Photos from "../../components/Photos/Photos";

export default function Profile({ navigation, extraData }) {
  return (
    <View style={styles.container}>
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
          <Avatar source={require("../../../assets/images/avatar.png")} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.nameContainer}>
          <Text style={styles.name} h4>
            Victoria Robertson
          </Text>
        </View>
        <View style={styles.mantraContainer}>
          <Text style={styles.mantra}>A mantra goes here</Text>
        </View>
        {/* 
        <View style={styles.customTabs}>
          <Button title="Posts" />
          <Button title="Photos" />
        </View> */}
        <View style={{ flex: 1 }}>
          <TabViewExample scenes={[Blogs, Photos]}></TabViewExample>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // flex: 0.26,
    height: 180,
    backgroundColor: mainColor,
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
  body: {
    marginTop: 60,
    flex: 1,
  },
  nameContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 23,
  },
  mantraContainer: {
    alignItems: "center",
  },
  mantra: {
    fontSize: 14,
  },
  customTabs: {
    flexDirection: "row",
  },
  tab: {
    alignItems: "center",
    alignContent: "space-between",
  },
});
