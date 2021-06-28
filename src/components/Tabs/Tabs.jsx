import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text } from "react-native-elements";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const initialLayout = { width: Dimensions.get("window").width };

import { mainColor } from "../../../constants/style";

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: mainColor }}
    style={styles.tab}
    renderLabel={({ route, focused, color }) => (
        <Text  style={{ color: mainColor }}>
          {route.title}
        </Text>
      )}
  >

  </TabBar>
);

export default function TabViewExample({ scenes }) {
  const renderScene = SceneMap({
    first: scenes[0],
    second: scenes[1],
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Posts" },
    { key: "second", title: "Photos" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  scene: {
    flex: 1,
  },
  tab: {
    backgroundColor: "white",
    color: "green",
  },
});
