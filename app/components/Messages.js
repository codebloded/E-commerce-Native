import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ListItem from "../components/ListItems"
import Colors from '../config/Colors'
import ListItemDeleteAction from './ListItemDeleteAction'
import ListSaperator from "./ListSaperator"

import Screen from './Screen'


const initialMessages = [
    {
        id: 1,
        title: "this is one",
        description: "This is description 1",
        image: require('../assets/bgimg.jpg')

    },
    {
        id: 2,
        title: "this is two",
        description: "This is description 2",
        image: require('../assets/bgimg.jpg')

    },
    {
        id: 3,
        title: "this is three",
        description: "This is description 3",
        image: require('../assets/bgimg.jpg')

    }
]
export default function Messages() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = (message) => {
        const newMessage = messages.filter(m => m.id !== message.id);
        setMessages(newMessage);
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("tapped")}
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}

                />}
                ItemSeparatorComponent={() => <ListSaperator />}
                refreshing={refreshing}
                onRefresh={() => {

                    setMessages([
                        {
                            id: 2,
                            title: "this is two",
                            description: "This is description 2",
                            image: require('../assets/bgimg.jpg')

                        }
                    ])
                }
                }
            />

        </Screen>
    )
}
