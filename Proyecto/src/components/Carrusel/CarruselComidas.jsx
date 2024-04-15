// React
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

// Librerias
import axios from 'axios';

// Hooks
import { getImagen } from '../../hooks/pocketbase';

// Componentes
import CardComidas from '../Cards/CardComida';

export default function CarruselComida({horario, datos}) {
  
  const [recetas, setRecetas] = useState([]);
  const [tiempo, setTiempo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('https://virtualchef.pockethost.io/api/collections/horario/records')
        .then((response) => {
          // Conseguir el id del horario
          setTiempo(response.data.items.filter(item => item.nombre === horario))

          // Filtrar las recetas por el id del horario
          setRecetas(datos.filter((datos) => datos.horarioId === tiempo[0].id))
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [recetas]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{horario}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {recetas.map((data) => {
          return (
            <CardComidas
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
