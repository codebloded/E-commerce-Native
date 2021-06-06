import React, { useRef } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ImageInput from './ImageInput'

export default function ImageInputList({ imageUris = [], onAddImage, removeImage }) {
    const scrollView = useRef();

    return (
        <View>

            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>

                <View style={styles.container}>
                    {imageUris.map(uri =>
                        <View key={uri} style={styles.image}>
                            <ImageInput imageUri={uri} key={uri} onChangeImage={() => removeImage(uri)} />
                        </View>
                    )}

                    <View style={styles.image}>
                        <ImageInput
                            onChangeImage={(uri) => onAddImage(uri)}
                        />
                    </View>
                </View>

            </ScrollView >
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10
    },
    image: {
        marginHorizontal: 5
    }
})