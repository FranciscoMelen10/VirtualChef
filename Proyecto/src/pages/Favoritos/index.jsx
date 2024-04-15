import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Iconos} from '../../components/Icon/constante-svg';
import InputIcon from '../../components/Inputs/InputIcon';
import CardFavoritos from '../../components/Cards/CardFavoritos';

import Ejemplo from '../../../assets/Ejemplo.png';
import Ejemplo2 from '../../../assets/Ejemplo2.png';
import Ejemplo3 from '../../../assets/Ejemplo3.png';

const WIDTH_WINDOW = Dimensions.get('window').height;

const DATA = [
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

function Favoritos() {
  return (
    <SafeAreaView style={styles.contenedor_principal}>
      <InputIcon icono={Iconos.Buscar} placeholder={'Buscar en favoritos...'} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.centeredContent}>
          <View style={styles.contenedor_favoritos}>
            {DATA.map((info, index) => (
              <CardFavoritos
                img={info.img}
                name={info.name}
                time={info.time}
                key={info.name + index}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor_principal: {
    flex: 1,
    padding: 20,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  centeredContent: {
    alignItems: 'center',
  },
  contenedor_favoritos: {
    // Estilos adicionales para tu contenedor de favoritos
  },
});

export default Favoritos;
