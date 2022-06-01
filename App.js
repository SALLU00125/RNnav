
import {StatusBar as ExpoStatusBar } from "expo-status-bar";

import * as React from 'react';


//react native import
import { 

  Platform,
  Text
 

} from 'react-native';

//Custom import
import RestaurantScreen from "./SRC/features/restaurants/screens/restaurant.screen.js";
import { ThemeProvider } from "styled-components/native"
import {theme} from "./SRC/Infrastructure/theme/index";


//Navigation import
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//_____________________________________
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const Settings = () => { 
  return(
    <Text> Settings</Text>
  ) };


const Maps = () => { 
  return(
    <Text> MAPS</Text>
  ) };


const YourApp = () => {
  return (

    <>
    <ThemeProvider theme={theme}>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restaurants" component={RestaurantScreen} />
          <Tab.Screen name="Maps" component={Maps} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>

    
    </ThemeProvider>
    
    <ExpoStatusBar style="auto" />
    </>

  );
}

export default YourApp;



