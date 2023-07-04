import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const OrderSuccess = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={
          route.params.status == 'success'
            ? require('../imgs/success.png')
            : require('../imgs/fail.png')
        }
        style={{
          height: 50,
          width: 50,
        }}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
        }}>
        {route.params.status == 'success'
          ? 'Order placed successfully !'
          : 'Some error occured'}
      </Text>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.5,
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text
          style={{
            color: '#000',
          }}>
          Go to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSuccess;
