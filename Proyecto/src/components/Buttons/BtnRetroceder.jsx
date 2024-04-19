import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Iconos} from '../../components/Icon/constante-svg';

const BotonRetroceder = () => {
  const navigation = useNavigation();

  const retroceder = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={retroceder} style={styles.boton}>
        {Iconos.Back}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  boton: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 6,
  },
  texto: {
    fontWeight: 'bold',
  },
});

export default BotonRetroceder;
