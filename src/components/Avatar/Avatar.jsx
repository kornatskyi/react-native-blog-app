import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Image } from "react-native-elements";

export default ({source, style}) => {
console.log(style);
  return (
    <Image style={style} source={source}>

    </Image>
  )

  // return (
  //   <Avatar
  //     activeOpacity={0.2}
  //     avatarStyle={{}}
  //     containerStyle={{ backgroundColor: "#BDBDBD" }}
  //     icon={{}}
  //     iconStyle={{}}
  //     imageProps={{}}
  //     onLongPress={() => alert("onLongPress")}
  //     onPress={() => alert("onPress")}
  //     overlayContainerStyle={{}}
  //     placeholderStyle={{}}
  //     rounded
  //     size="xlarge"
  //     source={source}
  //     title="Some titile"
  //     titleStyle={{}}
  //   />
  // );
}
