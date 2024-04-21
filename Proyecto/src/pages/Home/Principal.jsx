import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Dimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import CarruselComida from '../../components/Carrusel/CarruselComidas';
import {Iconos} from '../../components/Icon/constante-svg';
import InputIcon from '../../components/Inputs/InputIcon';
import BtnPop from '../../components/Buttons/BtnPop';

const WIDTH_WINDOW = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Agrega un retardo de 1 segundo antes de realizar la solicitud
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await axios.get(
          'https://virtualchef.pockethost.io/api/collections/recetas/records',
        );
        setRecetas(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [recetas]);

  return (
    <SafeAreaView style={styles.container}>
      <InputIcon
        placeholder={'Buscar recetas...'}
        icono={Iconos.Buscar}
      ></InputIcon>

      <View style={styles.principal}>
        <ScrollView>
          <CarruselComida
            navigation={navigation}
            datos={recetas}
            horario={'Desayuno'}
          ></CarruselComida>

          <CarruselComida
            navigation={navigation}
            datos={recetas}
            horario={'Almuerzo'}
          ></CarruselComida>

          <CarruselComida
            navigation={navigation}
            datos={recetas}
            horario={'Cena'}
          ></CarruselComida>
        </ScrollView>
      </View>

      <View style={styles.button}>
        <BtnPop
          onPress={() => {
            navigation.navigate('CrearReceta1');
          }}
          icon={Iconos.CrearRecetas}
        ></BtnPop>
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
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default Home;
