// Import library dan komponen yang diperlukan
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

// Membuat instance Stack Navigator
const Stack = createStackNavigator();

// Komponen utama App yang mengatur navigasi
const App = () => {
  return (
    // NavigationContainer adalah komponen wrapper yang mengelola state navigasi
    <NavigationContainer>
      {/* Stack.Navigator mengatur tumpukan layar dengan konfigurasi awal HomeScreen */}
      <Stack.Navigator initialRouteName="Home">
        {/* Mendefinisikan layar Home dengan komponennya */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Mendefinisikan layar Details dengan komponennya */}
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Mengekspor komponen App agar bisa digunakan di file lain
export default App;
