import React from 'react';

import {Input, Text} from 'native-base';
const InputEntry = ({
  placeholder,
  value,
  onChangeText,
  flex = 0,
  text = '',
  w = "100%",
}) => {
  return (
    <>
      {text == '' ? null : <Text style={{marginVertical: 10}}>{text}</Text>}

      <Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={{flex}}
        w={w}
      />
    </>
  );
};
export default InputEntry;
