import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { Button, Text } from "react-native-elements";
import FitImage from "react-native-fit-image";

import Icon from "react-native-vector-icons/FontAwesome";
import { mainColor } from "../../../style";

import PostModal from "../PostModal/PostModal";

export default function Posts(props) {
  return (
    <View>
      <ScrollView style={styles.postsContainer}>
        <Post image={require("../../../assets/images/post-image.jpg")} />
        <Post image={require("../../../assets/images/post-image.jpg")} />
      </ScrollView>
    </View>
  );
}

const Post = ({ image, color }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ ...styles.postContainer }}>
      <View style={styles.postHeader}>
        <Text h4 style={styles.postHeaderTitle}>
          Header Title
        </Text>
        <Button
        
          buttonStyle={styles.postHeaderButton}
          type="clear"
          icon={<Icon name="ellipsis-v" size={25} color="grey" />}
          onPress={() => setModalVisible(true)}
        ></Button>
      </View>

      <PostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />


      <Text numberOfLines={7} style={styles.postBody}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolor
        culpa inventore ratione numquam quam eius tempore, impedit labore
        dolorum magni at error quos doloremque porro earum nostrum repudiandae
        minima? minima? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Quia dolor culpa inventore ratione numquam quam eius tempore,
        impedit labore dolorum magni at error quos doloremque porro earum
        nostrum repudiandae minima? minima? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Quia dolor culpa inventore ratione numquam
        quam eius tempore, impedit labore dolorum magni at error quos doloremque
        porro earum nostrum repudiandae minima? minima?
      </Text>

      {/***Image***/}
      <View>
        <FitImage source={image} originalWidth={400} originalHeight={200} />
      </View>

      <Text style={styles.postDate}>Post created 8 month ago</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  postsContainer: {
    height: "100%",
    backgroundColor: mainColor,
  },
  postContainer: {
    flex: 1,
    height: "100%",
    borderRadius: 8,
    margin: 8,
    padding: 5,
    backgroundColor: "#fff",
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postHeaderTitle: {
    width: "60%",
  },
  postHeaderButton: {
    width: 45,
    height: 45,
  },
  postBody: {
    marginBottom: 5,
  },
  postDate: {
    color: "#BDBDBD",
    fontSize: 13,
    alignSelf: "flex-end",
    marginTop: 3,
    marginRight: 3,
  },
});
