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

const SignUpScreen = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    //se manda la info a la base de datos para que el admin la apruebe
    navigation.navigate("HomeScreen");
  };

  const onTermUsoPressed = () => {
    console.warn("Términos de Uso pressed");
  };

  const onPolPriPressed = () => {
    console.warn("Política de Privacidad pressed");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Crea tu cuenta</Text>
      <CustomInput placeholder="Nombres" value={nombre} setValue={setNombre} />
      <CustomInput
        placeholder="Apellidos"
        value={apellido}
        setValue={setApellido}
      />
      <CustomInput
        placeholder="Celular"
        value={celular}
        setValue={setCelular}
        keyboardType={"phone-pad"}
        inputMode={"tel"}
      />
      <CustomInput
        placeholder="Cédula"
        value={cedula}
        setValue={setCedula}
        keyboardType={"number-pad"}
        inputMode={"text"}
      />
      <CustomInput
        placeholder="Correo"
        value={correo}
        setValue={setCorreo}
        inputMode={"email"}
        autoCapitalize={"none"}
      />
      <CustomInput
        placeholder="Contraseña"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomInput
        placeholder="Repite tu contraseña"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry
      />
      <CustomButton text="Continuar" onPress={onSignInPressed} />
      <Text style={styles.texto}>
        Al continuar, confirmas que aceptas los{" "}
        <Text style={styles.link} onPress={onTermUsoPressed}>
          Términos de Uso
        </Text>{" "}
        y{" "}
        <Text style={styles.link} onPress={onPolPriPressed}>
          Política de Privacidad
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: "50%",
    maxHeight: 300,
    resizeMode: "contain",
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#313145",
  },
  texto: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#313145",
    marginTop: 20,
  },
  link: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0487FF",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
