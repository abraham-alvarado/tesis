import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomInput = ({ value, setValue, placeholder, inputMode, autoCapitalize, keyboardType, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      inputMode={inputMode ? inputMode : "none"}
      autoCapitalize={autoCapitalize ? autoCapitalize : "sentences"}
      keyboardType={keyboardType ? keyboardType : "default"}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E9E9E9",
    width: "80%",
    padding: 12,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  input: {},
});

