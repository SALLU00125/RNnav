
import {StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 

  Platform,
 

} from 'react-native';

import RS from "./SRC/features/restaurants/screens/restaurant.screen.js";

const Stack = createNativeStackNavigator();



const YourApp = () => {
  return (

    <>
   
    <RS />
    <ExpoStatusBar style="auto" />
    </>

  );
}

export default YourApp;



