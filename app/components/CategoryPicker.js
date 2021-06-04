import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from './Icon'


export default function CategoryPicker({ item, onPress }) {
    return <View style={styles.container}>
        <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
        <Text style={styles.label}>{item.label}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%",
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    }
})
