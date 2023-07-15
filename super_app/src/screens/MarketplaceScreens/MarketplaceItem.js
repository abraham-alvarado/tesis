import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MarketplaceItem = () => {
  const [search, setSearch] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.buscar}>
        <CustomInput
          placeholder="Buscar"
          value={search}
          setValue={setSearch}
        ></CustomInput>
      </View>
      <Text style={styles.titulo}>Marketplace</Text>
      <View style={styles.body}>
        <View style={styles.fotos}>
          <Image
            source={require("../../../assets/carro.jpg")}
            style={styles.fotos}
          />
        </View>
        <View style={styles.datos}>
          <Text style={styles.precio}>$3000</Text>
          <Text style={styles.tituloPublicacion}>
            Carro último modelo 1200KM rodados
          </Text>
        </View>
        <View style={styles.descripcion}>
          <Text style={styles.descripcionTexto}>
          Vendo carro último modelo solo ha rodado 1200km pueden probarlo y
            decidir si compralo o no Vendo carro último modelo solo ha rodado 1200km pueden probarlo y
            decidir si compralo o no endo carro último modelo solo ha rodado 1200km pueden probarlo y
            decidir si compralo o no
          </Text>
        </View>
        <View style={styles.datosVendedor}>
          <Text style={styles.tituloVenta}>Vendedor:</Text>
          <Text style={styles.bodyVenta}>Juan Juanes Juanes</Text>
          <Text style={styles.tituloVenta}>Dirección:</Text>
          <Text style={styles.bodyVenta}>MZ F Villa 10</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MarketplaceItem;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "semibold",
    margin: 20,
    color: "#313145",
  },
  buscar: {
    alignItems: "center",
    paddingTop: 10,
  },
  fotos: {
    width: 340,
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
  body: {
    alignItems: "center",
  },
  datos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    marginTop: 20,
    paddingBottom: 15,
  },
  precio: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#313145",
    paddingRight: 10,
  },
  tituloPublicacion: {
    fontSize: 18,
    color: "#313145",
  },
  descripcion: {
    alignItems: "center",
    backgroundColor: "#D7E2F0",
    borderRadius: 10,
    padding: 15,
    width: 340,
  },
  descripcionTexto: {
    fontSize: 18,
    color: "#313145",
    textAlign: "justify",
  },
  datosVendedor: {
    backgroundColor: "#313145",
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    width: "auto",
    marginTop: 20,
    alignItems: "center",    
  },
  tituloVenta: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  bodyVenta: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
