import React from 'react';
import { View } from 'react-native';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

function App(props) {
  return (
    <View style={{
      backgroundColor: "#f8f4f4",
      padding: 20,
      paddingTop: 100,
    }}>
      <Card
        title="Amazing Keyboard"
        subTitle="$100"
        image={require("./app/assets/v1.jpg")}
      />
    </View>
  );
}

export default App;