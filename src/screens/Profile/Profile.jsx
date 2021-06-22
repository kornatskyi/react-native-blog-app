import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';

import Avatar from '../../components/Avatar/Avatar';
import { mainColor } from '../../../style';



export default function Profile({ navigation, extraData}) {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>           
                    <Text style={styles.titleChild}>Settings</Text>
                    <Text  style={styles.titleChild} h3 >Profile</Text>
                    <Text style={styles.titleChild}>Logout</Text>
                </View>

                <View style={styles.avatarContainer}>
                    <Avatar source={require('../../../assets/images/avatar.png')}/>
                    </View>
                

            </View>
         
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        flex:0.26,
        backgroundColor:mainColor
    },
    title: {
        
        flexDirection:'row',
        alignItems:"center",
        alignContent:'space-between',
        top:20,
    },
    titleChild: {
        flex:1,
        textAlign:'center',
        color:'#fff',
        fontSize:18

    },
    avatarContainer: {
        top:50,
        alignItems:'center'
    }
  });