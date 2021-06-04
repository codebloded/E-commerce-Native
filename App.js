import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Screen from "./app/components/Screen"
import * as ImagePicker from 'expo-image-picker';
import AppButton from './app/components/AppButton';

function App(props) {
  const [imageUri, setImageUri] = useState()
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) {
      return alert("You must allow the permission to make ascess the photo on this device")
    }
  }
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled)
        setImageUri(result.uri)
    } catch (err) {
      console.log("Error in reading the image ", err);
    }

  }
  useEffect(() => {
    requestPermission();
  }, [])
  return (
    <Screen>
      <AppButton title="Select" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}

export default App;