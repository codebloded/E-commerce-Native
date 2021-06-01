import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../config/Colors'


export default function ListSaperator() {
    return (
        <View style={styles.saperator}></View>
    )
}

const styles = StyleSheet.create({
    saperator: {
        width: "100%",
        height: 1,
        backgroundColor: Colors.light
    }
})