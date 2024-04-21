import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import InputAgregarElemento from '../../components/Inputs/InputAgregarElemento';
import TarjetasAgregados from '../../components/TarjetasAgregados/TajetasAgregados';
import {RecetaContext} from '../../contexts/recetaContext/recetaContext';

const CrearReceta3 = ({navigation}) => {
  const {receta, setReceta} = React.useContext(RecetaContext);

  const renderLink = () => {
    if (receta.ingredientes.length >= 3) {
      return (
        <Button
          title="Submit"
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('VistaReceta')}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </Button>
      );
    } else {
      return (
        <Button
          title="Submit"
          style={styles.buttonContainer}
          onPress={() => {
            Alert.alert('Agrega por lo menos 3 pasos.');
          }}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </Button>
      );
    }
  };

  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Agrega los pasos de tu receta
              </Text>
            </View>
            <InputAgregarElemento
              name={'Agrega un paso'}
              nombreDelArreglo={'pasos'}
            />

            <View
              style={{
                width: '90%',
                backgroundColor: '#c7c7c7',
                borderRadius: 12,
              }}
            >
              {receta.pasos.map((paso, index) => {
                return (
                  <TarjetasAgregados
                    key={index}
                    elemento={paso}
                    nombreDelArray={'pasos'}
                  />
                );
              })}
            </View>

            {renderLink()}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    height: '100vh',
  },
  header: {
    marginTop: 60,
  },

  headerText: {fontSize: 20, fontWeight: 'bold'},
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#246C2C',
    borderRadius: 24,
    width: 200,
    height: 50,
    margin: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CrearReceta3;
