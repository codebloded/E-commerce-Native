import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Colors from '../config/Colors'

export default function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can" size={35} color={Colors.white} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    deleteIcon:
    {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.danger,
        width: 70
    }
})