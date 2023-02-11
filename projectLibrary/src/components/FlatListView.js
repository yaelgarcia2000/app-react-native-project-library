import React from 'react';
import {FlatList, View, Image, Pressable, StyleSheet, Text} from 'react-native';

const FlatListView = ({
  data,
  propiedadId,
  propiedadColumn1,
  propiedadColumn2,
  onPressRecuperar,
  onPressEliminar,
  anchos=[30,50,20]
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item[propiedadId]}
      renderItem={({item}) => (
        <View style={styles.styleFlatList}>
          <Text style={{width: anchos[0]+'%'}}>{item[propiedadColumn1]}</Text>
          <Text style={{width: anchos[1]+'%'}}>{item[propiedadColumn2]}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: anchos[2]+'%',
            }}>
            <Pressable onPress={() => onPressEliminar(item)}>
              <Image source={require('../icons/trash.png')} />
            </Pressable>
            <Pressable onPress={() => onPressRecuperar(item)}>
              <Image
                resizeMode="contain"
                source={require('../icons/edit.png')}
              />
            </Pressable>
          </View>
        </View>
      )}
    />
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
export default FlatListView;