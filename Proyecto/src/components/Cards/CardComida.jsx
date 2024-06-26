import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Iconos} from '../Icon/constante-svg';

import Corazon from '../Icon/Corazon';

export default function CardComidas({name, time, imagen, id, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('VistaReceta', {
          id: id,
        });
      }}
      style={styles.principal}
    >
      <Image src={imagen} style={styles.image}></Image>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.timeContainer}>
            {Iconos.Reloj}
            <Text>{time + ' minutos'}</Text>
          </View>
        </View>
        <Corazon id_receta={id}></Corazon>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  principal: {
    width: 200,
    borderRadius: 10,
    marginRight: 20,
  },
  text: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});
