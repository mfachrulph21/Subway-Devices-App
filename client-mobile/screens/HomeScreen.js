import { useQuery } from "@apollo/client";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../assets/const/colors";
import CarouselComponent from "../components/carouselComponent";
import CategoryList from "../components/categoryList";
import ItemCard from "../components/itemCard";
import { GET_ALL_CATEGORIES, GET_ALL_ITEMS } from "../config/queries";

export default function HomeScreen({navigation}) {
  const { loading, error, data: items } = useQuery(GET_ALL_ITEMS);
  const { loading : loadingCategory, error: errorCategory, data : categories} = useQuery(GET_ALL_CATEGORIES)
  const [categoriesIndex, setCategoriesIndex] = useState(0);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: COLORS.primary }}>
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <Ionicons
            name="location-outline"
            size={30}
            style={{
              marginLeft: 20,
              marginVertical: 5,
              color: COLORS.primaryYellow,
            }}
          />
          <View style={style.searchContainer}>
            <TextInput
              placeholder="Set delivery location"
              style={style.input}
            />
          </View>
          <View style={style.profileIcon}>
            <Ionicons
              name="person-outline"
              size={25}
              style={style.profileIcon}
            />
          </View>
        </View>

        <FlatList
        horizontal
        data={categories?.getAllCategories}
        renderItem={({ item, index }) => <CategoryList categories={item} index={index}/>}
        />

        <CarouselComponent />
        <View>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 15,
              fontWeight: "bold",
              marginBottom: 5,
              color: COLORS.primaryYellow
            }}
          >
            OUR MENUS
          </Text>
        </View>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 10 }}
          style={{ maxHeight: 380 }}
          numColumns={2}
          data={items?.getAllItems}
          renderItem={({ item }) => <ItemCard product={item} navigation={navigation}/>}
        />
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  searchContainer: {
    height: 40,
    marginLeft: 10,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 14,
    fontWeight: "400",
    flex: 1,
    marginLeft: 15,
  },
  profileIcon: {
    color: COLORS.primaryYellow,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 4,
  },
  categoryContainer: {
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 5,
    justifyContent: "space-between",
  },
  categoryText: {
    justifyContent: "space-between",
    color: COLORS.primaryYellow,
    fontWeight: "bold",
  },
  categoryTextSelected: {
    color: COLORS.thirdTextColor,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.thirdTextColor,
  }
});
