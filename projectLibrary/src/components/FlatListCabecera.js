import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const FlatListCabecera = ({cabeceras, anchos=[30,50]}) => {
  return (
    <View style={styles.styleFlatList}>
      <Text style={{width: anchos[0]+'%', fontWeight: 'bold'}}>{cabeceras[0]}</Text>
      <Text style={{width: anchos[1]+'%', fontWeight: 'bold'}}>{cabeceras[1]}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  styleFlatList: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderColor: '#343a40',
    borderStyle: 'solid',
    borderBottomWidth: 0.4,
    marginVertical: 10,
  },
});

export default FlatListCabecera;
