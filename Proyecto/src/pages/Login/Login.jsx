import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import ButtonCom from "../../components/Buttons/BtnFuntion";
import InputCom from "../../components/Inputs/Input";
import { Iconos } from "../../components/Icon/constante-svg";

export default function Login({ navigation }) {
  return (
    <View style={styles.contenedor_principal}>
      {Iconos.LogoXL}
      <View style={styles.contenedor}>
        <InputCom name={"Nombre de usuario"}></InputCom>
        <InputCom name={"Contraseña"}></InputCom>
      </View>
      <View style={styles.contenedor}>
        <ButtonCom
          name={"Iniciar sesión"}
          funtionClick={() => navigation.navigate("Principal")}
        ></ButtonCom>
        <TouchableOpacity onPress={() => navigation.navigate("Registrar")}>
          <Text style={styles.link}>Crear un cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor_principal: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  contenedor: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: 10,
  },
  link: {
    marginTop: 10,
    color: "#246C2C",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});
