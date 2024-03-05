import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Reloj from '../../../assets/Reloj.png';
import {Iconos} from '../../components/Icon/constante-svg';

const WIDTH_WINDOW = Dimensions.get('window').height;

const CardFavoritos = ({name, img, time}) => {
  const handleClick = () => {
    alert('Proximamente...');
  };

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.timeContainer}>
          <Image source={Reloj} style={styles.clockIcon} />
          <Text style={styles.time}>{time + ' minutos'}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleClick}
          activeOpacity={0.8} // Opacidad al presionar
          disabled={false} // Cambia a true si quieres deshabilitar el botón
        >
          <Text style={styles.text_button}>Ver Más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  clockIcon: {
    width: 20,
    height: 20,
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginLeft: 4,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#3498db', // Cambia este color al que necesites
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
    shadowOffset: {width: 0, height: 2}, 
    marginVertical: 10,
  },
  text_button: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff', 
  },
});

export default CardFavoritos;
