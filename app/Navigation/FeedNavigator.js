import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import ListingScreen from "../screens/ListingScreen";
import ListingDetails from "../components/ListingDetails"

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Listings" component={ListingScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetails} />
    </Stack.Navigator>
)

export default FeedNavigator;