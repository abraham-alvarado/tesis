import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { validateCode } from "../../services/httpService";
import { useState } from "react";

const ValidationScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState("");

  const onValidarPressed = async () => {
    var result = await validateCode(code);
    if (result["data"]) {
      if (result["data"]["success"]) {
        navigation.navigate("SignUpScreen");
      } else {
        if (result["data"]["address"]) {
          alert("El código ha sido utilizado demasiadas veces");
        } else {
          alert("El código no es válido");
        }
      }
    } else {
      alert("Error: " + result["message"]);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Código de Validación</Text>
      <Text style={styles.text}>
        Ingresa el código de validación que te fue otorgado
      </Text>
      <CustomInput placeholder="Código de Validación" setValue={setCode} />
      <CustomButton text="Validar" onPress={onValidarPressed} />
    </View>
  );
};

export default ValidationScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    color: "#313145",
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: "#313145",
    marginTop: 20,
  },
});
