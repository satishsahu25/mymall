import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getdata();
    }, 3000);
  });

  const getdata = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    if (email === '' || email === null || email === undefined) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../imgs/logo.png')}
        style={{height: 100, width: 100}}
      />
    </View>
  );
};

export default Splash;
