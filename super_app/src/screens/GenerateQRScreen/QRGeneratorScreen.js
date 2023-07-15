import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import QRCode from 'react-native-qrcode-svg'
import svg from 'react-native-svg'

const QRGeneratorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1} >Código Qr Generado</Text>
      <Text style={styles.texto2} >Tiene una validez de 10 minutos</Text>
        <QRCode value="https://i.ytimg.com/vi/4lEZwyEob3o/maxresdefault.jpg" size={250} backgroundColor='#fff' style={styles.qr} />
        <Text style={styles.texto2} >Puedes utilizar este código para el ingreso por garita a la urbanización o a las áreas sociales</Text>
    <CustomButton text="Volver" type="primary" />
    </View>
  )
}

export default QRGeneratorScreen

const styles = StyleSheet.create({
    container: {
        textAlign: "center ",
        alignItems: "center",
        },
    texto1: {
        fontSize: 18,
        color: "#313145",
        fontWeight: "bold",
        paddingTop: 100,
        },
    texto2: {
        fontSize: 18,
        padding: 20,
        color: "#313145",
        },


})