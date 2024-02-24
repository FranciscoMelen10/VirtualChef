import { StyleSheet, View, Image, ScrollView } from "react-native";
import ButtonCom from "../../components/Buttons/Button";
import InputCom from "../../components/Inputs/Input";
import constantes from "expo-constants";

export default function Registrar({ navigation }) {
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
