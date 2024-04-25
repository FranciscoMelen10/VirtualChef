import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

const InputIcon = ({placeholder, onChangeText, value, onPress, icon}) => {
  return (
    <View
    style={{
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 8,
      marginVertical: 6,
    }}
  >
    <TextInput
      placeholder={placeholder}
      style={{flex: 1, padding: 8}}
      onChangeText={onChangeText}
      value={value}
    />
    <TouchableOpacity onPress={onPress}>
      {icon}
    </TouchableOpacity>
  </View>
  );
};

export default InputIcon;
