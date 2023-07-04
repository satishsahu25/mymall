import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CartItem = ({item, removefromcart,addtocart, addToWishlist,removefromwishlist,iswishlist}) => {
  return (
    <TouchableOpacity
      style={{
        width: '94%',
        height: 230,
        borderRadius: 20,
        elevation: 5,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginBottom: 10,
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: 140,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          color: '#000',
          fontSize: 18,
          fontWeight: '600',
        }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
          {'₹' + item.price}
        </Text>

   {iswishlist?(
    <TouchableOpacity
          onPress={() => {
            addtocart(item);
          }}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 7,
          }}>
          <Text style={{color: '#000'}}>Add to cart</Text>
        </TouchableOpacity>
   ):(
    <TouchableOpacity
          onPress={() => {
            removefromcart();
          }}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 7,
          }}>
          <Text style={{color: '#000'}}>Remove</Text>
        </TouchableOpacity>
   )}
      </View>

      {iswishlist?(<TouchableOpacity
        onPress={() => {
          removefromwishlist();
        }}
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#fff',
          borderRadius: 20,
          elevation: 5,
          position: 'absolute',
          top: 10,
          right: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../imgs/like.png')}
          style={{width: 24, height: 24,tintColor:'red'}}
        />
      </TouchableOpacity>):(
        <TouchableOpacity
        onPress={() => {
          addToWishlist(item);
        }}
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#fff',
          borderRadius: 20,
          elevation: 5,
          position: 'absolute',
          top: 10,
          right: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../imgs/wishlist.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
