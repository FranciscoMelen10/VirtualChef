import React from 'react';
import {StyleSheet, ScrollView, Dimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import CarruselComida from '../../components/Carrusel/CarruselComidas';
import InputIcon from '../../components/Inputs/InputIcon';

import {Iconos} from '../../components/Icon/constante-svg';
import Ejemplo from '../../../assets/Ejemplo.png';
import Ejemplo2 from '../../../assets/Ejemplo2.png';
import Ejemplo3 from '../../../assets/Ejemplo3.png';

const FOODS_CONST = [
  {
    name: 'Pollo frito',
    time: '10',
    img: Ejemplo,
  },
  {
    name: 'Pescado frito',
    time: '10',
    img: Ejemplo2,
  },
  {
    name: 'Ensalada',
    time: '10',
    img: Ejemplo3,
  },
];

const WIDTH_WINDOW = Dimensions.get('window').width;

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InputIcon
        placeholder={'Buscar recetas...'}
        icono={Iconos.Buscar}
      ></InputIcon>

      <View style={styles.principal}>
        <ScrollView>
          <CarruselComida
            datos={FOODS_CONST}
            horario={'Desayuno'}
          ></CarruselComida>
          <CarruselComida
            datos={FOODS_CONST}
            horario={'Almuerzo'}
          ></CarruselComida>
          <CarruselComida
            datos={FOODS_CONST}
            horario={'Desayuno'}
          ></CarruselComida>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  principal: {
    flex: 1,
    width: WIDTH_WINDOW,
  },
});

export default Home;
