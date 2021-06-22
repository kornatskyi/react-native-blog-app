import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';
export default function Profile({ navigation, extraData}) {
    return (
        <View style={styles.container}>
            <Text h2>Profile screen</Text>
         
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
        
    }
  });