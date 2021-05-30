import React from 'react';
import { ImageBackground, View, StyleSheet, Image } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.background}>
            <View style={styles.cancelIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/v1.jpg")} />
        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#000"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    cancelIcon: {
        width: 50,
        height: 50,
        backgroundColor: "green",
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: "red",
        position: "absolute",
        top: 40,
        right: 30,
    }
})
export default ViewImageScreen;