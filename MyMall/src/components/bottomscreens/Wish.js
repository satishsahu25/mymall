import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../common/CartItem';
import {
  addItemtoCart,
  removeItemfromWishlist,
} from '../../redux/actions/actions';

const Wish = () => {
  const wishdata = useSelector(state => state.wishreducers);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={wishdata}
        renderItem={({item, index}) => {
          return (
            <CartItem
              item={item}
              iswishlist={'dsfsd'}
              removefromwishlist={() => {
                dispatch(removeItemfromWishlist(index));
              }}
              addtocart={x => {
                dispatch(addItemtoCart(x));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Wish;
