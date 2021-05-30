import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text } from "react-native"

function WelcomeScreen(props) {
    return (
        <ImageBackground
            resizeMode="contain"
            style={styles.background}
            source={require("../assets/bg2.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/iconx.png")} />
                <Text>Sell What you don't need</Text>
            </View>

            <View style={styles.registerButton}></View>
            <View style={styles.loginButton}></View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },

    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "dodgerblue"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "green"
    }
})

export default WelcomeScreen;