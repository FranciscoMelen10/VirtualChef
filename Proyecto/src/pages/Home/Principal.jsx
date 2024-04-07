import {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Dimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';

import CarruselComida from '../../components/Carrusel/CarruselComidas';
import InputIcon from '../../components/Inputs/InputIcon';

import {Iconos} from '../../components/Icon/constante-svg';

const WIDTH_WINDOW = Dimensions.get('window').width;

const Home = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('https://virtualchef.pockethost.io/api/collections/recetas/records')
        .then((response) => {
          setRecetas(response.data.items) // Ajusta esta línea según la estructura de response.data
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <InputIcon
        placeholder={'Buscar recetas...'}
        icono={Iconos.Buscar}
      ></InputIcon>

      <View style={styles.principal}>
        <ScrollView>
          <CarruselComida
            datos={recetas}
            horario={'Desayuno'}
          ></CarruselComida>
          {/* <CarruselComida
            datos={FOODS_CONST}
            horario={'Almuerzo'}
          ></CarruselComida>
          <CarruselComida
            datos={FOODS_CONST}
            horario={'Desayuno'}
          ></CarruselComida> */}
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
    backgroundColor: 'white',
  },
  principal: {
    flex: 1,
    width: WIDTH_WINDOW,
  },
});

export default Home;
