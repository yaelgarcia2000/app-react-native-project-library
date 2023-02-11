import React from 'react';
import {TextInput, View, Text} from 'react-native';
const Input = ({placeholder, value, onChangeText, flex = 0, text = ''}) => {
  return (
    <>
      {text == '' ? null : <Text style={{marginVertical: 10}}>{text}</Text>}

      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={{borderWidth: 0.2, borderColor: '#343a40', flex}}
      />
    </>
  );
};
export default Input;
