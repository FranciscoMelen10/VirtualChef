import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import ButtonCom from "../../components/Buttons/BtnFuntion";
import InputCom from "../../components/Inputs/Input";
import constantes from "expo-constants";
import { Iconos } from "../../components/Icon/constante-svg";

const HEIGHT_WINDOW = Dimensions.get("window").height;

export default function Registrar({ navigation }) {
  return (
    <ScrollView style={styles.scrollCont}>
      <View style={styles.contenedor_principal}>
        {Iconos.LogoXL}
        <View style={styles.contenedor}>
          <InputCom name={"Correo electronico"}></InputCom>
          <InputCom name={"Nombre"}></InputCom>
          <InputCom name={"Apellido"}></InputCom>
          <InputCom name={"Nombre de usuario"}></InputCom>
          <InputCom name={"Contraseña"}></InputCom>
          <InputCom name={"Confirmar contraseña"}></InputCom>
        </View>
        <ButtonCom
          name={"Registrar"}
          funtionClick={() => navigation.navigate("Login")}
        ></ButtonCom>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor_principal: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: HEIGHT_WINDOW,
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
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: 5,
  },
});
