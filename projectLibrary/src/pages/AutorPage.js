import React, {useState, useEffect} from 'react';
import {Alert, View} from 'react-native';
import Boton from '../components/Boton';
import FlatListView from '../components/FlatListView';
import Input from '../components/Input';
import ModalNew from '../components/ModalNew';
import Titulo from '../components/Titulo';
import {Select, Input as Inputs} from 'native-base';
import SelectPicker from '../components/SelectPicker';
import InputEntry from '../components/InputEntry';
import {getStyleAndFilteredProps} from 'native-base/lib/typescript/theme/styled-system';
import FlatListCabecera from '../components/FlatListCabecera';

const AutorPage = () => {
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

  const [listaPais, setListaPais] = useState([
    {
      id_pais: 1,
      nombre_del_Pais: 'Argentina',
    },
    {
      id_pais: 2,
      nombre_del_Pais: 'Colombia',
    },
    {
      id_pais: 3,
      nombre_del_Pais: 'España',
    },
    {
      id_pais: 4,
      nombre_del_Pais: 'Paru',
    },
    {
      id_pais: 5,
      nombre_del_Pais: 'Mexico',
    },
    {
      id_pais: 6,
      nombre_del_Pais: 'Estados Unidos',
    },
    {
      id_pais: 7,
      nombre_del_Pais: 'Reino Unido',
    },
    {
      id_pais: 8,
      nombre_del_Pais: 'Tokio',
    },
    {
      id_pais: 9,
      nombre_del_Pais: 'Korea',
    },
    {
      id_pais: 10,
      nombre_del_Pais: 'China',
    },
  ]);

  const [listaSexo, setListaSexo] = useState([
    {
      id_sexo: 1,
      nombre_sexo: 'Masculino',
    },
    {
      id_sexo: 2,
      nombre_sexo: 'Femenino',
    },
  ]);
  const [nameSearch, setNameSearch] = useState('');
  const [filtroAutor, setFiltroAutor] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [idPais, setIdPais] = useState('0');
  const [idSexo, setIdSexo] = useState('0');
  const [name, setName] = useState('');
  const [apPaterno, setApPaterno] = useState('');
  const [apMaterno, setApMaterno] = useState('');

  useEffect(() => {
    setFiltroAutor(listaAutor);
  }, []);
  useEffect(() => {
    //Se ejecuta lo que yo escriba aca
    if (nameSearch == '') setFiltroAutor(listaAutor);
    else {
      const filtro = listaAutor.filter(p =>
        p.nombre_Completo.includes(nameSearch),
      );
      setFiltroAutor(filtro);
    }
  }, [nameSearch]);
  const Close = () => {
    setVisibleModal(false);
  };
  const Recuperar = obj => {
    setVisibleModal(true);
    setTitleModal('Editar Autor');
  };
  const Guardar = () => {};
  const NewAdd = () => {
    setVisibleModal(true);
    setTitleModal('Agregar Autor');
  };

  return (
    <View>
      <ModalNew title={titleModal} visible={visibleModal} onPressCerrar={Close}>
        <InputEntry
          text="Nombre"
          value={name}
          onChangeText={value => setName(value)}
          placeholder="Ingrese su nombre"
        />
        <InputEntry
          text="Apellido Paterno"
          value={apPaterno}
          onChangeText={value => setApPaterno(value)}
          placeholder="Ingrese el apaellido paterno"
        />
        <InputEntry
          text="Apellido Materno"
          value={apMaterno}
          onChangeText={value => setApMaterno(value)}
          placeholder="Ingrese el apaellido materno"
        />
        <SelectPicker
          text="Seleccione Pais"
          data={listaPais}
          value={idPais}
          onChangeText={value => setIdPais(value)}
          propiedadId="id_pais"
          propiedadMostrar="nombre_del_Pais"
          textoPrimeraOpcion='----   Seleccione un país  ----'
        />
        <SelectPicker
          text="Seleccione Sexo"
          data={listaSexo}
          value={idSexo}
          onChangeText={value => setIdSexo(value)}
          propiedadId="id_sexo"
          propiedadMostrar="nombre_sexo"
          textoPrimeraOpcion='----   Seleccione el sexo  ----'
        />
      </ModalNew>
      <Titulo title="Autor" />
      <View style={{margin: 10}}>
        <Boton
          title="Nuevo"
          onPress={() => NewAdd()}
          backgroundColor="#0C96FF"
          marginBottom={10}
        />
        <InputEntry
          placeholder="Ingres nombre autor"
          value={nameSearch}
          onChangeText={value => setNameSearch(value)}
        />
        <FlatListCabecera cabeceras={['Autor', 'Pais']} anchos={[50, 30]} />
        <FlatListView
          data={filtroAutor}
          propiedadId="id_Autor"
          propiedadColumn1="nombre_Completo"
          propiedadColumn2="nombre_Pais"
          anchos={[50, 30, 20]}
          onPressRecuperar={Recuperar}
        />
      </View>
    </View>
  );
};
export default AutorPage;
