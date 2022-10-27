import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./navigation/BottomNavigation";



export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomNavigator/>
      </NavigationContainer>
    </>
  );
}
