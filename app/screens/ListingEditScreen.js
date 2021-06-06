import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from "yup"
import { StyleSheet, View } from 'react-native'

import AppFormFeild from '../components/AppFormFeild'
import Screen from '../components/Screen'
import AppFrom from '../components/AppFrom'
import AppPicker from '../components/AppPicker'
import SubmitButton from '../components/SubmitButton'
import AppFormPicker from '../components/AppFormPicker'
import CategoryPicker from '../components/CategoryPicker'
import AppImagePikcer from '../components/AppImagePikcer'
import useLocation from '../hooks/useLocation'

const validateSchema = Yup.object().shape({
    title: Yup.string().min(1).required().label("Title"),
    price: Yup.number().max(10000).min(3).required().label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image")
})

export default function ListingEditScreen() {
    const location = useLocation()

    return (
        <Screen style={styles.container}>

            <AppFrom
                initialValues={{

                    title: "",
                    price: "",
                    category: null,
                    description: "",
                    images: []

                }}
                onSubmit={(values) => console.log(location)}
                validationSchema={validateSchema}
            >
                <View>
                    <AppImagePikcer name="images" />
                    <AppFormFeild
                        name="title"
                        placeholder="Title"
                        maxLength={255}
                    />
                    <AppFormFeild
                        name="price"
                        placeholder="Price"
                        keyboardType="numeric"
                        width="50%"
                        maxLength={8}
                    />
                    <AppFormPicker
                        placeholder="Category"
                        name="category"
                        numberOfColumn={3}
                        PickerItemComponent={CategoryPicker}
                        items={
                            [
                                { label: "Furniture", value: 1, icon: "apps", backgroundColor: "red" },
                                { label: "Painting", value: 2, icon: "lock", backgroundColor: "green" },
                                { label: "Laptops", value: 3, icon: "gmail", backgroundColor: "blue" },
                                { label: "Music and Movies", value: 4, icon: "vpn", backgroundColor: "black" },
                            ]
                        }


                    />
                    <AppFormFeild
                        name="description"
                        multiLine
                        name="description"
                        placeholder="Description"
                        numberOfLines={3}
                    />
                    <SubmitButton title="Post" />

                </View>
            </AppFrom>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        padding: 10,
    }
})