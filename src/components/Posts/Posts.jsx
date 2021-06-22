import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";
import { Image } from "react-native-elements";
import FitImage from "react-native-fit-image";

export default function Posts(props) {
  return (
    <View>
      <ScrollView style={styles.postsContainer}>
        <Post
          color="red"
          image={require("../../../assets/images/post-image.jpg")}
        />
        <Post
          color="blue"
          image={require("../../../assets/images/post-image.jpg")}
        />
      </ScrollView>
    </View>
  );
}

const Post = ({ image, color }) => {
  return (
    <View style={{ ...styles.postContainer, backgroundColor: color }}>
      <View style={styles.postHeader}>
        <Text>Header</Text>
      </View>

      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolor
        culpa inventore ratione numquam quam eius tempore, impedit labore
        dolorum magni at error quos doloremque porro earum nostrum repudiandae
        minima?
      </Text>
      <View>
        <FitImage source={image} originalWidth={400} originalHeight={200} />
      </View>

      <Text>Date</Text>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    height: "100%",
    backgroundColor: "green",
  },
  postContainer: {
    borderColor: "red",
    flex: 1,
    borderWidth: 2,
    height: "100%",

    margin: 5,
  },
  postHeader: {
    backgroundColor: "blue",
  },
});
