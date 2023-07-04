import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.txt}>MyMall</Text>
      <TouchableOpacity>
        <Text>Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    backgroundColor: '#fff',
  },
  txt: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    marginLeft: 20,
  },
});
