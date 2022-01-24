import React from "react";
import { Text,View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import { CompactRestaurantInfo } from "../../components/restaurant/compact-restaurant-info.component";


export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
      return(
    <Text>NULL</Text>);
  }
  return (

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View style={{marginLeft:15}}>
              
              {/* <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              > */}
                {/* <View> */}
                  <CompactRestaurantInfo restaurant={restaurant} />
                {/* </View> */}
            {/* </TouchableOpacity> */}
          </View>
          );
        })}
      </ScrollView>
      
   
  );
};