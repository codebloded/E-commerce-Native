import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: "500",
        padding: 20,
    }
})