import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { getImagen } from '../../hooks/pocketbase';

import CardComidas from '../Cards/CardComida';

export default function CarruselComida({horario, datos}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{horario}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {datos.map((data, index) => {
          return (
            <CardComidas
              imagen={getImagen(data)}
              name={data.nombre}
              time={data.tiempoPreparacion}
              key={data.nombre + index}
            ></CardComidas>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    margin: 20,
    paddingVertical: 5,
    gap: 10,
  },
});
