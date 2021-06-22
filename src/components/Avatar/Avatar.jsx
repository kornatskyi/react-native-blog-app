import * as React from "react";
import { Avatar } from "react-native-elements";

export default ({source}) => {

  return (
    <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{ backgroundColor: "#BDBDBD" }}
      icon={{}}
      iconStyle={{}}
      imageProps={{}}
      onLongPress={() => alert("onLongPress")}
      onPress={() => alert("onPress")}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="xlarge"
      source={source}
      title="Some titile"
      titleStyle={{}}
    />
  );
}