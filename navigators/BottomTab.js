import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
    
import {MaterialCommunityIcons} from "@expo/vector-icons";
import HomeStackScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from "../screens/CartScreen";
import NotiScreen from '../screens/NotiScreen';
import React from "react";
const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home1"
      activeColor="#f0edf6"
      inactiveColor="#A1C6A1"
      barStyle={{ backgroundColor: '#557C55' }}>
  
    <Tab.Screen
    name="Home1"
    component={HomeStackScreen}
    options={{
    tabBarLabel: 'Home',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="home-variant-outline" color={color} size={26} />
    ),
  }}
/>
  <Tab.Screen
    name="Post"
    component={PostScreen}
    options={{
    tabBarLabel: 'Post',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="plus-circle-outline" color={color} size={26} />
    ),
  }}
/>
  <Tab.Screen
    name="Cart"
    component={CartScreen}
    options={{
    tabBarLabel: 'Cart',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
    ),
  }}
/>
  <Tab.Screen
    name="Profile"
    component={ProfileScreen}
    options={{
    tabBarLabel: 'Profile',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="account-outline" color={color} size={26} />
    ),
  }}
/> 
</Tab.Navigator>
  );
}