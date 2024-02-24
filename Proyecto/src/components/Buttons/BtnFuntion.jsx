import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BtnFuntion = ({ name, funtionClick }) => {
  return (
    <TouchableOpacity onPress={funtionClick} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    backgroundColor: "#246C2C",
    borderRadius: 24,
    width: 200,
    height: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  }
});

export default BtnFuntion;
