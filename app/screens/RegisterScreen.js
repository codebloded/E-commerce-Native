import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Formik } from "formik"
import * as Yup from "yup"

import Screen from '../components/Screen'
import AppFormFeild from '../components/AppFormFeild'
import SubmitButton from '../components/SubmitButton'
import AppFrom from '../components/AppFrom'

const validateSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})
export default function RegisterScreen() {

    return (
        <Screen>
            <AppFrom
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validateSchema}
            >

                <View style={styles.container}>

                    <AppFormFeild
                        autoCorrect={false}
                        secureTextEntry
                        autoCapitalize="none"
                        name="name"
                        placeholder="Name"
                        icon="account"
                    />

                    <AppFormFeild
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="email"
                        autoCapitlize="none"
                        placeholder="Email"
                        icon="email"
                        textContentType="emailAddress"
                    />


                    <AppFormFeild
                        autoCorrect={false}
                        secureTextEntry
                        autoCapitalize="none"
                        name="password"
                        placeholder="Password"
                        icon="lock"
                        textContentType="password"
                    />

                    <SubmitButton title="Register" />
                </View>


            </AppFrom>


        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})