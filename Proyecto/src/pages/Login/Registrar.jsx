import { StyleSheet, View, Image, ScrollView } from "react-native";
import ButtonCom from "../../components/Button";
import InputCom from "../../components/Input";
import constantes from "expo-constants";

export default function Registrar() {
  return (
    <ScrollView style={styles.scrollCont}>
      <View style={styles.contenedor_principal}>
        <Image
          style={styles.img}
          source={require("../../../assets/Logo.png")}
        ></Image>
        <View style={styles.contenedor}>
          <InputCom name={"Correo electronico"}></InputCom>
          <InputCom name={"Nombre"}></InputCom>
          <InputCom name={"Apellido"}></InputCom>
          <InputCom name={"Nombre de usuario"}></InputCom>
          <InputCom name={"Contraseña"}></InputCom>
          <InputCom name={"Confirmar contraseña"}></InputCom>
        </View>
        <ButtonCom name={"Registrar"}></ButtonCom>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor_principal: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
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
