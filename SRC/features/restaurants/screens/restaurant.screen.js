
import {StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResInfo from "../component/restaurant-info.components.js";

import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
 

} from 'react-native';

import {
  Searchbar
} from "react-native-paper";

const RS = () => {


  return(
    <SafeAreaView style={Platform.OS === 'android'?styles.A_container:styles.I_container }>

    
    <View style={styles.UpperView}>
    <Searchbar />
    </View>

    <View style={{height:20, backgroundColor:"skyblue"}}></View>
   
    <ResInfo />

    </SafeAreaView>
  )   
}

export default RS;

const styles = StyleSheet.create({
    I_container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0
    },
    A_container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,
    },
    UpperView: {
     
      flex:0.05,
      backgroundColor: 'pink',
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
      
    
    },
  
  
  
  });
  





//asdasdasdas