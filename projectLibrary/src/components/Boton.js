import React from 'react';

import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const Boton = ({title, onPress, backgroundColor, marginBottom=0}) => {
  return (
    <TouchableHighlight
      style={[styles.styleButton, {backgroundColor: backgroundColor, marginBottom:marginBottom}]}
      onPress={onPress}>
      <Text style={{color: 'white'}}>{title}</Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  styleButton: {
    //backgroundColor: '#0C96FF',
    width: '25%',
    padding: 10,
    //marginBottom: 10,
    alignItems: 'center',
    justifyContent:"center"
  },
});

export default Boton;
