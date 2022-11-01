import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./navigation/BottomNavigation";
import client from './config/apolloConnection';
import { ApolloProvider } from '@apollo/client'




export default function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BottomNavigator/>
      </NavigationContainer>
      </ApolloProvider>
    </>
  );
}
