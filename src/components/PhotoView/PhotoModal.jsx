import React from "react";
import { View, Text, Modal,  } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";


export default function PhotoModal(props) {
  const { isPhotoModal, setIsPhotoModal, source } = props;
  const images = [
    {
      url: "",
      props: {
        // Or you can set source directory.
        source: source,
      },
    },
  ];


  return (
    <Modal visible={isPhotoModal} transparent={true} onRequestClose={()=>setIsPhotoModal(false)}>

      <ImageViewer
        renderIndicator={() => null}
        enableSwipeDown={true}
        onSwipeDown={() => {
          setIsPhotoModal(!isPhotoModal);
        }}
        imageUrls={images}
        saveToLocalByLongPress={false}
        backgroundColor='rgba(0, 0, 0, 0.9)'
      />
    </Modal>
  );
}
