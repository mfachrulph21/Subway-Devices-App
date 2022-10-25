import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.6;

const images = [
  "https://www.subway.com/-/media/Malaysia/Promotions/Marquees/Mobile/Home/20200129-SUBWAY-FamilyBundle_MarqueeMobile.jpg",
  "https://www.subway.com/-/media/Malaysia/Promotions/Marquees/Mobile/Home/20210046-SubwayMsia-Window2-SOTD_MarqueeMobile_FA_20210323.jpg",
  "https://www.subway.com/-/media/Malaysia/Promotions/Marquees/Mobile/Home/Marquee-RTC-EN-585x305.jpg",
];

export default function CarouselComponent() {

  const [state, setState] = useState({
    active: 0,
  });

  function changeCarousel({ nativeEvent }) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    if (slide !== state.active) {
      setState({ active: slide });
    }
  }

  return (
    <>
      <View style={style.carouselContainer}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={changeCarousel}
          showsHorizontalScrollIndicator={false}
          style={style.scroll}
        >
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={style.image} />
          ))}
        </ScrollView>
        <View style={style.pagination}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={
                k === state.active ? style.pagingActiveText : style.pagingText
              }
            >
              ⬤
            </Text>
          ))}
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
    width,
    height,
    backgroundColor: "blue",
  },
  scroll: { width, height },
  image: { width, height, resizeMode: "cover" },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingText: {
    fontSize: width / 30,
    color: "#888",
    marginBottom: 3,
    margin: 3,
  },
  pagingActiveText: { 
    fontSize: width / 30, 
    color: "#fff", 
    margin: 3 },
});
