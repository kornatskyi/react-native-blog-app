import React, { useState } from "react";
import { View, Button, StyleSheet, useWindowDimensions } from "react-native";
import { Text } from "react-native-elements";

import { TabView, SceneMap } from "react-native-tab-view";

import TabViewExample from "../../components/Tabs/Tabs";

import Avatar from "../../components/Avatar/Avatar";
import { mainColor } from "../../../constants/style";

import Posts from "../../components/Posts/Posts";

import Photos from "../../components/Photos/Photos";

import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import NewPostButton from "../../components/NewPostButton/NewPostButton";

export default function Profile({ navigation, extraData }) {
  return (
    <View style={styles.container}>
      <ProfileHeader navigation={navigation} />

      <View style={styles.body}>
        <View style={{ flex: 1 }}>
          <TabViewExample scenes={[Posts, Photos]}></TabViewExample>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },

  customTabs: {
    flexDirection: "row",
  },
  tab: {
    alignItems: "center",
    alignContent: "space-between",
  },
});
