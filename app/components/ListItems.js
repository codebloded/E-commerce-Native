import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Colors from '../config/Colors'

export default function ListItems({ title, image, price }) {
    return (
        <View style={styles.conatiner}>
            <Image style={styles.image} source={image} />
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price} >{price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flexDirection: "row",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "500",

    },
    price: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.medium
    }

})