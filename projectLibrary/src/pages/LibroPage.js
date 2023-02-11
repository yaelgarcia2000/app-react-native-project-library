import React, {useState} from 'react';

import {View} from 'react-native';
import {Text} from 'native-base';
import Titulo from '../components/Titulo';
import SelectPicker from '../components/SelectPicker';

const LibroPage = () => {
  const [idAutor, setIdAutor] = useState('0');
  const [listaAutor, setListaAutor] = useState([
    {
      id_Autor: 1,
      nombre_Completo: 'Jose Luis Borges',
      nombre_Pais: 'Argentina',
    },
    {
      id_Autor: 2,
      nombre_Completo: 'Gabriel Garcia Marquez',
      nombre_Pais: 'Colombia',
    },
    {
      id_Autor: 3,
      nombre_Completo: 'Miguel De Servantes Savedra',
      nombre_Pais: 'España',
    },
    {
      id_Autor: 4,
      nombre_Completo: 'Mario Vragas Llosa',
      nombre_Pais: 'Peru',
    },
    {
      id_Autor: 5,
      nombre_Completo: 'Cristina Rivera Garza',
      nombre_Pais: 'Mexico',
    },
  ]);
  return (
    <>
      <Titulo title="Libro" />
      <View style={{margin: 10}}>
        <SelectPicker
          text="Seleccione Autor"
          data={listaAutor}
          value={idAutor}
          onChangeText={value => setIdAutor(value)}
          propiedadId="id_Autor"
          propiedadMostrar="nombre_Completo"
        />
      </View>
    </>
  );
};
export default LibroPage;
