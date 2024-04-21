import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RecetaContext} from '../../contexts/recetaContext/recetaContext';
import {Iconos} from '../Icon/constante-svg';

const InputAgregarElemento = ({name, nombreDelArreglo}) => {
  const {receta, setReceta} = React.useContext(RecetaContext);
  const [inputValue, setInputValue] = React.useState('');

  const takeTextFromInput = (text) => {
    setInputValue(text);
  };

  const saveElemento = () => {
    if (inputValue != '') {
      setReceta({
        ...receta,
        [nombreDelArreglo]: [...receta[nombreDelArreglo], inputValue],
      });
    }

    setInputValue('');
    console.log(receta);
  };

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        margin: 20,
      }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          editable
          style={styles.input}
          onChangeText={takeTextFromInput}
          onSubmitEditing={saveElemento}
          value={inputValue}
        />
        <Text style={styles.text_location}>{name}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={saveElemento}>
          {Iconos.Plus}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  text_location: {
    position: 'absolute',
    top: 2,
    left: 22,
    backgroundColor: '#fff',
    zIndex: 1, // Asegura que el Text esté encima del TextInput
    paddingHorizontal: 3,
  },
  input: {
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    zIndex: 0, // Asegura que el TextInput esté detrás del Text
    height: 50,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    width: 50,
    height: 50,
  },
});

export default InputAgregarElemento;
