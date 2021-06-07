import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, Button } from 'react-native';
import Screen from "./app/components/Screen"
import * as ImagePicker from 'expo-image-picker';
import AppButton from './app/components/AppButton';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AuthNavigator from './app/Navigation/AuthNavigator';
import navigationTheme from './app/Navigation/navigationTheme';
import AppNavigator from './app/Navigation/AppNavigator';

const Tweet = ({ navigation }) => (
  <Screen>
    <Text>Tweet</Text>
    <Button title="Go" onPress={() => navigation.navigate("Tweet Details", { msg: "Hello this is Rohan" })} />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: "dodgerblue",
        },
        headerTintColor: "white"
      }
    }>
      <Stack.Screen name="Tweet" component={Tweet} />
      <Stack.Screen name="Tweet Details" component={TweetDetails} />
    </Stack.Navigator>
  )
}
const Account = () => <Screen><Text>Account</Text></Screen>
const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeBackgroundColor: "purple",
      activeTintColor: "white",
      inactiveBackgroundColor: "grey",
      inactiveTintColor: "white"
    }}>
      <Tab.Screen name="Feeds" component={Tweet} options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
      }} />
      <Tab.Screen name="Account" component={Account} options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
      }} />
      <Tab.Screen name="tweet Details" component={TweetDetails} options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
      }} />
    </Tab.Navigator>
  )
}

function App(props) {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}


export default App;