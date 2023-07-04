import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomTextInput from '../components/common/CustomTextInput';
import CustomButton from '../components/common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/common/Loader';


const Login = ({navigation}) => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [bademail,setbademail]=useState(false);
  const [badpassword,setbadpassword]=useState(false);
  const [wrong,setwrong]=useState(false);
  const [modalVisible,setModalVisible]=useState(false);


  const validate=()=>{
    if(email==''){setbademail(true);setModalVisible(false);}
    else setbademail(false);
    if(password==''){setbadpassword(true);setModalVisible(false);}
        else setbadpassword(false);
    getData();
  };

  const getData=async()=>{
    const aEmail=await AsyncStorage.getItem('EMAIL');
    const aPassword=await AsyncStorage.getItem('PASSWORD');
    if(email===aEmail&&password===aPassword){
     
      setModalVisible(false);
      navigation.navigate('Home');
    }else{
        setwrong(true);
    }
  }



  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../imgs/logo.png')}
        style={{height: 50, width: 50, alignSelf: 'center', marginTop: 100}}
      />
      <Text style={styles.logintxt}>Login</Text>
      <CustomTextInput
        placeholder='Enter email id'
        icon={require('../imgs/mail.png')}
        value={email}
        onChangeText={(txt)=>{
          setemail(txt);
        }}
      />
      {bademail===true&&(
        <Text style={{marginTop:10,marginLeft:30, color:"red"}}>Please enter email id</Text>
      )}
      <CustomTextInput
        type={"password"}
        placeholder='Enter password'
        icon={require('../imgs/pass.png')}
        value={password}
        onChangeText={(txt)=>{
          setpassword(txt);
        }}
      />
      {badpassword===true&&(
        <Text style={{marginTop:10,marginLeft:30, color:"red"}}>Please enter password</Text>
      )}
      {wrong===true&&(
        <Text style={{marginTop:10,marginLeft:30, color:"red"}}>Wrong credentials</Text>
      )}
      <CustomButton
        title={'Login'}
        bgcolor={'#000000'}
        txtcolor={'#fff'}
        onPress={()=>{validate()}}
      />
     <Text style={{fontSize:18,fontWeight:'800',color:"#000000",
     textDecorationLine:'underline',
     alignSelf:"center",marginTop:20}}
     onPress={()=>{
      navigation.navigate('Signup')
     }}
     >Create new account</Text>
     <Loader
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputs: {
    alignSelf:'center',
    width:'85%',
    height:50,
    borderRadius:10,
    borderWidth:0.5,
    marginTop:20,
    paddingLeft:15,
  },
  logintxt: {
    marginTop: 50,
    alignSelf: 'center',
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
  },
});
