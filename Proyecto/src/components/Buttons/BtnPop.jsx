import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const PopButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.icon}>{icon}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#246C2C', // Puedes cambiar el color de fondo según tu preferencia
    padding: 10,
    borderRadius: 999,
  },
  text: {
    color: '#fff', // Puedes cambiar el color del texto según tu preferencia
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PopButton;
