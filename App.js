import React from 'react';
// You can import from local files
import {ThemeProvider} from "styled-components/native";
import {theme} from "./src/infrastructure/theme";
import {useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";
import {useFonts as useLato, Nunito_400Regular} from "@expo-google-fonts/nunito";
import {RestaurantsContextProvider} from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigator } from './src/infrastructure/navigation';
import {FavouritesContextProvider} from './src/services/favourites/favourites.context';

export default function App() {
  const [oswaldLoaded] =useOswald({Oswald_400Regular,});
  const [latoLoaded] =useLato({Nunito_400Regular,});

  if(!oswaldLoaded || !latoLoaded){return null;}

  
  return (
    // <View style={{flex:1, alignItems:"center", justifyContent:"center",}}>
    <>
    <ThemeProvider theme={theme}>
    <FavouritesContextProvider>
    <LocationContextProvider>
        
    <RestaurantsContextProvider>
      <Navigator/>
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </FavouritesContextProvider>
      
    </ThemeProvider>
    </>  // <Text>Yash Bites' a good name right!?</Text>
    // </View>
  );
}

