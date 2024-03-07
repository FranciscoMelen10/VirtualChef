import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, SafeAreaView} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const Corazon = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    }
  }, [selected]);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <Animated.View style={[styles.contenedorCorazon]}>
        <AntDesign
          name="heart"
          size={25}
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
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
    width: 30,
    height: 30,
  },
  contenedorCorazon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Corazon;
