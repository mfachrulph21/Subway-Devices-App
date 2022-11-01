import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import {StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import COLORS from "../assets/const/colors";
import StackNavigation from "./StackNavigation";



const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline'
            }  else if (route.name === 'StackNavigation') {
              iconName = focused ? 'fast-food' : 'fast-food-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} style={{
                top: 15

            }}/>
        },
        tabBarActiveTintColor : COLORS.primaryYellow,
        tabBarInactiveTintColor: COLORS.primary,
        tabBarShowLabel : false,
        headerShown: false,
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name ="StackNavigation" component={StackNavigation} />
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
