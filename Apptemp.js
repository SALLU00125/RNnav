
import {StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 

  Platform,
 

} from 'react-native';

import RestaurantScreen from "./SRC/features/restaurants/screens/restaurant.screen.js";
import { ThemeProvider } from "styled-components/native"
import theme from "./SRC/Infrastructure/theme/index";
//________________________________________________________________________________


const Stack = createNativeStackNavigator();



const YourApp = () => {
  return (

    <>
   
   <ThemeProvider theme={theme}>
    
    <RestaurantScreen />

    </ThemeProvider>


    <ExpoStatusBar style="auto" />
    </>

  );
}

export default YourApp;



