
import * as React from 'react';

import { Card,   } from 'react-native-paper';

import { 
  StyleSheet,
  Text,
  View,
 
 

} from 'react-native';

import styled from "styled-components/native"

//_________________________________________________


//TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
/* theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};*/
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH




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
    color: ${props=>props.theme.colors.ui.primary};
  `;

const RestaurantCard = styled(Card)`
    
    background-color: white;
    justify-content: center;
    padding: 10px;
    marginBottom: ${props=>props.theme.space[3]};

    `;

const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
    background-color:white;
`;

  return(
    

   
    <View style={styles.BottomView}>
      <RestaurantCard elevation={15} style={styles.cardStyle}>
            <RestaurantCardCover key={name} style={styles.coverStyle} source={{uri: photos[0] }} />
            <Title> {name} </Title>

      </RestaurantCard>
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


  
  
  });
  





//asdasdasdas