// React
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

// Librerias
import axios from 'axios';

// Hooks
import {getImagen} from '../../hooks/pocketbase';

// Componentes
import CardComidas from '../Cards/CardComida';

export default function CarruselComida({horario, datos, navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{horario}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {datos.map((data) => {
          return (
            <CardComidas
              navigation={navigation}
              id={data.id}
              imagen={getImagen(data)}
              name={data.nombre}
              time={data.tiempoPreparacion}
              key={data.id}
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
