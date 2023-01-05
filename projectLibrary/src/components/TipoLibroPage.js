import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const TipoLibroPage = () => {
  const [listaTipoLibro, setListaTipoLibro] = useState([
    {
      id_tipo_libro: 1,
      nombre_tipo_libro: 'Cuento',
      descripcion: 'Es una historia corta con pocos personajes',
    },
    {
      id_tipo_libro: 2,
      nombre_tipo_libro: 'Terror',
      descripcion: 'Es una historia de mucho miedo',
    },
    {
      id_tipo_libro: 3,
      nombre_tipo_libro: 'Suspenso',
      descripcion: 'Nos tiene con el corazon en la mano',
    },
    {
      id_tipo_libro: 4,
      nombre_tipo_libro: 'Ficcion',
      descripcion: 'Es irreal',
    },
  ]);

  return (
    <View>
      <Text style={styles.styleTitle}>Tipo libro</Text>
      <FlatList
        data={listaTipoLibro}
        keyExtractor={item => item.id_tipo_libro}
        renderItem={tipolibro => (
          <View>
            <Text>{tipolibro.item.nombre_tipo_libro}</Text>
            <Text>{tipolibro.item.descripcion}</Text>
          </View>
        )}
      />
    </View>
  );
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

export default TipoLibroPage;
