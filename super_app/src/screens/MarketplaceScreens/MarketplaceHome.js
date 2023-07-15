import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MarketplaceHome = () => {
  const [search, setSearch] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onPressFunction = () => {
    navigation.navigate("MarketplaceItem");
  };

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
      <View style={styles.botones}>
        <CustomButton text="Publica tu producto" type="small" />
        <CustomButton text="Productos en venta" type="small" />
      </View>
      <View style={styles.feed}>
        <View style={styles.publicacion}>
        <Pressable onPress={onPressFunction}>
          <Image
            source={require("../../../assets/carro.jpg")}
            style={styles.fotos}
          />
          <View style={styles.datos}>
            <Text style={styles.precio}>$300</Text>
            <Text style={styles.tituloPublicacion}>Ultimo modelo</Text>
          </View>
        </Pressable>
        </View>
        <View style={styles.publicacion}>
          <Image
            source={require("../../../assets/carro.jpg")}
            style={styles.fotos}
          />
          <View style={styles.datos}>
            <Text style={styles.precio}>$300</Text>
            <Text style={styles.tituloPublicacion}>Ultimo modelo</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MarketplaceHome;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "semibold",
    margin: 20,
    color: "#313145",
  },
  botones: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 5,
  },
  publicacion: {
    backgroundColor: "#D7E2F0",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: "40%",
  },
  tituloPublicacion: {
    fontSize: 16,
    color: "#313145",
  },
  textoPublicacion: {
    
    fontSize: 12,
    color: "#313145",
  },
  fotos: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  feed: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datos: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  precio: {
    fontSize: 14,
    color: "#313145",
    fontWeight: "bold",
    marginTop: 2,
  },
  buscar: {
    alignItems: "center",
    paddingTop: 10,
  },

});
