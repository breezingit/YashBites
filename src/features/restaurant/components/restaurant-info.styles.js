import styled from "styled-components/native";
import { Avatar, Button, Card,  Paragraph } from 'react-native-paper';


export const Title=styled.Text`
  font-family:${(props)=>props.theme.fonts.body};
  font-size:${(props)=>props.theme.fontSizes.body};
  color:${(props)=>props.theme.colors.ui.primary};
`;

export const RestaurantCard=styled(Card)`
  color:${(props)=>props.theme.colors.ui.primary};
  margin-bottom:${(props)=>props.theme.space[3]};

`;

export const Info=styled.View`
  padding:${(props)=>props.theme.space[3]};
`;

export const Address=styled.Text`
  font-family:${(props)=>props.theme.fonts.heading};
  font-size:${(props)=>props.theme.fontSizes.caption}; 
`;

export const RestaurantCardCover=styled(Card.Cover)`
  padding:${(props)=>props.theme.space[2]};
  color:${(props)=>props.theme.colors.ui.primary};
`;

export const Rating=styled.View`
  flex-direction:row;  
`;

export const IndivIcons=styled.View`
  padding:${(props)=>props.theme.space[1]};
  flex-direction:row;  
  justify-content:space-between;
`;