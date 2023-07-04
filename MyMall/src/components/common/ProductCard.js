import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ItemCard = ({item,addToCart,addToWishlist}) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        height: 220,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginBottom: 10,
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: '60%',
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
        <Text style={{fontSize: 18, fontWeight: '600',color:"#000"}}>
          {'₹' + item.price}
        </Text>
        <TouchableOpacity
        onPress={()=>{addToCart(item)}}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 7,
          }}>
          <Text style={{color: '#000'}}>Add to cart</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
      onPress={()=>{addToWishlist(item)}}
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
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
