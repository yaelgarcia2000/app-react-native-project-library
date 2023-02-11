import React from 'react';

import {Text, StyleSheet} from 'react-native';

const Titulo = ({title, flex=0}) => {
  return <Text style={[styles.styleTitle,{flex:flex}]}>{title}</Text>;
};
const styles = StyleSheet.create({
  styleTitle: {
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#343a40',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 5,
    //marginTop:20,
    //paddingTop: 20,
    //paddingBottom: 20,
  },
});

export default Titulo;
