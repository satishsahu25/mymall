import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../common/CartItem';
import {removeItemfromCart} from '../../redux/actions/actions';
import {addItemtoWishlist} from '../../redux/actions/actions';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const cartdata = useSelector(state => state.reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      {cartdata.length > 0 ? (
        <FlatList
          data={cartdata}
          renderItem={({item, index}) => {
            return (
              <CartItem
                item={item}
                addToWishlist={x => {
                  dispatch(addItemtoWishlist(x));
                }}
                removefromcart={x => {
                  dispatch(removeItemfromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>No items found</Text>
        </View>
      )}
      {cartdata.length > 0 ? (
        <View
          style={{
            marginBottom: 80,
          }}>
          <CustomButton
            bgcolor={'green'}
            txtcolor={'#fff'}
            title={'Checkout'}
            onPress={() => {
              navigation.navigate('Checkout');
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
