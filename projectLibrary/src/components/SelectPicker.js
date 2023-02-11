import {Select} from 'native-base';
import React from 'react';
import {Text} from 'react-native';

const SelectPicker = ({
  data,
  value,
  onChangeText,
  propiedadId,
  propiedadMostrar,
  text = "",
  textoPrimeraOpcion="----  Todos  ----"
}) => {
  return (
    <>
      {(text == '') ? null : <Text style={{marginVertical: 10}}>{text}</Text>}
      <Select selectedValue={value} onValueChange={onChangeText}>
      <Select.Item
            label={textoPrimeraOpcion}
            value="0"
            key="0"
          />
        {data.map(obj => (
          <Select.Item
            label={obj[propiedadMostrar]}
            value={obj[propiedadId]}
            key={obj[propiedadId]}
          />
        ))}
      </Select>
    </>
  );
};

export default SelectPicker;
