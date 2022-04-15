import { createDrawerNavigator } from "@react-navigation/drawer";
import BrowseScreen from '../screens/BrowseScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MyTabs from "./BottomTab";
import React from "react";

import {MaterialCommunityIcons} from "@expo/vector-icons";

import CustomDrawer from "../screens/CustomDrawer";
import DashTab from "../screens/DashboardScreen";
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props }/>}
    screenOptions={{
      
      drawerActiveBackgroundColor:'#E0FFE0',
      drawerActiveTintColor:'#557C55',
    }}>
      <Drawer.Screen name="Home" component={MyTabs} options={{
        headerShown:false,
        drawerIcon:({color}) => (
          <MaterialCommunityIcons name="home-variant-outline" size={22} color={color}/>
        )
      }} />
      <Drawer.Screen name="Browse"   component={BrowseScreen} options={{
        headerShown:false,
        drawerIcon:({color}) => (
          <MaterialCommunityIcons name="shopping-search" size={22} color={color}/>
        )
      }} />
      <Drawer.Screen name="Dashboard" component={DashTab} options={{
        drawerIcon:({color}) => (
          <MaterialCommunityIcons name="view-dashboard-outline" size={22} color={color}/>
          )
      }}/>  
    </Drawer.Navigator>
);}