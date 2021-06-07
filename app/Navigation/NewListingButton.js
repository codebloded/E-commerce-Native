import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../config/Colors'

export default function NewListingButton({ route, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>

            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" size={40} color={Colors.white} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.white,
        backgroundColor: Colors.primary,
        borderRadius: 40,
        height: 75,
        width: 75,
        bottom: 28,
        borderWidth: 10,
    }
})