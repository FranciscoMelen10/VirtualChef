import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const Input = ({ name }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
            />
            <Text style={styles.text_location}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    text_location: {
        position: 'absolute',
        top: 2,
        left: 22,
        backgroundColor: '#fff',
        zIndex: 1, // Asegura que el Text esté encima del TextInput
        paddingHorizontal:3
    },
    input: {
        height: 40,
        width: 270,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        zIndex: 0, // Asegura que el TextInput esté detrás del Text
    },
});

export default Input;
