import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Input from '../../components/Inputs/Input';
import ImgInput from '../../components/ImgInput/ImgInput';
import BtnFuntion from '../../components/Buttons/BtnFuntion';
import ControladorPasos from '../../components/ControladorPasos/ControladorPasos';

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
          <Input maxLength={60} name="Nombre" />
          <Input
            numberOfLines={5}
            isMultiline={true}
            maxLength={600}
            name="Descripción"
          />
          <View style={styles.inputContainer1}></View>
          <Text style={styles.sectionText}>Tiempo de Preparacion</Text>
          <Input name="Tiempo" />
          <Text style={styles.sectionText}>Horario en el día</Text>
          <Input name="Horario" />
          {/* <View style={styles.tiempoPreparacionContainer}></View> */}

          <ControladorPasos paso={2} />

          <BtnFuntion name={'Siguiente'} />
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
    textAlign: 'left',
  },

  tiempoPreparacionContainer: {
    width: '80%',
  },
});

export default CrearReceta1;
