import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Main from '../components/bottomscreens/Main';
import Search from '../components/bottomscreens/Search';
import Cart from '../components/bottomscreens/Cart';
import Wish from '../components/bottomscreens/Wish';
import Profile from '../components/bottomscreens/Profile';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const [selected, setselected] = useState(0);
  const items = useSelector(state => state);



  return (
    <View style={{flex: 1}}>
      {selected === 0 ? (
        <Main />
      ) : selected === 1 ? (
        <Search />
      ) : selected === 2 ? (
        <Cart />
      ) : selected === 3 ? (
        <Wish />
      ) : (
        <Profile />
      )}
      <View style={styles.bottoms}>
        <TouchableOpacity
          onPress={() => {
            setselected(0);
          }}
          style={styles.bottomitems}>
          <Image
            source={require('../imgs/home.png')}
            style={{height: 24, width: 24}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setselected(1);
          }}
          style={styles.bottomitems}>
          <Image
            source={require('../imgs/search.png')}
            style={{height: 24, width: 24}}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setselected(2);
            }}
            style={{
              width: 44,
              height: 44,
              backgroundColor: selected == 2 ? 'green' : '#000',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 22,
            }}>
            <Image
              source={require('../imgs/cart.png')}
              style={{height: 24, width: 24}}
            />
            <View
            style={{
              width:20,
              height:20,
              backgroundColor:'red',
              borderRadius:10,
              justifyContent:'center',
              alignItems:'center',
              position:'absolute',
              top:2,
              right:2
            }}
            >
         <Text
         style={{
          color:'#fff',
          fontWeight:'600'
         }}
         >{items.reducers.length}</Text>
            </View>

          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setselected(3);
          }}
          style={styles.bottomitems}>
          <Image
            source={require('../imgs/wishlist.png')}
            style={{height: 24, width: 24}}
          />
            <View
            style={{
              width:20,
              height:20,
              backgroundColor:'red',
              borderRadius:10,
              justifyContent:'center',
              alignItems:'center',
              position:'absolute',
              top:15,
              right:15
            }}
            >
         <Text
         style={{
          color:'#fff',
          fontWeight:'600'
         }}
         >{items.wishreducers.length}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setselected(4);
          }}
          style={styles.bottomitems}>
          <Image
            source={require('../imgs/user.png')}
            style={{
              height: 24,
              width: 24,
              tintColor: selected == 4 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bottomitems: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottoms: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
