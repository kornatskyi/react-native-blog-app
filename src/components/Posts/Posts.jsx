import React, { useState, useEffect } from "react";
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
import { API, graphqlOperation } from "aws-amplify";

import { mainColor } from "../../../constants/style";
import NewPostButton from "../NewPostButton/NewPostButton";

import PostModal from "../PostModal/PostModal";
import { listPosts } from "../../graphql/queries";

export default function Posts(props) {
  const [posts, setPosts] = useState(null);

  //Fetch post from GraphQL
  async function fetchPosts() {
    try {
      const posts = await API.graphql(graphqlOperation(listPosts));
      return posts;
    } catch (err) {
      console.warn("Error when fetching posts");
    }
  }
  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data.data.listPosts.items);
    });
  }, []);

  if (!posts) {
    return (
      <View>
        <Text>Posts are loading</Text>
      </View>
    );
  } else {
    return (
      <View>
        <ScrollView style={styles.postsContainer}>
          {posts.map((post, i) => {
            return (
              <Post
                key={i}
                image={post.image}
                title={post.title}
                text={post.text}
              />
            );
          })}
        </ScrollView>
        <NewPostButton />
      </View>
    );
  }
}

const Post = ({ image, color, title, text }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ ...styles.postContainer }}>
      <View style={styles.postHeader}>
        <Text h4 style={styles.postHeaderTitle}>
          {title}
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
        {text}
      </Text>

      {/***Image***/}
      {!image ? null : (
        <View>
          <FitImage
            source={{ uri: image }}
            originalWidth={400}
            originalHeight={200}
          />
        </View>
      )}

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
