import React, { useRef, useEffect, useState } from "react";
import {
  Animated,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TabViewExample from "../../components/Tabs/Tabs";

const FadeInView = (props) => {
  const [viewPosition, setViewPosition] = useState(30.18181800842285);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const boxInterpolation = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const animatedStyle = {
    backgroundColor: boxInterpolation,
  };

  function animate() {

    Animated.timing(fadeAnim, {
      // JSON.stringify(fadeAnim) === "0" ? 1 : 0
      toValue: viewPosition > 100? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Animated.View
      useNativeDriver={true} // Special animatable View
      style={{
        ...props.style,
        transform: [{ rotateY: boxInterpolation }], // Bind opacity to animated value
      }}
    >
      <ScrollView
        onScroll={(event) => {
         
            animate();
          
          setViewPosition(event.nativeEvent.contentOffset.y)
        }}
        style={{...styles.postsContainer, top:viewPosition}}
      >
        <Pressable
          style={styles.button}
          onPress={() => {
            animate();
          }}
        >
          <Text>Press me</Text>
        </Pressable>
        <View
          style={{
            width: 0,
            height: 1000,
            flex: 1,
            backgroundColor: "blue",
          }}
        ></View>
        
      </ScrollView>

      {props.children}
    </Animated.View>
  );
};

export default function Home({ navigation, extraData }) {
  return (
    <View style={{ flex: 1 }}>
      <FadeInView
        style={{ width: "100%", backgroundColor: "blue" }}
      ></FadeInView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    
    borderWidth: 3,
    width: 80,
    alignSelf: "center",
    backgroundColor: "red",
  },
});
