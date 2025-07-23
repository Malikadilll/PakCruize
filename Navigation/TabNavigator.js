import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import Profile from '../screens/Profile';
import ViewCarsScreen from '../screens/ViewCarsScreen';
import UploadCarScreen from '../screens/uploadCarScreen';
import Home from '../screens/Home';
import SearchCarsScreen from '../screens/SearchCarScreen';
import MaintenanceTipsScreen from '../screens/Tips';

const Tab = createBottomTabNavigator();

const CustomSellButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.sellButtonContainer}
    onPress={onPress}
    activeOpacity={0.5}
  >
    <View style={styles.sellButton}>{children}</View>
  </TouchableOpacity>
);


const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Sell') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Buy') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Tips') {
            iconName = focused ? 'construct' : 'construct-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#BCC6CC',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#2F2F2F',
          paddingBottom: 5,
          height: 60,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Buy" component={SearchCarsScreen} />
      <Tab.Screen
        name="Sell"
        component={UploadCarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color="#fff" size={30} />
          ),
          tabBarButton: (props) => <CustomSellButton {...props} />,
        }}
      />
      <Tab.Screen name="Tips" component={MaintenanceTipsScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  sellButtonContainer: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sellButton: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#053BA8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
});
