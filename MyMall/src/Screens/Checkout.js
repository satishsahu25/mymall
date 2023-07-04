import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/common/CustomButton';
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from '@react-navigation/native';
import { addOrder } from '../redux/actions/actions';
const Checkout = () => {
  const cartdata = useSelector(state => state.reducers);
  const addresslist = useSelector(state => state.addressreducers);
  const gettotal = () => {
    let Total = 0;
    cartdata.map(item => {
      Total += item.price;
    });
    return Total;
  };

  const navigation=useNavigation();
  const dispatch=useDispatch();
  const [selectedaddress, setselectedaddress] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
        }}>
        <View>
          <FlatList
            data={cartdata}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 70,
                      height: 70,
                      marginLeft: 10,
                    }}
                  />
                  <View
                    style={{
                      padding: 10,
                    }}>
                    <Text style={{fontSize: 18, color: '#000'}}>
                      {item.name}
                    </Text>
                    <Text style={{color: '#000'}}>{'₹ ' + item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 30,
            borderTopWidth: 0.5,
            height: 50,
            borderTopColor: '#8e8e8e',
          }}>
          <Text style={{color: '#000'}}>Total: </Text>
          <Text style={{color: '#000'}}>{'₹ ' + gettotal()} </Text>
        </View>
        <View>
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
                      setselectedaddress(
                        'City: ' +
                          item.city +
                          ' Colony: ' +
                          item.colony +
                          ' Pincode: ' +
                          item.pins,
                      );
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
                    <Text style={{color: '#000'}}>Select address</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <Text style={{margin: 20, fontSize: 18, color: '#000'}}>
          Selected Address
        </Text>
        <Text style={{marginLeft: 20, fontSize: 16, color: '#000'}}>
          {selectedaddress == ''
            ? 'Please select address from above list'
            : selectedaddress}
        </Text>
        <CustomButton
        txtcolor={'#fff'}
        title={'Place order'}
        onPress={()=>{
             var options = {
                description: 'Credits towards consultation',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png',
                currency: 'INR',
                key: 'rzp_test_tiKaN4e7NdZ5sH', 
                amount: ''+parseInt(gettotal()*100)+'',
                name: 'foo',
                prefill: {
                  email: 'satish@razorpay.com',
                  contact: '9191919191',
                  name: 'Razorpay Software',
                },
                theme: {color: '#F37254'},
              };
              RazorpayCheckout.open(options)
                .then(data => {
                  // handle success
                  dispatch(addOrder({
                    items:cartdata,
                    total:gettotal(),
                    address:selectedaddress
                  }))
                  navigation.navigate('OrderSuccess',{
                    status:'success'
                  });
                })
                .catch(error => {
                  // handle failure
                  navigation.navigate('OrderSuccess',{
                    status:'failed'
                  });
                });
        }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
