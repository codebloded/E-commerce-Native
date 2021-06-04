import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Formik } from "formik"
import * as Yup from "yup"

import Screen from '../components/Screen'
import AppFormFeild from '../components/AppFormFeild'
import SubmitButton from '../components/SubmitButton'
import AppFrom from '../components/AppFrom'

const validateSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})
export default function LoginScreen() {

    return (
        <Screen>
            <Image style={styles.icon} source={require("../assets/iconx.png")} />

            <AppFrom
                initialValues={{ email: "", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validateSchema}
            >

                <View style={styles.container}>

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

                    <SubmitButton title="Login" />
                </View>


            </AppFrom>


        </Screen>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 80,
        height: 80,
        marginVertical: 40,
        alignSelf: 'center'
    },
    container: {
        padding: 10,
    }
})