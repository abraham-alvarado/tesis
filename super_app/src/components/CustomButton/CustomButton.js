import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type = "primary" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    padding: 12,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical: 5,
    alignItems: "center",
  },
  container_primary: {
    width: "60%",
    backgroundColor: "#313145",
  },
  container_options: {
    width: "auto",
    borderWidth: 1,
    borderColor: "#313145",
  },
  text_options: {
    color: "#000",
    fontSize: 14,
  },
  container_optionsPressed: {
    width: "auto",
    backgroundColor: "#313145",
  },
  text_optionsPressed: {
    color: "#fff",
    fontSize: 14,
  },
  container_small: {
    width: "auto",
    backgroundColor: "#313145",
    marginRight: 20,
  },
  container_secondary1: {
    width: "60%",
    backgroundColor: "#D7E2F0",
  },
  container_secondary2: {
    width: "60%",
    backgroundColor: "#D9D9D9",
    marginTop: 15,
  },
  container_tertiary: {
    width: "60%",
  },
  text: {
    color: "#D9D9D9",
  },
  container_tertiary2: {
    width: "60%",
  },
  container_home: {
    width: "auto",
    height: 150,
    backgroundColor: "#A5E39F",
    borderRadius: 20,
    flexBasis: "30%",
  },
  text_home: {
    color: "#313145",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  text_primary: {
    color: "#D9D9D9",
    fontSize: 16,
  },
  text_secondary1: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  text_secondary2: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  text_tertiary: {
    color: "#0487FF",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  text_tertiary2: {
    color: "#313145",
    fontSize: 15,
    fontWeight: "bold",
  },
});
