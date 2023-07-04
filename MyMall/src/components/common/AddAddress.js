import {View, TouchableOpacity, Image, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from './CustomTextInput';
import CustomButton from './CustomButton';
import {useDispatch} from 'react-redux';
import {addAddress} from '../../redux/actions/actions';

const AddAddress = () => {
  const navigation = useNavigation();

  const [city, setcity] = useState('');
  const [pins, setpins] = useState('');
  const [colony, setcolony] = useState('');

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              marginLeft: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.2,
              padding: 7,
              borderRadius: 10,
            }}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={require('../../imgs/backbtn.png')}
            />
          </TouchableOpacity>
        </View>
        <CustomTextInput
          placeholder="Enter City name"
          icon={require('../../imgs/city.png')}
          value={city}
          onChangeText={txt => {
            setcity(txt);
          }}
        />
        <CustomTextInput
          placeholder="Enter Colony name"
          icon={require('../../imgs/building.png')}
          value={colony}
          onChangeText={txt => {
            setcolony(txt);
          }}
        />
        <CustomTextInput
          placeholder="Enter pin code"
          icon={require('../../imgs/pincode.png')}
          value={pins}
          type={'number-pad'}
          onChangeText={txt => {
            setpins(txt);
          }}
        />

        <CustomButton
          title={'Save Address'}
          onPress={() => {
            if (city !== '' && colony !== '' && pins !== '') {
              dispatch(addAddress({city, colony, pins}));

              navigation.goBack();
            }
          }}
          txtcolor={'#fff'}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddAddress;
