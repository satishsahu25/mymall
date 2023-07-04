import {View, TextInput,Image,StyleSheet} from 'react-native';
import React from 'react';

const CustomTextInput = ({value, onChangeText, placeholder, icon, type}) => {
  return (
    <View style={styles.inputs}>
      <Image source={icon} style={{height: 24, width: 24,marginRight:5}} />
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={type?type:'default'}
        value={value}
        placeholderTextColor='#000000'
        secureTextEntry={type==='password'?true:false}
        style={styles.inputbox}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputs: {
    alignSelf: 'center',
    width: '85%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 30,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputbox:{
        color:"#000000"
  }
});
