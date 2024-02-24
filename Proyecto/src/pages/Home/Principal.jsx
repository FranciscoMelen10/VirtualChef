import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CarruselComida from "../../components/Carrusel/CarruselComidas";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CarruselComida></CarruselComida>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
