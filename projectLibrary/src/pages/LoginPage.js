import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from 'react-native';

const LoginPage = () => {
  const [user, setUser] = useState('Yael');
  const [password, setPassword] = useState('0809');

  const IngresarDatos = () => {
    Alert.alert('Aviso', 'Dio click en Ingresar ' + user + ' ' + password);
  };
  const Registrar = () => {
    Alert.alert('Aviso', 'Dio click en Registrar', [
      {
        text: 'Aceptar',
        onPress: () => {
          Alert.alert('Aviso', 'Dio click en el boton Aceptar');
        },
      },
      {
        text: 'Cancelar',
        onPress: limpiar,
      },
    ]);
  };

  const limpiar = () => {
    setUser('');
    setPassword('');
  };

  return (
    <>
      <ScrollView>
        <Text style={styles.styleTitle}>Pàgina Login</Text>
        <View style={{margin: 20}}>
          <View
            style={{
              marginVertical: 30,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              resizeMode="contain"
              style={styles.styleImage}
              source={require('../../src/images/react.png')}
            />
          </View>
          <View>
            <Text style={styles.styleLabelForm}>Usuario:</Text>
            <TextInput
              style={styles.styleInput}
              keyboardType="default"
              onChangeText={value => setUser(value)}
              value={user}
            />
            <Text style={styles.styleLabelForm}>Contraseña:</Text>
            <TextInput
              style={styles.styleInput}
              secureTextEntry={true}
              keyboardType="numeric"
              onChangeText={value => setPassword(value)}
              value={password}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20,
              }}>
              <Button title="Ingresar" onPress={IngresarDatos} />
              <Button title="Registrar" onPress={Registrar} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  styleTitle: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#343a40',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 20,
    //marginTop:20,
    //paddingTop: 20,
    //paddingBottom: 20,
  },
  styleImage: {
    width: 200,
    height: 200,
    backgroundColor: 'black',
  },
  styleInput: {
    borderColor: '#343a40',
    borderStyle: 'solid',
    borderBottomWidth: 0.2,
    marginBottom: 10,
  },
  styleLabelForm: {
    marginVertical: 10,
  },
});

export default LoginPage;
