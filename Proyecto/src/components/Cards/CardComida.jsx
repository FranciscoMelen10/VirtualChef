import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Reloj from "../../../assets/Reloj.png";
import Corazon from "../../../assets/Corazon.png";

export default function CardComidas({ name, time, imagen }) {
  return (
    <View style={styles.principal}>
      <Image source={imagen} style={styles.image}></Image>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.timeContainer}>
            <Image source={Reloj} style={styles.clockIcon} />
            <Text>{time + " minutos"}</Text>
          </View>
        </View>
        <Image source={Corazon} style={styles.corazon}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  clockIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  corazon: {
    width: 18,
  },
});
