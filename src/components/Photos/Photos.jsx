import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import FitImage from "react-native-fit-image";
import PhotoModal from "../PhotoView/PhotoModal";

import AddPhotoButton from "../AddPhotoButton/AddPhotoButton";

const sources = [
  require("../../../assets/images/pexels-bianca-723679.jpg"),
  require("../../../assets/images/pexels-emre-keshavarz-7232212.jpg"),
  require("../../../assets/images/pexels-isabela-catão-7043291.jpg"),
  require("../../../assets/images/pexels-lisa-3974405.jpg"),
  require("../../../assets/images/pexels-pineapple-supply-co-174668.jpg"),
  require("../../../assets/images/pexels-pixabay-531604.jpg"),
  require("../../../assets/images/pexels-riccardoptz-6815271.jpg"),
  require("../../../assets/images/pexels-sasha-maslova-8447760.jpg"),
  require("../../../assets/images/pexels-splitshire-1683.jpg"),
  require("../../../assets/images/pro.jpg"),
];

export default function Photos() {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.photosContainer}>
        {sources.map((source, i) => {
          return <Photo key={i} source={source} />;
        })}
      </ScrollView>
      <AddPhotoButton />
    </View>
  );
}

const Photo = (props) => {
  const [isPhotoModal, setIsPhotoModal] = useState(false);
  const { source } = props;
  return (
    <View style={styles.photoContainer}>
      <TouchableOpacity
        onPress={() => {
          setIsPhotoModal(!isPhotoModal);
        }}
      >
        <Image style={styles.photo} source={source}></Image>
      </TouchableOpacity>

      <PhotoModal
        source={source}
        isPhotoModal={isPhotoModal}
        setIsPhotoModal={setIsPhotoModal}
      ></PhotoModal>
    </View>
  );
};

const styles = StyleSheet.create({
  photosContainer: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    padding: 1,
  },
  photoContainer: {
    width: "32.8213%",
    margin: 1,
    height: 150,
  },
  photo: {
    width: "100%",
    height: 150,
  },
});
