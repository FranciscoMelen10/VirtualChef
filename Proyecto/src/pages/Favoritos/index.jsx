import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, FlatList, Dimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Iconos} from '../../components/Icon/constante-svg';
import InputIcon from '../../components/Inputs/InputIcon';
import CardFavoritos from '../../components/Cards/CardFavoritos';

import Ejemplo from '../../../assets/Ejemplo.png';
import Ejemplo2 from '../../../assets/Ejemplo2.png';
import Ejemplo3 from '../../../assets/Ejemplo3.png';
import {getFavoritos} from '../../hooks/Favoritos';
import {UserContext} from '../../contexts/userContext';
import { ActivityIndicator } from 'react-native-paper';
import { getImagen } from '../../hooks/pocketbase';

const WIDTH_WINDOW = Dimensions.get('window').height;

function Favoritos() {
  const {user} = useContext(UserContext);

  const [favoritos, setFavoritos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Favoritos = async () => {
      try {
        setFavoritos(await getFavoritos(user.id));
        
        //Cuando cargue todo, se mostrara el contenido
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    Favoritos();
  }, [user.id, favoritos]);

  if (!isLoading) {
    return (
      <SafeAreaView style={styles.contenedor_principal}>
        <InputIcon
          icono={Iconos.Buscar}
          placeholder={'Buscar en favoritos...'}
        />
        <FlatList
          contentContainerStyle={styles.container}
          data={favoritos}
          renderItem={({item, index}) => (
                <CardFavoritos
                  img={getImagen(item.expand.recetasId)}
                  name={item.expand.recetasId.nombre}
                  time={item.expand.recetasId.tiempoPreparacion}
                  id={item.expand.recetasId.id}
                  key={index}
                />
          )}
          numColumns={2}
          keyExtractor={(item) => item.id }

        />
      </SafeAreaView>
    );
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#246C2C" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor_principal: {
    flex: 1,
    padding: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContent: {
    alignItems: 'center',
  },
});

export default Favoritos;
