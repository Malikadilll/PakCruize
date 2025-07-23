// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import 'react-native-reanimated';




import StackNavigator from './Navigation/Stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <StackNavigator/>
      
    </NavigationContainer>
  );
}
