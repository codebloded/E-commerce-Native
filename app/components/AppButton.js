import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../config/Colors'


export default function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: Colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: Colors.primary,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginVertical: 10,

    },
    text: {
        color: Colors.white,
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: "bold"
    }
})
