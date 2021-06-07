import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import Card from '../components/Card'
import Screen from '../components/Screen'
import Colors from '../config/Colors'
import listingApi from "../api/listings"


export default function ListingScreen({ navigation }) {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        loadListings()
    }, [])

    const loadListings = async () => {
        const response = await listingApi.getListings();
        setListings(response.data);
        console.log(response.data[0].images[0].url)
    }
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={list => list.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate("ListingDetails", item)}
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