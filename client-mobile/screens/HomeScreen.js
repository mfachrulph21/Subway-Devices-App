import { View } from "react-native";
import CarouselComponent from "../components/carouselComponent";
import ReccomendedComponent from "../components/reccomendedComponent";

export default function HomeScreen() {
  return (
    <>
      <View>
        <CarouselComponent />
        <ReccomendedComponent />
      </View>
    </>
  );
}
