import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../components/common/CustomTextInput';
import CustomButton from '../components/common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [mobile, setmobile] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [bademail, setbademail] = useState(false);
  const [badname, setbadname] = useState(false);
  const [badmobile, setbadmobile] = useState(false);
  const [badpassword, setbadpassword] = useState(false);
  const [badconfirmpassword, setbadconfirmpassword] = useState(false);

  const validate = () => {
    if (email == undefined) setbademail(true);
    else setbademail(false);
    if (name == undefined) setbadname(true);
    else setbadname(false);
    if (mobile == undefined || (mobile != undefined && mobile.length < 10))
      setbadmobile(true);
    else setbadmobile(false);
    if (password == undefined) setbadpassword(true);
    else setbadpassword(false);
    if (confirmpassword == undefined || password !== confirmpassword)
      setbadconfirmpassword(true);
    else setbadconfirmpassword(false);
    saveData();
  };

  const saveData = async () => {
    if (email && password && password === confirmpassword && mobile && name) {
      await AsyncStorage.setItem('NAME', name);
      await AsyncStorage.setItem('MOBILE', mobile);
      await AsyncStorage.setItem('PASSWORD', password);
      await AsyncStorage.setItem('EMAIL', email);

      navigation.goBack();
    } else {
      console.log('No user found');
    }
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Image
          source={require('../imgs/logo.png')}
          style={{height: 50, width: 50, alignSelf: 'center', marginTop: 100}}
        />
        <Text style={styles.logintxt}>Create new account</Text>
        <CustomTextInput
          placeholder="Enter name"
          icon={require('../imgs/user.png')}
          value={name}
          onChangeText={txt => {
            setname(txt);
          }}
        />
        {badname === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please enter your name
          </Text>
        )}
        <CustomTextInput
          placeholder="Enter email id"
          icon={require('../imgs/mail.png')}
          value={email}
          onChangeText={txt => {
            setemail(txt);
          }}
        />
        {bademail === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please enter email id
          </Text>
        )}
        <CustomTextInput
          placeholder="Enter Mobile"
          icon={require('../imgs/mobile.png')}
          value={mobile}
          type={'number-pad'}
          onChangeText={txt => {
            setmobile(txt);
          }}
        />
        {badmobile === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please enter mobile number
          </Text>
        )}
        <CustomTextInput
          type={'password'}
          placeholder="Enter password"
          icon={require('../imgs/pass.png')}
          value={password}
          onChangeText={txt => {
            setpassword(txt);
          }}
        />
        {badpassword === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please enter your password
          </Text>
        )}
        <CustomTextInput
          type={'password'}
          placeholder="Enter confirm password"
          icon={require('../imgs/pass.png')}
          value={confirmpassword}
          onChangeText={txt => {
            setconfirmpassword(txt);
          }}
        />
        {badconfirmpassword === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please confirm your password
          </Text>
        )}
        <CustomButton
          title={'Signup'}
          bgcolor={'#000000'}
          txtcolor={'#fff'}
          onPress={() => {
            validate();
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '800',
            color: '#000000',
            textDecorationLine: 'underline',
            marginBottom: 50,
            alignSelf: 'center',
            marginTop: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          Already have an account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  inputs: {
    alignSelf: 'center',
    width: '85%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 20,
    paddingLeft: 15,
  },
  logintxt: {
    marginTop: 50,
    alignSelf: 'center',
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
  },
});
