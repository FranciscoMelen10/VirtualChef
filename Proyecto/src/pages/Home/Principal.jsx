import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Dimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Iconos
import {Iconos} from '../../components/Icon/constante-svg';

// Componentes
import InputIcon from '../../components/Inputs/InputIcon';
import BtnPop from '../../components/Buttons/BtnPop';
import CarruselComida from '../../components/Carrusel/CarruselComidas';

// Contextos
import {useRecetas} from '../../hooks/Recetas';
import { UserContext } from '../../contexts/userContext';

const WIDTH_WINDOW = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const { user } = useContext(UserContext);

  // useState para obtener las recetas
  const {getRecetasMenu} = useRecetas();
  // useState para guardar las recetas de desayuno, almuerzo y cena
  const [Desayunos, setDesayunos] = useState([]);
  const [Almuerzos, setAlmuerzos] = useState([]);
  const [Cenas, setCenas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API
        setDesayunos(await getRecetasMenu('Desayuno'));
        setAlmuerzos(await getRecetasMenu('Almuerzo'));
        setCenas(await getRecetasMenu('Cena'));
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
            navigation={navigation}
            datos={Desayunos}
            horario={'Desayuno'}
          ></CarruselComida>

          <CarruselComida
            navigation={navigation}
            datos={Almuerzos}
            horario={'Almuerzo'}
          ></CarruselComida>

          <CarruselComida
            navigation={navigation}
            datos={Cenas}
            horario={'Cena'}
          ></CarruselComida>
        </ScrollView>
      </View>

      <View style={styles.button}>
        <BtnPop icon={Iconos.CrearRecetas}></BtnPop>
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
