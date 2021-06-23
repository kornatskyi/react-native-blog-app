import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import FitImage from "react-native-fit-image";

const sources = [
  require("../../../assets/images/pexels-bianca-723679.jpg"),
  require("../../../assets/images/pexels-emre-keshavarz-7232212.jpg"),
  require("../../../assets/images/pexels-isabela-catão-7043291.jpg"),
  require("../../../assets/images/pexels-lisa-3974405.jpg"),
  require("../../../assets/images/pexels-pineapple-supply-co-174668.jpg"),
  require("../../../assets/images/pexels-pixabay-531604.jpg"),
  require('../../../assets/images/pexels-riccardoptz-6815271.jpg'),
  require('../../../assets/images/pexels-sasha-maslova-8447760.jpg'),
  require('../../../assets/images/pexels-splitshire-1683.jpg'),
  require('../../../assets/images/pro.jpg'),
];

export default function Photos() {
  return (
    <ScrollView contentContainerStyle={styles.photoContainer}>
      {sources.map((source, i) => {
          return (
              <Photo key={i} source={source} />
          )
      })}
    </ScrollView>
  );
}

const Photo = (props) => {
  const { source } = props;
  return <Image style={styles.photo}  source={source}></Image>;
};

const styles = StyleSheet.create({
    photoContainer:{
        flexDirection:'row',
        width: '100%',
        flexWrap:'wrap',
        padding:1
    },
    photo: {
        width:'32.82%',
        margin:1,
        height:150,
    }
});


