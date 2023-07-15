import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onGrupoPressed = () => {
    navigation.navigate("AllChatsScreen");
  };

  const onHomePressed = () => {
    navigation.navigate("HomeScreen");
  };

  const onQRPressed = () => {
    navigation.navigate("QRHome");
  };

  const onChatPressed = () => {
    navigation.navigate("AllChatsScreen");
  };

  const onMarketPressed = () => {
    navigation.navigate("MarketplaceHome");
  };
  

  return (
    <View>
      <Text style={styles.welcome}>
        ¡Hola! Esperamos que te encuestres bien el día de hoy
      </Text>
      <Text style={styles.titulo}>Tus chats recientes</Text>
      <ScrollView>
        <View style={styles.botonesChats}>
          <CustomButton text="Peloteo" onPress={onGrupoPressed} type="home" />
          <CustomButton text="Mz F" type="home" />
          <CustomButton text="Seguridad" type="home" />
        </View>
      </ScrollView>
      <Text style={styles.titulo}>Últimas notificaciones</Text>
      <View style={styles.notificacion}>
        <Text style={styles.tituloNotificacion}>
          Pago de alícuotas MAYO 2023
        </Text>
        <Text style={styles.tiempo}>Hace 40 minutos...</Text>
        <Text style={styles.textoNotificacion}>
          Te recordamos realizar los pagos de tus alícuotas para este mes de
          mayo
        </Text>
      </View>
      <View style={styles.notificacion}>
        <Text style={styles.tituloNotificacion}>
          Pago de alícuotas MAYO 2023
        </Text>
        <Text style={styles.tiempo}>Hace 40 minutos...</Text>
        <Text style={styles.textoNotificacion}>
          Te recordamos realizar los pagos de tus alícuotas para este mes de
          mayo
        </Text>
      </View>
        <Text style={styles.titulo}>nav improv</Text>
      <View style={styles.nav}>
        <CustomButton text="QR" type="options" onPress={onQRPressed}/>
        <CustomButton text="Chat" type="options" onPress={onChatPressed}/>
        <CustomButton text="Market" type="options" onPress={onMarketPressed}/>
    </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 18,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    color: "#313145",
    backgroundColor: "#D7E2F0",
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "semibold",
    margin: 20,
    color: "#313145",
  },
  notificacion: {
    backgroundColor: "#DFDFDF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: "#313145",
  },
  tituloNotificacion: {
    fontSize: 18,
    fontWeight: "500",
    color: "#313145",
    paddingTop: 10,
  },
  tiempo: {
    fontSize: 10,
    color: "#6F767D",
  },
  textoNotificacion: {
    paddingTop: 10,
    fontSize: 14,
    color: "#313145",
  },
  botonesChats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
  },
  nav: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    },

});
