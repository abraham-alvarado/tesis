import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const QRHome = () => {
  const navigation = useNavigation();

  const onGenerarPressed = () => {
    navigation.navigate("QRGeneratorScreen");
  };
  
  return (
    <View>
      <Text style={styles.titulo}>Código QR</Text>
      <View style={styles.container}>
        <Text style={styles.texto1}> Tiene una validez de 10 minutos</Text>
        <Text style={styles.texto2}>
          {" "}
          Puedes utilizar este código para el ingreso por garita a la
          urbanización o a las áreas sociales
        </Text>
        <CustomButton text="Generar código QR" type="primary" onPress={onGenerarPressed} />
        <Text style={styles.texto2}>
          {" "}
          Recuerda escanear este código en los puntos de entrada localizados en
          la urbanización
        </Text>
      </View>
    </View>
  );
};

export default QRHome;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "semibold",
    padding: 20,
    color: "#313145",
  },
  texto1: {
    fontSize: 18,
    color: "#313145",
    fontWeight: "bold",
  },
  texto2: {
    fontSize: 18,
    padding: 20,
    color: "#313145",
    textAlign: "center",
  },
  container: {
    textAlign: "center ",
    alignItems: "center",
  },
});
