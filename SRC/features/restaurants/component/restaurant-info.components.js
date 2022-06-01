
import * as React from 'react';

import { Card,   } from 'react-native-paper';

import { 
  StyleSheet,
  Text,
  View,
 
 

} from 'react-native';

import styled from "styled-components/native"

//_________________________________________________


const ResInfo = ({restaurant = {} }) => {

    const {
        name = "predefined_NAME",
        icon,
        photos=["https://cdn4.vectorstock.com/i/1000x1000/62/93/restaurant-building-vector-5026293.jpg"],
        address="predefinedaddress",
        openingHours="predefinedopeningHours",
        isOpenNow=true,
        rating="0.5",
        isClosedTemporarily="yes",
    } = restaurant;

const Title=styled.Text`
    font-size:20px;
    font-weight:bold;
    color:red;
  `;

  return(
    

   
    <View style={styles.BottomView}>
      <Card elevation={15} style={styles.cardStyle}>
            <Card.Cover key={name} style={styles.coverStyle} source={{uri: photos[0] }} />
            <Title> {name} </Title>

      </Card>
    </View>

   
  )   
}

export default ResInfo;

const styles = StyleSheet.create({
    
    BottomView: {
     
      flex:1,
      backgroundColor: 'skyblue',
     
      width: "95%",
    
    },
    cardStyle:{
        padding: 10,
        backgroundColor: 'white',
       
        justifyContent: 'center',
        
        
    },
    coverStyle: {
   
        padding: 20,
        backgroundColor: 'white',        
    },

  
  
  });
  





//asdasdasdas