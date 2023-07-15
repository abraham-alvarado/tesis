import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { React, useState } from "react";
import Logo from "../../../assets/BuzzerSolo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";


const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onEnviarPressed = () => {
    //se cambia la contaseña
    navigation.navigate("SignInScreen");
  };

  const onVolverPressed = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.2 }]} />
      <Text style={styles.title}>Ingresa tu nueva contraseña</Text>
      <CustomInput
        placeholder="Código de verificación"
        value={code}
        setValue={setCode}
        />
              <CustomInput
        placeholder="Nueva contraseña"
        value={newPassword}
        setValue={setNewPassword}
        />
      <CustomButton text="Enviar" onPress={onEnviarPressed} />
      <CustomButton
        text="Volver a inicio de sesión"
        onPress={onVolverPressed}
        type="tertiary2"
      />
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: "50%",
    maxHeight: 300,
    resizeMode: "contain",
    marginTop: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#313145",
  },
});
