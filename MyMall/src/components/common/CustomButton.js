import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,title,bgcolor,txtcolor}) => {
  return (
    <TouchableOpacity 
    style={styles.btns}
    onPress={()=>onPress()}
    >
    <Text style={{color:"#fff"}}>
       {title}
    </Text>
        
    </TouchableOpacity>
  )
}

export default CustomButton;

const styles=StyleSheet.create({
    btns:{
        backgroundColor:"#000",
        justifyContent: 'center',
        alignItems: 'center',
        width:'85%',
        height:50,
        borderRadius:10,
        alignSelf: 'center',
        marginTop:50
    }
})