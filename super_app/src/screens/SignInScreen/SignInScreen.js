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
import { login } from "../../services/httpService";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const onSignInPressed = async () => {
    //validar que el usuario y contraseña sean correctos
    var result = await login(username, password);
    var data = result['data'];
    console.log(data);

    if (data['success'] == true) {
      navigation.navigate("HomeScreen");
    } else {
      // Mostrar alerta de que el usuario o contraseña son incorrectos
      alert("Usuario o contraseña incorrectos");
    }

    
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.2 }]} />
      <Text style={styles.title}>Inicia sesión</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        inputMode={"email"}
        autoCapitalize={"none"}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton text="Continuar" onPress={onSignInPressed} />
      <CustomButton text="Olvidé mi contraseña" onPress={onForgotPasswordPressed} type="tertiary"/>
    </View>
  );
};

export default SignInScreen;

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
