import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableHighlight,
  Modal,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import Boton from '../components/Boton';
import FlatListCabecera from '../components/FlatListCabecera';
import FlatListView from '../components/FlatListView';
import Input from '../components/Input';
import InputEntry from '../components/InputEntry';
import ModalNew from '../components/ModalNew';
import Titulo from '../components/Titulo';

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
    {
      id_tipo_libro: 5,
      nombre_tipo_libro: 'Romance',
      descripcion: 'Es algo muy lindo',
    },
    {
      id_tipo_libro: 6,
      nombre_tipo_libro: 'Historia',
      descripcion: 'Es algo que ya paso',
    },
  ]);

  const [nameSearch, setNameSearch] = useState('');
  const [filtradoTipoLibro, setFiltradoTipoLibro] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [nombreTipoLibro, setNombreTipoLibro] = useState('');
  const [descripcionTipoLibro, setDescripcionTipoLibro] = useState('');

  useEffect(() => {
    setFiltradoTipoLibro(listaTipoLibro);
  }, []);

  const Search = () => {
    if (nameSearch != '') {
      const filtro = listaTipoLibro.filter(p =>
        p.nombre_tipo_libro.includes(nameSearch),
      );
      setFiltradoTipoLibro(filtro);
    } else {
      setFiltradoTipoLibro(listaTipoLibro);
    }
  };

  const Recuperar = obj => {
    setVisibleModal(true);
    setTitleModal('Editar Tipo Libro');
    setNombreTipoLibro(obj.nombre_tipo_libro);
    setDescripcionTipoLibro(obj.descripcion);
  };
  const NewAdd = () => {
    setVisibleModal(true);
    setTitleModal('Agregar Tipo Libro');
    Limpiar();
  };

  const Limpiar = () => {
    setNombreTipoLibro('');
    setDescripcionTipoLibro('');
  };

  const Eliminar = obj => {
    Alert.alert(
      'Confirmacion',
      'Desea eliminar el tipo libro: ' + obj.nombre_tipo_libro,
      [
        {
          text: 'Si',
        },
        {
          text: 'No',
        },
      ],
    );
  };

  const Guardar = () => {};

  const Close = () => {
    setVisibleModal(false);
  };

  return (
    <View>
      <ModalNew
        visible={visibleModal}
        title={titleModal}
        onPressCerrar={Close}
        onPressGuardar={Guardar}>
        <InputEntry
          value={nombreTipoLibro}
          onChangeText={value => setNombreTipoLibro(value)}
          placeholder={'Ingrese nombre tipo libro'}
          text="Nombre Tipo Libro"
        />
        <InputEntry
          value={descripcionTipoLibro}
          onChangeText={value => setDescripcionTipoLibro(value)}
          placeholder={'Ingrese descripcion tipo libro'}
          text="Descripcion Tipo Libro"
        />
      </ModalNew>
      <Titulo title="Tipo Libro" />
      <View style={{margin: 10}}>
        <Boton
          title="Nuevo"
          onPress={() => NewAdd()}
          backgroundColor="#0C96FF"
          marginBottom={10}
        />

        <View style={{flexDirection: 'row'}}>
          <InputEntry
            placeholder="Ingrese nombre"
            flex={1}
            w="75%"
            onChangeText={value => setNameSearch(value)}
            value={nameSearch}
          />
          <Boton title="Buacar" onPress={Search} backgroundColor="#198754" />
        </View>
        <FlatListCabecera cabeceras={['Nombre', 'Descripcion']} />
        <FlatListView
          data={filtradoTipoLibro}
          propiedadId="id_tipo_libro"
          propiedadColumn1="nombre_tipo_libro"
          propiedadColumn2="descripcion"
          onPressRecuperar={Recuperar}
          onPressEliminar={Eliminar}
        />
      </View>
    </View>
  );
};
export default TipoLibroPage;
