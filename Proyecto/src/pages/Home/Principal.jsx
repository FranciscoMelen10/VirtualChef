import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CarruselComida from "../../components/Carrusel/CarruselComidas";
import { SafeAreaView } from "react-native-safe-area-context";
import InputIcon from "../../components/Inputs/InputIcon";
import { Iconos } from "../../components/Icon/constante-svg";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InputIcon
        placeholder={"Buscar recetas..."}
        icono={Iconos.Buscar}
      ></InputIcon>
      <CarruselComida></CarruselComida>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default Home;
