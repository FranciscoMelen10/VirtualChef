import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import InputCom from '../../components/Inputs/Input';
import constantes from 'expo-constants';
import {Iconos} from '../../components/Icon/constante-svg';
import {useForm, Controller} from 'react-hook-form';
import Input from '../../components/Inputs/Input';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';
import {createUser} from '../../hooks/Usuarios';
import Toast from 'react-native-toast-message';

const HEIGHT_WINDOW = Dimensions.get('window').height;

export default function Registrar({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});

  const onSubmit = async (data) => {
    if (data.contraseña !== data.confirmar_contraseña) {
      Toast.show({
        type: 'error',
        text1: 'Error de registro de sesión',
        text2: 'Las contraseñas no coinciden',
        position: 'top',
      });
      return;
    }
    createUser(data);
  };

  return (
    <ScrollView style={styles.scrollCont}>
      <View style={styles.contenedor_principal}>
        <Toast />
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

          {/* Nombre */}
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
                  name={'Nombre'}
                  maxLength={60}
                />
              </View>
            )}
            name="nombre"
          />
          {errors.nombre && (
            <Text style={styles.errorMessa}>
              Intente ingresar nuevamente su nombre.
            </Text>
          )}

          {/* Apellido */}
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
                  style={styles.input}
                  name={'Apellido'}
                  maxLength={60}
                />
              </View>
            )}
            name="apellido"
          />
          {errors.apellido && (
            <Text style={styles.errorMessa}>
              Intente ingresar nuevamente su apellido.
            </Text>
          )}

          {/* Nombre de usuario */}
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
                  style={styles.input}
                  name={'Nombre de usuario'}
                  maxLength={60}
                />
              </View>
            )}
            name="nombre_de_usuario"
          />
          {errors.nombre_de_usuario && (
            <Text style={styles.errorMessa}>
              Intente ingresar nuevamente su nombre de usuario.
            </Text>
          )}

          {/* Contraseña */}
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
                  style={styles.input}
                  name={'Contraseña'}
                  secureTextEntry={true}
                  maxLength={60}
                />
              </View>
            )}
            name="contraseña"
          />
          {errors.contraseña && (
            <Text style={styles.errorMessa}>
              Intente ingresar nuevamente su contraseña.
            </Text>
          )}

          {/* Confirmar contraseña */}
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
                  style={styles.input}
                  name={'Confirmar contraseña'}
                  secureTextEntry={true}
                  maxLength={60}
                />
              </View>
            )}
            name="confirmar_contraseña"
          />
          {errors.confirmar_contraseña && (
            <Text style={styles.errorMessa}>
              Intente ingresar nuevamente su contraseña.
            </Text>
          )}
        </View>

        <Button
          title="Submit"
          style={styles.buttonContainer}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Registrar usuario</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor_principal: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: 50,
    backgroundColor: 'white',
    minHeight: HEIGHT_WINDOW,
  },
  scrollCont: {
    paddingTop: constantes.statusBarHeight,
  },
  img: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  contenedor: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 5,
  },
  errorMessa: {
    color: 'red',
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
});
