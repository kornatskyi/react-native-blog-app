import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { mainColor } from "../../../constants/style";
import { AntDesign } from "@expo/vector-icons";

export default function AddPhotoButton() {
  const navigation = useNavigation();

  const onPress = () => {
    console.log("add imag");
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <AntDesign name="plus" size={30} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: mainColor,
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
