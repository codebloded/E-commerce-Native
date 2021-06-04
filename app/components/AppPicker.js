import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Colors from '../config/Colors'
import Screen from './Screen'
import PickerItem from './PickerItem'

export default function AppPicker({ icon, items, selectedItem, numberOfColumn = 1, onSelectItem, PickerItemComponent = PickerItem, placeholder }) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>

                <View style={styles.container}>
                    <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        style={styles.icon} />
                    <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        style={styles.icon} />
                </View>

            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    numColumns={numberOfColumn}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => <PickerItemComponent
                        item={item}
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false)
                            onSelectItem(item)
                        }}

                    />}
                />
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.light,
        borderRadius: 25,
        width: "100%",
        flexDirection: "row",
        padding: 15,
        marginBottom: 10
    },
    icon: {
        marginRight: 10
    },
    input: {
        fontSize: 18,
        fontWeight: "500",
        color: Colors.dark
    },
    text: {
        flex: 1,
        fontSize: 18
    }
})