import { StyleSheet, View, Image } from 'react-native';
import ButtonCom from '../components/Button';
import InputCom from '../components/Input';
import Enlace from '../components/Enlace';

export default function Login() {
    return (
      <View style={styles.contenedor_principal}>
        <Image
          style={styles.img}
          source={require("../../assets/Logo.png")}>
        </Image>
        <View style={styles.contenedor}>
          <InputCom name={"Nombre de usuario"}></InputCom>
          <InputCom name={"Contraseña"}></InputCom>
        </View>
        <View style={styles.contenedor}>
          <ButtonCom name={"Iniciar sesión"}></ButtonCom>
          <Enlace titulo={"Crear cuenta"} url={"/"}></Enlace>
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
    },
    img: {
      width: 200,
      height: 200,
      marginBottom: 20
    },
    contenedor: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 10
    }
  });