import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Icon from '../components/Icon'
import ListItems from '../components/ListItems'
import ListSaperator from '../components/ListSaperator'
import Screen from '../components/Screen'
import Colors from '../config/Colors'


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: Colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: Colors.secondary
        }
    }
]

export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.conatiner}>
                <ListItems
                    title="Rohan Kumar"
                    subTitle="codebloded@gmail.com"
                    image={require('../assets/bgimg.jpg')}
                />
            </View>
            <View style={styles.conatiner}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListSaperator}
                    renderItem={({ item }) => (
                        <ListItems
                            title={item.title}
                            ImageComponent={<Icon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />}
                        />
                    )}
                />

            </View>
            <ListItems
                title="Logout"
                ImageComponent={<Icon
                    name="logout"
                    size={40}
                    backgroundColor="gold"
                />}


            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.light
    },
    conatiner: {
        marginVertical: 10
    }
})