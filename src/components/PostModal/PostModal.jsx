import React, { Component } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Text } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";

export default function PostModal({ modalVisible, setModalVisible }) {
  return (
    <View style={{ position: "absolute" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalPressable
              icon="trash"
              title="Delete post"
              func={() => {
                console.log("Here should be a function for post deletion");
              }}
            />
            <ModalPressable
              icon="edit"
              title="Edit post"
              func={() => {
                console.log("Here should be a function for post editing");
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const ModalPressable = (props) => {
  const { icon, title, func } = props;
  return (
    <Pressable style={styles.modalPressable} onPress={func}>
      {icon ? (
        <Icon style={styles.modalIcon} name={icon} size={25} color="grey" />
      ) : null}
      <Text style={styles.modalText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 0,
  },
  modalView: {
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    height: 150,
    shadowColor: "#000",
    flexDirection: "column-reverse",
    paddingBottom: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "#ff5c5c",
    fontSize: 20,
  },
  modalPressable: {
    flexDirection: "row",
    width: "100%",
    marginLeft: 20,
  },
  modalIcon: {
    color: "#ff5c5c",
    width: 40,
    height: 40,
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
