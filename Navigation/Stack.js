// Stack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CarDetailsScreen from '../screens/CarDetails';
import Home from '../screens/Home';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import MainScreen from '../screens/Menu';
import UploadCarScreen from '../screens/uploadCarScreen';
import ViewCarsScreen from '../screens/ViewCarsScreen';
import SplashScreen from '../screens/SplashScreen';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import SearchCarsScreen from '../screens/SearchCarScreen';
import LoadingScreen from '../screens/Loading';
import LoadingScreen2 from '../screens/Loading2';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
      <Stack.Screen name="Main" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
         <Stack.Screen name="UploadCarScreen" component={UploadCarScreen} options={{headerShown:false}} />
         <Stack.Screen name="ViewCarsScreen" component={ViewCarsScreen} options={{headerShown:false}} />
         <Stack.Screen name="CarDetails" component={CarDetailsScreen} options={{headerShown:false}} />
         <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
         <Stack.Screen name="Search" component={SearchCarsScreen} options={{headerShown:false}} />
         <Stack.Screen name="Loading1" component={LoadingScreen} options={{headerShown:false}} />
         <Stack.Screen name="Loading2" component={LoadingScreen2} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
