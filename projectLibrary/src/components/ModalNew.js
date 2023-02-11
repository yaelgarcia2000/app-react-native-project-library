import React from 'react';
import {Modal, View, Text} from 'react-native';
import Titulo from './Titulo';
import Input from './Input';
import Boton from './Boton';

const ModalNew = ({
  visible,
  title,
  onPressCerrar,
  onPressGuardar,
  children,
}) => {
  return (
    <Modal visible={visible}>
      <View style={{margin: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Titulo title={title} flex={1} />
          <Text
            style={{
              backgroundColor: 'red',
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
              width: '20%',
            }}
            onPress={onPressCerrar}>
            X
          </Text>
        </View>
        {children}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <Boton
            title={'Guardar'}
            backgroundColor={'#146c43'}
            onPress={onPressGuardar}
          />
          <Boton
            title={'Cerrar'}
            backgroundColor={'#dc3545'}
            onPress={onPressCerrar}
          />
        </View>
      </View>
    </Modal>
  );
};
export default ModalNew;
