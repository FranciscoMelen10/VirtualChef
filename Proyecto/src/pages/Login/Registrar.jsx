import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import InputCom from '../../components/Inputs/Input';
import constantes from 'expo-constants';
import {Iconos} from '../../components/Icon/constante-svg';
import {useForm, Controller} from 'react-hook-form';
import Input from '../../components/Inputs/Input';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';
import { createUser } from '../../hooks/Usuarios';

const HEIGHT_WINDOW = Dimensions.get('window').height;

export default function Registrar({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});

  const onSubmit = async (data) => {
    createUser(data)
    
  };

  return (
    <ScrollView style={styles.scrollCont}>
      <View style={styles.contenedor_principal}>
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
                />
              </View>
            )}
            name="correo_electronico"
          />
          {errors.correo_electronico && (
            <Text style={styles.errorMessa}>Ha ocurrido un error.</Text>
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
                />
              </View>
            )}
            name="nombre"
          />
          {errors.nombre && (
            <Text style={styles.errorMessa}>Ha ocurrido un error.</Text>
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
                />
              </View>
            )}
            name="apellido"
          />
          {errors.apellido && (
            <Text style={styles.errorMessa}>Ha ocurrido un error.</Text>
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
                />
              </View>
            )}
            name="nombre_de_usuario"
          />
          {errors.nombre_de_usuario && (
            <Text style={styles.errorMessa}>Ha ocurrido un error.</Text>
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
                />
              </View>
            )}
            name="contraseña"
          />
          {errors.contraseña && (
            <Text style={styles.errorMessa}>Ha ocurrido un error.</Text>
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
                />
              </View>
            )}
            name="confirmar_clave"
          />
          {errors.confirmar_clave && (
            <Text style={styles.errorMessa}>Ha ocurrido un error.</Text>
          )}
        </View>

        <Button
          title="Submit"
          style={styles.buttonContainer}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
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
});
