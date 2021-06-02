import React, { useState } from 'react';
import { View } from 'react-native';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetails from './app/components/ListingDetails';
import Messages from './app/components/Messages';
import Screen from './app/components/Screen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Icon from "./app/components/Icon"
import ListItems from './app/components/ListItems';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const products = [
  { label: "Furniture", value: 1 },
  { label: "Clothings", value: 2 },
  { label: "Cameras", value: 3 },
  { label: "Laptops", value: 4 },
]
function App(props) {
  const [category, setCatergory] = useState()
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCatergory(item)}
        items={products}
        icon="apps"
        placeholder="Category" />
      <AppTextInput icon="email" placeholder="First Name" />
    </Screen>

  );
}

export default App;