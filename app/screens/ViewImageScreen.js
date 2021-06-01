import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

function ViewImageScreen(props) {
    return (
        <View style={styles.background}>
            <View style={styles.cancelIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
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
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    }
})
export default ViewImageScreen;