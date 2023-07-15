import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";

const SelectGroupsScreen = () => {
  const navigation = useNavigation();

  const onSiguientePressed = () => {
    navigation.navigate("AllChatsScreen");
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Chats</Text>
        <Text style={styles.texto}>Elige tus intereses y actividades</Text>
      </View>
      <View>
        <Text style={styles.categoria}>Deportes</Text>
        <View style={styles.botonesChats}>
          <CustomButton text="⚽Futbol" type={"options"} />
          <CustomButton text="🏀Baloncesto" type="options" />
          <CustomButton text="🎾Tenis" type="options" />
          <CustomButton text="🏊Natacion" type="options" />
          <CustomButton text="🏐Voleibol" type="options" />
          <CustomButton text="🚲Ciclismo" type="options" />
        </View>
      </View>

      <View>
        <Text style={styles.categoria}>Hobbies</Text>
        <View style={styles.botonesChats}>
          <CustomButton text="📘Lectura" type="optionsPressed"  />
          <CustomButton text="🌺Jardinería" type="options" />
          <CustomButton text="👨‍🍳Gastronomía" type="options" />
          <CustomButton text="🐦Avistamiento de aves" type="options" />
          <CustomButton text="🎲Juegos de mesa" type="optionsPressed"  />
        </View>
      </View>

      <View>
        <Text style={styles.categoria}>Intereses</Text>
        <View style={styles.botonesChats}>
          <CustomButton text="🥩Parrilladas" type="optionsPressed"   />
          <CustomButton text="🚗Vehículos" type="options" />
          <CustomButton text="🎉Eventos" type="options" />
          <CustomButton text="💃Baile" type="options" />
          <CustomButton text="🤑Emprender" type="options" />
          <CustomButton text="🚕Shared rides" type="options" />
        </View>
      </View>
      <View style={styles.botones}>
      <CustomButton text="Siguiente" type="small" onPress={onSiguientePressed}/>
      </View>
    </View>
  );
};

export default SelectGroupsScreen;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "semibold",
    margin: 20,
    color: "#313145",
  },
  texto: {
    fontSize: 18,
    marginLeft: 20,
    color: "#313145",
  },
  categoria: {
    fontSize: 22,
    margin: 20,
    color: "#313145",
    fontWeight: "semibold",
  },
  botonesChats: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  botones: {
    alignItems: "center",
    marginTop: 20,
  },
});
