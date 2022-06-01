
import {StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResInfo from "../component/restaurant-info.components.js";

import styled from "styled-components/native"

import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList
 

} from 'react-native';

import {
  Searchbar
} from "react-native-paper";

//_________________________________________________________

const AIcontainer= styled.SafeAreaView`
flex:1;
background-color: ${Platform.OS === 'android'? 'green':'red'};
align-items: center;
justify-content: center;
paddingTop: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
width: 100%;
`;

const UpperView= styled.View`

flex:0.05;
background-color: pink;
width: 100%;
align-items: center;
justify-content: center;

`;

const RestaurantScreen = () => {


  return(
    <AIcontainer>

    
    <UpperView>

      <Searchbar />

    </UpperView>

    <View style={{height:20, backgroundColor:"skyblue"}}></View>
   
    <FlatList 
      data={ [{name:1 } , {name:2}, {name:3}, {name:4}, {name:5}, {name:6}] }
      renderItem= {() => <ResInfo /> }
      keyExtractor={(item) => item.name}
      contentContainerStyle= {{paddingLeft:'5%'}}
      style={{flex:1,width:'100%'}}
      />

    

    </AIcontainer>
  )   
}

export default RestaurantScreen;

const styles = StyleSheet.create({
    
    UpperView: {
     
      
      
    
    },
  
  
  
  });
  





//asdasdasdas