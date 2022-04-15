import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import BrowseScreen from '../screens/BrowseScreen';
import SignupScreen from '../screens/SignupScreen';
import CartScreen from '../screens/CartScreen';
import MyDrawer from './DrawerNavigator';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProductPage from '../screens/ProductPage';
import BuyNow from '../screens/BuyNow';
import { supabase } from '../supabase';
import { Session } from '@supabase/supabase-js'
import Orders from '../screens/Orders';
import SellerProfile from '../screens/SellerProfile';


const Stack = createNativeStackNavigator();
export default function Main()
{
const [session, setSession] = React.useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

    return(
<NavigationContainer> 
       <Stack.Navigator> 
         {session && !session.user ? 
              <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
</>
         :
         <>
              <Stack.Screen name="Home1" options={{headerShown:false}} component={MyDrawer} />
              <Stack.Screen name="Browse" component={BrowseScreen} />       
              <Stack.Screen name="Cart" component={CartScreen} /> 
              <Stack.Screen name="Product" component={ProductPage} /> 
              <Stack.Screen name="Buynow" component={BuyNow} /> 
              <Stack.Screen name="Orders" component={Orders} /> 
              <Stack.Screen name="SellerProfile" component={SellerProfile} /> 



</>
         }

      </Stack.Navigator>
      </NavigationContainer> )
      
    };