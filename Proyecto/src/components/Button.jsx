import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';

const ButtonDesing  = ({ name }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => Alert.alert("Iniciar sesión", "Proximamente...")} style={styles.button}>
                <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#246C2C',
        borderRadius: 24,
        width:200,
        height:50
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    }
});

export default ButtonDesing;
