import React from 'react';
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

function App(props) {
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="First Name" />
    </Screen>

  );
}

export default App;