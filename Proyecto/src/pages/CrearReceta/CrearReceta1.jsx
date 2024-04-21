import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Button, TextInput} from 'react-native-paper';
import {Controller, useForm} from 'react-hook-form';
import {isEmpty} from 'lodash';
import {RecetaContext} from '../../contexts/recetaContext/recetaContext';
import Input from '../../components/Inputs/Input';
import ImgInput from '../../components/ImgInput/ImgInput';
import BtnFuntion from '../../components/Buttons/BtnFuntion';
import ControladorPasos from '../../components/ControladorPasos/ControladorPasos';
import {Iconos} from '../../components/Icon/constante-svg';

const CrearReceta1 = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, dirtyFields},
  } = useForm();

  // FALTA IMPLEMENTAR EL ID DEL USUARIO Y LA SELECCION DE HORARIOS DE COMIDA
  const {receta, setReceta, imagen} = React.useContext(RecetaContext);
  const horariosComida = ['Desayuno', 'Almuerzo', 'Cena'];

  const pickHorarioId = (horario) => {
    switch (horario) {
      case 'Desayuno':
        return 'wcloml08t6zhb7d';
      case 'Almuerzo':
        return 'nfxy984nzemq0qj';
      case 'Cena':
        return 'o51eeocykq2zh0e';
      default:
        return 'wcloml08t6zhb7d';
    }
  };

  const onSubmit = (data) => {
    setReceta({
      nombre: data.nombre,
      descripcion: data.descripcion,
      // creador: userId,
      imagen: imagen,
      tiempoPreparacion: data.tiempoPreparacion,
      horarioId: pickHorarioId(data.horarioComida),
      ingredientes: [],
      pasos: [],
    });
    console.log(data);
    console.log(receta);
  };

  const renderLink = () => {
    if (isEmpty(errors) && Object.keys(dirtyFields).length >= 3) {
      return (
        <Button
          title="Submit"
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('CrearReceta2')}
          onPressIn={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </Button>
      );
    } else {
      return (
        <Button
          title="Submit"
          style={styles.buttonContainer}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </Button>
      );
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Agrega una nueva receta</Text>
          </View>

          <View style={{width: 350, height: 350}}>
            <ImgInput />
          </View>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={60}
                name="Nombre"
              />
            )}
            name="nombre"
          />
          {errors.nombre && (
            <Text style={styles.errorMessa}>
              Ingrese un nombre para la receta.
            </Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                numberOfLines={5}
                isMultiline={true}
                maxLength={600}
                name="Descripción"
              />
            )}
            name="descripcion"
          />
          {errors.descripcion && (
            <Text style={styles.errorMessa}>
              Ingrese una descripción para la receta.
            </Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text style={styles.sectionText}>Tiempo de Preparacion</Text>
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  name="Tiempo"
                  keyboardType="numeric"
                />
              </>
            )}
            name="tiempoPreparacion"
          />
          {errors.tiempoPreparacion && (
            <Text style={styles.errorMessa}>
              Ingrese el tiempo de preparación de la receta.
            </Text>
          )}

          <Controller
            control={control}
            defaultValue={horariosComida[0]}
            render={({field: {onChange, value}}) => (
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}
              >
                <Text style={styles.sectionText}>Horario de comida</Text>
                <View style={styles.horarioComidaContainer}>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.horarioComidaPicker}
                  >
                    {horariosComida.map((horario, index) => (
                      <Picker.Item
                        key={index}
                        label={horario}
                        value={horario}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            )}
            name="horarioComida"
          />

          {/* <View style={styles.tiempoPreparacionContainer}></View> */}
          <View style={{display: 'flex', flexDirection: 'row', gap: -60}}>
            <View>{Iconos.CircleGreenDark}</View>
            <View>{Iconos.CircleGreenLight}</View>
            <View>{Iconos.CircleGreenLight}</View>
            <View>{Iconos.CircleGreenLight}</View>
          </View>

          {renderLink()}
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
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#246C2C',
    borderRadius: 24,
    width: 200,
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  horarioComidaContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '80%',
  },
  horarioComidaPicker: {
    width: '100%',
  },
  errorMessa: {
    color: 'red',
  },
});

export default CrearReceta1;
