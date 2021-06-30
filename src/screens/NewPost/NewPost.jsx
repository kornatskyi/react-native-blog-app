import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { mainColor } from "../../../constants/style";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { postPost } from "../../redux/actions";

//Amplify related

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const closeNewTweetScreen = () => {
    navigation.goBack();
  };

  const userId = useSelector((state) => state.user.user.id);

  const createNewPost = (title, body, image, userId) => {
    return {
      title: title,
      text: body,
      image: image,
      userId: userId,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign
          name="close"
          size={30}
          color={mainColor}
          onPress={() => {
            closeNewTweetScreen();
          }}
        ></AntDesign>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(postPost(createNewPost(title, body, imageUrl, userId)));
            closeNewTweetScreen();
          }}
        >
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={title}
            onChangeText={(value) => setTitle(value)}
            multiline
            placeholder={"Post title"}
            style={styles.titleInput}
            numberOfLines={1}
            maxLength={50}
          ></TextInput>
          <TextInput
            value={body}
            onChangeText={(value) => setBody(value)}
            multiline
            placeholder={"Post body"}
            style={styles.bodyInput}
            numberOfLines={20}
            maxLength={500}
          ></TextInput>
          <TextInput
            placeholder={"Image url(optional)"}
            style={styles.imageInput}
            value={imageUrl}
            onChangeText={(value) => setImageUrl(value)}
          ></TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
  },
  button: {
    backgroundColor: mainColor,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 15,
  },
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    marginLeft: 10,
    height: "100%",
  },
  titleInput: {
    fontSize: 20,
    textAlignVertical: "top",
    marginBottom: 10,
  },
  bodyInput: {
    maxHeight: 300,
    fontSize: 16,
    textAlignVertical: "top",
  },
  imageInput: {
    position: "absolute",

    bottom: 0,
  },
});
