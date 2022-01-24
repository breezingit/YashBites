import React from "react";
import {Text,View} from "react-native";
import { Avatar, Button, Card,  Paragraph } from 'react-native-paper';
import styled from "styled-components/native";
// import SvgXml from 'react-native-svg';
// import star from "../../../../assets/star";
import Icon from "react-native-vector-icons/FontAwesome"
import { Favourite } from "../../../services/favourites/favourite.component";
import {Title,
  RestaurantCard,
 Info, 
 Address, 
 RestaurantCardCover,
 Rating,
 IndivIcons} 
 from "./restaurant-info.styles"




export const RestaurantInfo =({restaurant={}})=>{
  const {
    name="YashBites",
    icon,
    photos=["https://www.qantas.com/content/dam/travelinsider/images/trending/the-best-new-restaurants-in-june-2017/7319e52a-432f-4a5e-9bb1-6ce6bfe8f9e9.jpg"],
    address="100 Sesame Street",
    isOpenNow=true,
    rating=4,
    isClosedTemporarily=true,
  }=restaurant;
  
  const ratingArray=Array.from(new Array(Math.floor(rating)))
  console.log(restaurant);
  return(
    <RestaurantCard  elevation={5}>
      <View>
        <Favourite restaurant={restaurant}></Favourite>
        <RestaurantCardCover key={name} source={{ uri: photos[0]} } />
      </View>
      <Info>
        <Title>{name}</Title>
          <IndivIcons>
            <Rating>
              {ratingArray.map(()=>(
                <Icon name="star" size={20} color="gold"/>
              ))} 
            </Rating>
            {
              isClosedTemporarily &&
              <Text style={{color:"red",}}>CLOSED TEMPORARILY</Text>
            }
            {
              isOpenNow &&
              <Icon name="thumbs-up" size={20} color="gold"/>
            }
          </IndivIcons>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
    // <Text>RestaurantInfo</Text>
  )
};
