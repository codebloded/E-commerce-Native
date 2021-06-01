import React from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import Colors from '../config/Colors'
import Swipeable from "react-native-gesture-handler/Swipeable"

export default function ListItems({ title, image, subTitle, ImageComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
                <View style={styles.conatiner}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle} >{subTitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: Colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontSize: 18,
        fontWeight: "500",

    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.medium
    }

})