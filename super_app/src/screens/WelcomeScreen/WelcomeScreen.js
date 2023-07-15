import {
    StyleSheet,
    Text,
    View,
    Image,
    useWindowDimensions,
  } from "react-native";
  import { React, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import Logo from "../../../assets/Buzzer.png";
  import CustomButton from "../../components/CustomButton/CustomButton";  
  
  const WelcomeScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
  
    const onIniciarPressed = () => {
      navigation.navigate("SignInScreen");
    };
    const onCrearPressed = () => {
      navigation.navigate("ValidationScreen");
      };
    const onForgotPasswordPressed = () => {
      navigation.navigate("ForgotPasswordScreen");
    };
  
    return (
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.2 }]} />
        <CustomButton text="Iniciar sesión" onPress={onIniciarPressed} type = "secondary1"/>
        <CustomButton text="Crear una cuenta" onPress={onCrearPressed} type = "secondary2"/>
        <CustomButton text="Olvidé mi contraseña" onPress={onForgotPasswordPressed} type="tertiary"/>
      </View>
    );
  };
  
  export default WelcomeScreen;
  
  const styles = StyleSheet.create({
    root: {
      alignItems: "center",
      padding: 20,
    },
  
    logo: {
      width: "50%",
      maxHeight: 300,
      resizeMode: "contain",
      marginTop: 250,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#313145",
    },
  });
  