import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {Products} from '../../data/Products';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ItemCard from '../common/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {addItemtoCart, addItemtoWishlist} from '../../redux/actions/actions';

const Main = () => {
  const [categorylist, setcategorylist] = useState([]);
  const [tshirtlist, settshirtlist] = useState([]);
  const [trouserslist, settrouserslist] = useState([]);

  useEffect(() => {
    let templist = [];

    Products.category.map(item => {
      templist.push(item);
    });
    setcategorylist(templist);

    settshirtlist(Products.category[0].data);
    settrouserslist(Products.category[1].data);
  }, []);

  const dispatch = useDispatch();
  const items = useSelector(state => state);

  return (
    <ScrollView style={{flex: 1, marginBottom: 70}}>
      <View style={{flex: 1}}>
        <Header />
        <Image
          source={require('../../imgs/logo.png')}
          style={{
            height: 200,
            width: '94%',
            borderRadius: 10,
            marginTop: 10,
            alignSelf: 'center',
          }}
        />
        <View style={{marginTop: 20}}>
          <FlatList
            data={categorylist}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginLeft: 20,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#000'}}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* Tshirts */}
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 16,
            color: '#000',
            fontWeight: '600',
          }}>
          New T-Shirts
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={tshirtlist}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => {
              return (
                <ItemCard
                  item={item}
                  addToWishlist={x => {
                    dispatch(addItemtoWishlist(item));
                  }}
                  addToCart={x => {
                    dispatch(addItemtoCart(item));
                  }}
                />
              );
            }}
          />
        </View>

        {/* Trousers */}

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 16,
            color: '#000',
            fontWeight: '600',
          }}>
          New Trousers
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={trouserslist}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => {
              return (
                <ItemCard
                  item={item}
                  addToWishlist={x => {
                    dispatch(addItemtoWishlist(item));
                  }}
                  addToCart={x => {
                    dispatch(addItemtoCart(item));
                  }}
                />
              );
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 16,
            color: '#000',
            fontWeight: '600',
          }}>
          New T-Shirts
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={tshirtlist}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => {
              return (
                <ItemCard
                  item={item}
                  addToWishlist={x => {
                    dispatch(addItemtoWishlist(item));
                  }}
                  addToCart={x => {
                    dispatch(addItemtoCart(item));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
