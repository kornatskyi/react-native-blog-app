import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Home({ navigation, extraData}) {
    return (
        <View>
            <Text>Home screen and {extraData}</Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      />
        </View>
    )
}
