import {View, Text,Image, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const MyOrders = () => {
  const orders = useSelector(state => state.orderreducers);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={orders}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '100%',
                  height: '100%',
                }}>
                {item.items.map(it => {
                  return (
                  <View
                    style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems:'center',
                    borderWidth:0.5,
                    borderColor:'#8e8e8e'
                  }}
                  >
                  <Image
                      source={it.image}
                      style={{
                        height: 50,
                        width: 50,
                        marginTop:10,
                        marginLeft:20,
                        marginBottom:10
                      }}
                    />
                    <Text style={{marginLeft:20,fontSize:18,color:'#000'}}>{it.name}</Text>
                    <Text style={{marginLeft:20,color:'#000'}}>{'Total: '+'4512'}</Text>
                  </View>
                  );
                })}
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyOrders;
