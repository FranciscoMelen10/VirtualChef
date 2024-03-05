import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Iconos} from '../Icon/constante-svg';

const ControladorPasos = ({paso}) => {
  let elementos = [];

  for (let i = 0; i < 4; i++) {
    if (i === paso - 1) {
      elementos.push(<Text key={i}>{Iconos.CircleGreenDark}</Text>);
    } else {
      elementos.push(
        elementos.push(<Text key={i}>{Iconos.CircleGreenLight}</Text>),
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text>{elementos}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
});

export default ControladorPasos;
