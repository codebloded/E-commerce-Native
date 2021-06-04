import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Colors from '../config/Colors'

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
            <TextInput style={styles.input}  {...otherProps} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginBottom: 10
    },
    icon: {
        marginRight: 10
    },
    input: {
        fontSize: 18,
        fontWeight: "500",
        color: Colors.dark
    }
})