import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Reloj from '../../../assets/Reloj.png';
import {useNavigation} from '@react-navigation/native'; // Importa el hook de navegación

const CardFavoritos = ({name, img, time, onPress}) => {
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const handlePress = () => {
    // Navega a la pantalla de detalle con el id del plato
    navigation.navigate('Principal'); // Aquí deberías pasar el id correspondiente
  };

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} />
      <View style={styles.content}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
        <View style={styles.timeContainer}>
          <Image source={Reloj} style={styles.clockIcon} />
          <Text style={styles.time}>{time + ' min'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#000',
    marginHorizontal: 8, 
    shadowOffset: {
      width: 0,
      height: 3, 
    },
    shadowOpacity: 0.6, 
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 8, // Reducido el margen vertical
  },
  image: {
    width: '100%',
    height: 100, // Reducida la altura de la imagen
  },
  content: {
    padding: 6, // Reducido el padding
  },
  name: {
    fontSize: 16, // Reducido el tamaño de la fuente
    fontWeight: 'bold',
    color: '#333',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2, // Reducido el margen superior
  },
  clockIcon: {
    width: 16, // Reducido el tamaño del icono del reloj
    height: 16,
  },
  time: {
    fontSize: 10, // Reducido el tamaño de la fuente
    color: '#888',
    marginLeft: 2, // Reducido el margen izquierdo
  },
  button: {
    borderRadius: 6, // Reducido el radio de borde
    backgroundColor: '#3498db',
    paddingVertical: 8, // Reducido el padding vertical
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Reducida la elevación
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 2},
    marginVertical: 6, // Reducido el margen vertical
  },
  text_button: {
    fontSize: 10, // Reducido el tamaño de la fuente
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default CardFavoritos;
