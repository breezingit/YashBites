import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Ionicons} from "@expo/vector-icons";
import { MapScreen } from '../../features/map/screens/map.screen';
import { SafeArea } from '../../features/restaurant/components/safe-area';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { RestaurantsNavigator } from './restaurants.navigator';


const Tab=createBottomTabNavigator();

const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
const Mapss = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );


export const AppNavigator=()=>(
    <NavigationContainer>
        <Tab.Navigator
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({  color, size }) => {
            let iconName;

            if (route.name === 'Restaurants') {
              iconName = "md-restaurant"
            } else if (route.name === 'Settings') {
              iconName = "md-settings";
            }else if(route.name === 'Map') {
              iconName = "md-map";
            }
          
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={Mapss} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
)