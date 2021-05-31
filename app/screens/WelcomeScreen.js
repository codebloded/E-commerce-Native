import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text } from "react-native"
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            resizeMode="contain"
            style={styles.background}
            source={require("../assets/bg2.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/iconx.png")} />
                <Text style={styles.tagLine}>Sell What you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" />
                <AppButton title="register" color="secondary" />
            </View>

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
    tagLine: {
        fontSize: 20,
        fontWeight: "bold",

    },

    buttonContainer: {
        padding: 15,
        width: "100%",
    }
})

export default WelcomeScreen;