import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../config/Colors'

export default function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null
    return (
        <Text style={styles.error}>{error}</Text>
    )
}

const styles = StyleSheet.create({
    error: {
        color: "red"
    }
})