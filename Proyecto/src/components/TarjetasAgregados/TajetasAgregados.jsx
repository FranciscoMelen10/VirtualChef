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

const TarjetasAgregados = ({elemento, nombreDelArray}) => {
  const {receta, setReceta} = React.useContext(RecetaContext);

  const deleteElemento = () => {
    const newArray = receta[nombreDelArray].filter((elem) => elem !== elemento);

    setReceta({
      ...receta,
      [nombreDelArray]: newArray,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>{elemento}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          deleteElemento();
        }}
      >
        {Iconos.Trash}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
});

export default TarjetasAgregados;
