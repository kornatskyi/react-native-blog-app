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
import moment from "moment";

//Custom componens
import NewPostButton from "../NewPostButton/NewPostButton";
import PostModal from "../PostModal/PostModal";
//Styles
import { mainColor } from "../../../constants/style";
// //Amplify related
// import { listPosts } from "../../graphql/queries";
// import { API, graphqlOperation } from "aws-amplify";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/actions";

export default function Posts() {
  // const [posts, setPosts] = useState(null);

  const posts = useSelector((state) => {
    return state.posts.posts;
  });

  const userId = useSelector((state) => state.user.user.id);

  const dispatch = useDispatch();

  //Fetch post from GraphQL

  useEffect(() => {
    //check if userId is defined
    if (userId) {
      dispatch(fetchPosts(userId));
    }
  }, [userId]);

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
            return <Post key={i} postData={post} />;
          })}
        </ScrollView>
        <NewPostButton />
      </View>
    );
  }
}

const Post = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { image, title, text, id, createdAt } = props.postData;

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
        postId={id}
        postData={props.postData}
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

      <Text style={styles.postDate}>{moment(createdAt).fromNow()}</Text>
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
