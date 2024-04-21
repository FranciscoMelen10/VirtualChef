import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, SafeAreaView} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {
  eliminarFavorito,
  findFavoritos,
  guardarFavorito,
} from '../../hooks/Favoritos';
import {UserContext} from '../../contexts/userContext';

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
      await eliminarFavorito(user.id, id_receta);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    } else {
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    textShadowRadius: 3,
    width: 30,
    height: 30,
    alignContent: 'center',
    padding: 1,
  },
  contenedorCorazon: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
    paddingLeft: 5,
  },
});

export default Corazon;
