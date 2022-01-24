import React from "react";
import { Text } from "react-native-paper";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurant/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurant/screens/restaurants.details";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none" screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
