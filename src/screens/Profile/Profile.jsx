import React from "react";
import { View, StyleSheet } from "react-native";


import TabViewExample from "../../components/Tabs/Tabs";

import Posts from "../../components/Posts/Posts";

import Photos from "../../components/Photos/Photos";

import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

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
