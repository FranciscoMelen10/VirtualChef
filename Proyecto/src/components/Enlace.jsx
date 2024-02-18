import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

export function Enlace ({titulo, url}) {
  const handlePress = () => {
    Alert.alert("Crear cuenta", "Proximamente...")
    // Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.link}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    marginTop: 10,
    color: '#246C2C',
    fontSize: 15,
    textDecorationLine: 'underline'
  },

});

export default Enlace;
