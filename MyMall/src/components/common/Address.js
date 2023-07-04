import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {removeAddress} from '../../redux/actions/actions';

let addresslist = [];

const Address = () => {
  const navigation = useNavigation();
  // const isfocussed = useIsFocused();
  addresslist = useSelector(state => state.addressreducers);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
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
            My Address
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddAddress');
            }}
            style={{
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.2,
              padding: 7,
              borderRadius: 10,
            }}>
            <Text style={{color: '#000'}}> Add Address</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={addresslist}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '100%',
                  borderWidth: 0.2,
                  alignSelf: 'center',
                  borderColor: '#8e8e8e',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View>
                  <Text style={{marginLeft: 20, color: '#000'}}>
                    {'City: ' + item.city}
                  </Text>
                  <Text style={{marginLeft: 20, color: '#000'}}>
                    {'Colony: ' + item.colony}
                  </Text>
                  <Text
                    style={{marginLeft: 20, marginBottom: 10, color: '#000'}}>
                    {'Pincode: ' + item.pins}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeAddress(index));
                  }}
                  style={{
                    borderWidth: 0.3,
                    borderColor: '#000',
                    padding: 7,
                    marginRight: 20,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#000'}}>Delete address</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({});
