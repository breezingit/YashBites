import React, {useContext,useState} from "react";

import {FlatList, Pressable,ActivityIndicator, View} from 'react-native';
import {RestaurantInfo} from "../components/restaurant-info.component"
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../components/safe-area";
import { Search } from "../components/search.component";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";
import { FavouritesBar } from "../../../services/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
const RestaurantListContainer=styled.View`
  padding:${(props)=>props.theme.space[3]};
  flex:1;
`;

export const RestaurantsScreen=({navigation})=>{
  const { isLoading, error, restaurants}=useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);

  return(

    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {/* {isToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      )} */}
        <View style={{position:"absolute", top:"50%", left:"50%"}}>

          <ActivityIndicator size="large" color="tomato" />

        </View>
        :

        <FlatList
          data={restaurants}
          renderItem={({item})=>{return(
            <TouchableOpacity onPress={()=>navigation.navigate("RestaurantDetail", {restaurant:item,})}>

              <RestaurantInfo restaurant={item}/>

            </TouchableOpacity>
          
          
          );}}
          keyExtractor={(item)=>item.name}
          contentContainerStyle={{padding:16}}
        />
    </SafeArea>
  );
};

