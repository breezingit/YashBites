import React from "react";
import styled from 'styled-components/native';
import { Text } from "react-native-paper";
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;


const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;


export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      {/* <Text center variant="caption" numberOfLines={3}>
       */}
      <Text>
        {restaurant.name}
      </Text>
    </Item>
  );
};