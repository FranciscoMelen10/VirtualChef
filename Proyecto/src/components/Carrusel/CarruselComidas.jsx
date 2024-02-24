// import Corazon from "../../assets/Corazon.svg";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";

import CardComidas from "../Cards/CardComida";
import Ejemplo from "../../../assets/Ejemplo.png";
import Ejemplo2 from "../../../assets/Ejemplo2.png";
import Ejemplo3 from "../../../assets/Ejemplo3.png";

const WIDTH_WINDOW = Dimensions.get("window").width;
// const HEIGHT_WINDOW = Dimensions.get("window").height;

const FOODS_CONST = [
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo,
  },
  {
    name: "Pescado frito",
    time: "10",
    img: Ejemplo2,
  },
  {
    name: "Ensalada",
    time: "10",
    img: Ejemplo3,
  },
];

export default function CarruselComida() {
  return (
    <SafeAreaView style={styles.principal}>
      <ScrollView>
        {/* Desayuno */}
        <View style={styles.container}>
          <Text style={styles.text}>Desayuno</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {FOODS_CONST.map((data, index) => {
              return (
                <CardComidas
                  imagen={data.img}
                  name={data.name}
                  time={data.time}
                  key={data.name + index}
                ></CardComidas>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Almuerzo</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {FOODS_CONST.map((data, index) => {
              return (
                <CardComidas
                  imagen={data.img}
                  name={data.name}
                  time={data.time}
                  key={data.name + index}
                ></CardComidas>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Cena</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {FOODS_CONST.map((data, index) => {
              return (
                <CardComidas
                  imagen={data.img}
                  name={data.name}
                  time={data.time}
                  key={data.name + index}
                ></CardComidas>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    width: WIDTH_WINDOW,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    margin: 20,
    paddingVertical: 10,
    gap: 20,
  },
});
