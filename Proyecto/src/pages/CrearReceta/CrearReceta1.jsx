import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Input from '../../components/Inputs/Input';
import ImgInput from '../../components/ImgInput/ImgInput';

const CrearReceta1 = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Agrega una nueva receta</Text>
          </View>
          <View style={{width: 350, height: 350}}>
            <ImgInput />
          </View>
          <View style={styles.inputContainer1}>
            <Input maxLength={60} name="Nombre" />
            <Input
              numberOfLines={5}
              isMultiline={true}
              maxLength={600}
              name="Descripción"
            />
          </View>
          <View style={styles.tiempoPreparacionContainer}>
            <Text style={styles.sectionText}>Tiempo de Preparacion</Text>
            <Input name="Tiempo" />
            <Text style={styles.sectionText}>Tiempo de comida</Text>
            <Input name="Tiempo" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 60,
  },

  headerText: {fontSize: 20, fontWeight: 'bold'},

  sectionText: {
    fontSize: 20,
    fontWeight: '400',
  },

  tiempoPreparacionContainer: {
    width: '80%',
  },
});

export default CrearReceta1;
