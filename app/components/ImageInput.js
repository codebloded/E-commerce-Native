import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import Colors from '../config/Colors'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"

export default function ImageInput({ imageUri, onChangeImage }) {
    const handleImagePicker = () => {
        if (!imageUri)
            selectImage();
        else Alert.alert("Delete", "Are you sure wnat to delete this image", [
            { text: "Yes", onPress: () => onChangeImage(null) },
            { text: "No" }
        ])
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled)
                onChangeImage(result.uri)
        } catch (err) {
            console.log("Error in reading the image ", err);
        }

    }
    return (
        <TouchableWithoutFeedback onPress={handleImagePicker}>
            <View style={styles.container}>
                {!imageUri && (<MaterialCommunityIcons name="camera" size={40} color={Colors.medium} />)}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: Colors.light,
        width: 100,
        overflow: "hidden",
        height: 100,
    },
    image: {
        width: '100%',
        height: '100%',
    }

})