
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import COLORS from "../assets/const/colors";
import ItemScreen from "../screens/ItemScreen";
import ProductDetail from "../screens/ProductDetail";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="ItemScreen">
      <Stack.Screen
        name="ItemsScreen"
        component={ItemScreen}
        options={{ title: "Products",
        headerStyle: {
          backgroundColor:COLORS.primary,
        },
        headerTitleStyle : {
          color:COLORS.Surface
        }}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ title: 'Detail Product',
        headerStyle: {
          backgroundColor:COLORS.primary,
          
        },
        headerTitleStyle : {
          color:COLORS.Surface
        }
      }}
      />
    </Stack.Navigator>
  );
}
