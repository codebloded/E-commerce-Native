import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Screen from "./app/components/Screen"
import * as ImagePicker from 'expo-image-picker';
import AppButton from './app/components/AppButton';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';

function App(props) {
  return (
    <ListingEditScreen />
  );
}


export default App;