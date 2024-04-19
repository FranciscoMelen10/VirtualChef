import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, FlatList, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Iconos} from '../../components/Icon/constante-svg';
import InputIcon from '../../components/Inputs/InputIcon';
import CardFavoritos from '../../components/Cards/CardFavoritos';

import Ejemplo from '../../../assets/Ejemplo.png';
import Ejemplo2 from '../../../assets/Ejemplo2.png';
import Ejemplo3 from '../../../assets/Ejemplo3.png';
import { getFavoritos } from '../../hooks/Favoritos';
import { UserContext } from '../../contexts/userContext';

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
    const { user } = useContext(UserContext);
  const [userIsValid, setUserIsValid] = useState(false);

  const [favoritos, setFavoritos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Favoritos = async () => {
      try {
        setFavoritos(await getFavoritos(user.id));
        console.log(favoritos);
        //Cuando cargue todo, se mostrara el contenido
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    Favoritos();
  }, [user.id]);
  return (
    <SafeAreaView style={styles.contenedor_principal}>
      <InputIcon icono={Iconos.Buscar} placeholder={'Buscar en favoritos...'} />
      <FlatList
        contentContainerStyle={styles.container}
        data={DATA}
        renderItem={({item, index}) => (
          <CardFavoritos
            img={item.img}
            name={item.name}
            time={item.time}
            key={item.name + index}
          />
        )}
        numColumns={2}
        keyExtractor={(item, index) => item.name + index}
      />
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
    alignItems: 'center',
  },
  centeredContent: {
    alignItems: 'center',
  },
});

export default Favoritos;