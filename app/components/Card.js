import { setStatusBarStyle } from 'expo-status-bar'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Colors from '../config/Colors'

export default function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        overflow: "hidden",
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
