import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
let name = '';
const Profile = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    name = await AsyncStorage.getItem('NAME');
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 18,
            marginLeft: 50,
            color: '#000',
          }}>
          Profile
        </Text>
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
            }}
            source={require('../../imgs/setting.png')}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={{
          width: 80,
          height: 80,
          alignSelf: 'center',
          marginTop: 30,
        }}
        source={require('../../imgs/user.png')}
      />

      <Text
        style={{
          color: '#000',
          alignSelf: 'center',
          marginTop: 20,
          fontSize: 18,
        }}>
        {name}
      </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Address');
        }}
        style={{
          height: 50,
          width: '90%',
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
          marginLeft: 10,
        }}>
        <Text style={{color: '#000'}}>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MyOrders');
        }}
        style={{
          height: 50,
          width: '90%',
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
          marginLeft: 10,
        }}>
        <Text style={{color: '#000'}}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: '90%',
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
          marginLeft: 10,
        }}>
        <Text style={{color: '#000'}}>Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
