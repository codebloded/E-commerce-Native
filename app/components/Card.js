import { setStatusBarStyle } from 'expo-status-bar'
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Colors from '../config/Colors'

export default function Card({ title, subTitle, imageUrl, onPress }) {
    console.log(imageUrl)
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        overflow: "hidden",
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom: 7,
        fontSize: 18,
        fontWeight: "bold"

    },
    subTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.primary,
    },

    detailsContainer: {
        padding: 20,
    },


})
