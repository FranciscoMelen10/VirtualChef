import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from 'react-native';
import {Iconos} from '../../components/Icon/constante-svg';
import {useForm, Controller, set} from 'react-hook-form';
import {Button, TextInput} from 'react-native-paper';
import {useContext, useEffect, useState} from 'react';
import {loginUsuario} from '../../hooks/Usuarios';
import Routers from '../../components/Navigation/Routers';
import Input from '../../components/Inputs/Input';
import {UserContext} from '../../contexts/userContext';
import Toast from 'react-native-toast-message';

export default function Login({navigation}) {
  const {updateUser} = useContext(UserContext);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});
  const onSubmit = async (data) => {
    console.log(data);
    const user = await loginUsuario(data.correo_electronico, data.clave);

    if (user) {
      Toast.show({
        type: 'success',
        text1: 'Registro de usuario correcto',
        text2: 'Bienvenido, ' + data.correo_electronico,
        position: 'top',
      });
      setTimeout(() => {
        updateUser(user.record.id);
        navigation.navigate('Home');
      }, 2000);
    }
  };

  return (
    <View style={styles.contenedor_principal}>
      <Toast></Toast>
      {Iconos.LogoXL}
      <View style={styles.contenedor}>
        {/* Correo electronico */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.containerInput}>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                name={'Correo electronico'}
                maxLength={60}
              />
            </View>
          )}
          name="correo_electronico"
        />
        {errors.correo_electronico && (
          <Text style={styles.errorMessa}>
            Intente ingresar nuevamente su correo electronico.
          </Text>
        )}

        {/* Correo electronico */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.containerInput}>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                name={'Contraseña'}
                secureTextEntry={true}
                maxLength={60}
              />
            </View>
          )}
          name="clave"
        />
        {errors.clave && (
          <Text style={styles.errorMessa}>
            Intente ingresar nuevamente su contraseña.
          </Text>
        )}
      </View>
      <View style={styles.contenedor}>
        <Button
          title="Submit"
          style={styles.buttonContainer}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('Registrar')}>
          <Text style={styles.link}>Crear un cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor_principal: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  contenedor: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
  },
  link: {
    marginTop: 10,
    color: '#246C2C',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  containerInput: {
    position: 'relative',
  },
  text_location: {
    position: 'absolute',
    top: 2,
    left: 22,
    backgroundColor: '#fff',
    zIndex: 1, // Asegura que el Text esté encima del TextInput
    paddingHorizontal: 3,
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 0,
    borderRadius: 5,
    zIndex: 0, // Asegura que el TextInput esté detrás del Text
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
  errorMessa: {
    color: 'red',
  },
});
