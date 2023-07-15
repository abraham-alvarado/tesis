import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";

const AllChatsScreen = () => {
  const [search, setSearch] = useState("");

  const navigation = useNavigation();

  const onNuevoGrupoPressed = () => {
    navigation.navigate("SelectGroupsScreen");
  };

  return (
    <View>
      <View style={styles.root}>
        <CustomInput
          placeholder="Buscar"
          value={search}
          setValue={setSearch}
        ></CustomInput>
      </View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Chats</Text>
        <CustomButton
          text="Nuevo grupo"
          onPress={onNuevoGrupoPressed}
          type="small"
        />
      </View>
      <View style={styles.grupo}>
        <Text style={styles.tiempo}>9:40</Text>
        <Text style={styles.tituloGrupo}>Pago de alícuotas MAYO 2023</Text>
        <Text style={styles.textoGrupo}>
          Te recordamos realizar los pagos de tus alícuotas para este mes de
          mayo
        </Text>
      </View>
    </View>
  );
};

export default AllChatsScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingTop: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "semibold",
    margin: 20,
    color: "#313145",
  },
  grupo: {
    backgroundColor: "#A5E39F",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: "#313145",
  },
  tituloGrupo: {
    fontSize: 18,
    fontWeight: "500",
    color: "#313145",
  },
  tiempo: {
    fontSize: 10,
    color: "#6F767D",
    textAlign: "right",
  },
  textoGrupo: {
    fontSize: 14,
    color: "#313145",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
