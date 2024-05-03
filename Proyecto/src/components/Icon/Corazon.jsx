import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, SafeAreaView} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {
  eliminarFavorito,
  findFavoritos,
  guardarFavorito,
} from '../../hooks/Favoritos';
import {UserContext} from '../../contexts/userContext';
import Toast from 'react-native-toast-message';

const Corazon = ({id_receta}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [selected, setSelected] = useState(false);
  const {user} = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const favoritos = await findFavoritos(user.id, id_receta);
        setSelected(favoritos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user.id, id_receta]);

  const handlePress = async () => {
    if (selected) {
      Toast.show({
        type: 'error',
        text1: 'Receta eliminada de Favoritos',
        text2: 'Se ha eliminado esta receta en las sección de favoritos',
        position: 'top',
        visibilityTime: 2000,
      });
      await eliminarFavorito(user.id, id_receta);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    } else {
      Toast.show({
        type: 'success',
        text1: 'Receta agregada a Favoritos',
        text2: 'Se ha guardado esta receta en las sección de favoritos',
        position: 'top',
        visibilityTime: 2000,
      });
      await guardarFavorito(user.id, id_receta);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    }
    setSelected(!selected);
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <Animated.View style={[styles.contenedorCorazon]}>
        <AntDesign
          name="heart"
          size={23}
          color={selected ? '#E80B1D' : 'white'}
          onPress={handlePress}
          style={styles.shadow}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  shadow: {
    textShadowColor: 'black',
    textShadowRadius: 3,
    width: 30,

    alignContent: 'center',
    textAlign: 'center',
    paddingLeft: 2,
  },
  contenedorCorazon: {
    left: 0,
    paddingLeft: 0,
    alignContent: 'center',
  },
});

export default Corazon;
