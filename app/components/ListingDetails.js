import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Colors from '../config/Colors'
import ListItems from './ListItems'

export default function ListingDetails({ title, price, image }) {
    return (
        <View>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>

                <View style={styles.userContainer}>
                    <ListItems
                        image={require("../assets/bgimg.jpg")}
                        title="Codebloded ronnie"
                        price="6 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",

    },
    price: {
        fontSize: 24,
        color: Colors.primary,
        fontWeight: "bold",
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    }

})