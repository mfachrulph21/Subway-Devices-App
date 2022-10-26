import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import CartScreen from "../screens/CartScreen";
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import COLORS from "../assets/const/colors";


const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline'
            } else if (route.name === 'Search') {
                iconName = focused ? 'ios-search' : 'ios-search-outline'
            } else if (route.name === 'Favorite') {
                iconName = focused ? 'heart' : 'heart-outline'
            } else if (route.name === 'Cart') {
                iconName = focused ? 'ios-cart' : 'ios-cart-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} style={{
                top: 15

            }}/>
        },
        tabBarActiveTintColor : COLORS.primaryYellow,
        tabBarInactiveTintColor: COLORS.primary,
        tabBarShowLabel : false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 60,
          ...style.shadow,
        }
      })
      }
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{

      }} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
