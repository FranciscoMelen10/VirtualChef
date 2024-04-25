import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import {Controller, set, useForm} from 'react-hook-form';
import Toast from 'react-native-toast-message';
import {isEmpty, update} from 'lodash';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Iconos} from '../../components/Icon/constante-svg';
import {UserContext} from '../../contexts/userContext';
import {useRecetas} from '../../hooks/Recetas';
import {
  existeUsuario,
  buscarInfoUsuario,
  loginUsuario,
  editarUsuario,
} from '../../hooks/Usuarios';
import CardComidas from '../../components/Cards/CardComida';
import {getImagen} from '../../hooks/pocketbase';
import BtnFuntion from '../../components/Buttons/BtnFuntion';
import Input from '../../components/Inputs/Input';

function Perfil({navigation}) {
  const {user, updateUser} = React.useContext(UserContext);
  const [userInfo, setUserInfo] = useState([{nombre: ''}]);
  const [recetas, setRecetas] = useState([]);
  const [editarIsActivated, setEditarIsActivated] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors, dirtyFields},
  } = useForm();
  const {buscarRecetasUsuario} = useRecetas();

  useEffect(() => {
    const setUsuariosRecetas = async () => {
      try {
        setRecetas(await buscarRecetasUsuario(user.id));
      } catch (error) {
        console.log('Error al buscar recetas', error);
      }
    };

    const setUsuarioInfo = async () => {
      try {
        setUserInfo(await buscarInfoUsuario(user.id));
        console.log('userInfo', userInfo);
      } catch (error) {
        console.log('Error al buscar info usuario', error);
      }
    };
    setUsuarioInfo();
    setUsuariosRecetas();
  }, [user, editarIsActivated]);

  const validarCampos = () => {
    if (isEmpty(errors) && Object.keys(dirtyFields).length >= 5) {
      onSubmit();
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2:
          'Por favor, revisa que todos los campos estén completos y sean válidos',
      });
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const usuario = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.correo,
      password: data.contraseña_nueva,
      passwordConfirm: data.confirmar_contraseña,
    };

    const editar = await editarUsuario(user.id, usuario);

    if (editar) {
      Toast.show({
        type: 'success',
        text1: 'Usuario editado',
        text2: 'Usuario editado con éxito',
      });
      setEditarIsActivated(false);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error al editar el usuario',
        text2:
          'Error al editar el usuario, por favor revisa que el correo sea válido y las contraseñas coincidan',
      });
    }
  });

  const renderEditar = () => {
    if (editarIsActivated) {
      return (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={50}
                name="Nombre"
              />
            )}
            name="nombre"
          />
          {errors.nombre && (
            <Text style={styles.errorMessa}>Ingresa un nombre válido.</Text>
          )}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={50}
                name="Apellido"
              />
            )}
            name="apellido"
          />
          {errors.apellido && (
            <Text style={styles.errorMessa}>Ingresa un apellido válido.</Text>
          )}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={50}
                name="Correo"
                keyboardType="email-address"
                type="email"
              />
            )}
            name="correo"
          />
          {errors.correo && (
            <Text style={styles.errorMessa}>Ingresa un correo válido.</Text>
          )}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={50}
                name="Conntraseña nueva"
                keyboardType="default"
                type="password"
              />
            )}
            name="contraseña_nueva"
          />
          {errors.contraseña_nueva && (
            <Text style={styles.errorMessa}>
              Ingresa una contraseña válida.
            </Text>
          )}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={50}
                name="Confirmar contraseña"
                keyboardType="default"
                type="password"
              />
            )}
            name="confirmar_contraseña"
          />
          {errors.confirmar_contraseña && (
            <Text style={styles.errorMessa}>
              Ingresa una contraseña válida.
            </Text>
          )}

          <View style={{marginTop: 20}}>
            <BtnFuntion
              name={'Guardar cambios'}
              funtionClick={() => {
                handleSubmit(onSubmit);
              }}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={{marginTop: 20}}>
          <BtnFuntion
            name={'Editar usuario'}
            funtionClick={() => {
              setEditarIsActivated(true);
            }}
          />
        </View>
      );
    }
  };

  console.log(userInfo[0].nombre + ' ' + userInfo[0].apellido);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Toast />
          <View>
            <View style={styles.profileAside}>
              {Iconos.Profile}
              <Text
                style={{fontSize: 24, paddingVertical: 10, fontWeight: 700}}
              >
                {userInfo[0].nombre + ' ' + userInfo[0].apellido}
              </Text>
              <Text style={{fontSize: 16}}>{userInfo[0].email}</Text>
              {/* {renderEditar()} */}
            </View>

            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{fontSize: 24, paddingVertical: 10, fontWeight: 700}}
              >
                Tus Recetas Creadas
              </Text>

              <View>
                {recetas.map((receta, index) => {
                  return (
                    <View key={index} style={{marginVertical: 10}}>
                      <CardComidas
                        navigation={navigation}
                        name={receta.nombre}
                        time={receta.tiempoPreparacion}
                        imagen={getImagen(receta)}
                        id={receta.id}
                      />
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },

  profileAside: {
    backgroundColor: '#B5F2B0',
    height: 'fit',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessa: {
    color: 'red',
  },
});

export default Perfil;
