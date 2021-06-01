import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import Card from '../components/Card'
import Screen from '../components/Screen'
import Colors from '../config/Colors'





const listings = [
    {
        id: 1,
        title: "Amazing Keyboard",
        price: "100",
        image: require('../assets/v1.jpg')
    },
    {
        id: 2,
        title: "Amazing Mouse",
        price: "100",
        image: require('../assets/v1.jpg')
    },
    {
        id: 3,
        title: "Amazing Laptop",
        price: "100",
        image: require('../assets/v1.jpg')
    }
]
export default function ListingScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={list => list.id}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    )
}
const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: Colors.light

    }
})