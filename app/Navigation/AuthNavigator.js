import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import WelcomeScreen from "../screens/WelcomeScreen"
import RegisterScreen from "../screens/RegisterScreen"
import LoginScreen from "../screens/LoginScreen"

const Stack = createStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}
export default AuthNavigator;