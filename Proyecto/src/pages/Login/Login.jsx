import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import {Iconos} from '../../components/Icon/constante-svg';
import {useForm, Controller} from 'react-hook-form';
import {Button, TextInput} from 'react-native-paper';
import { useEffect, useState } from 'react';
import { loginUsuario } from '../../hooks/Usuarios';
import Routers from '../../components/Navigation/Routers';


export default function Login({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});
  const onSubmit = async (data) => {
    console.log(data);
    const user = await loginUsuario(data.correo, data.clave);
    if (user) {
      alert("Acceso correcto");
      navigation.navigate('Home');
    }
  }

  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Agrega un retardo de 1 segundo antes de realizar la solicitud
        await new Promise(resolve => setTimeout(resolve, 2000));
        // const response = await axios.get('https://virtualchef.pockethost.io/api/collections/users/records');
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user]);

  // user.map((item) => {
  //   console.log(item.nombre);
  //   console.log(item.contraseña);
  // })

  return (
    <View style={styles.contenedor_principal}>
      {Iconos.LogoXL}
      <View style={styles.contenedor}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.containerInput}>
              <TextInput
                placeholder="Correo"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
              <Text style={styles.text_location}>{'Correo electronico'}</Text>
            </View>
          )}
          name="correo"
        />
        {errors.correo && (
          <Text style={styles.errorMessa}>Ha ocurrido un error.</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.containerInput}>
              <TextInput
                placeholder="Contraseña"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
                secureTextEntry={true}
              />
              <Text style={styles.text_location}>{'Contraseña'}</Text>
            </View>
          )}
          name="clave"
        />
        {errors.clave && (
          <Text style={styles.errorMessa}>Ha ocurrido un error.</Text>
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
    padding: 10,
    backgroundColor: '#246C2C',
    borderRadius: 24,
    width: 200,
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  errorMessa: {
    color: 'red',
  },
});
