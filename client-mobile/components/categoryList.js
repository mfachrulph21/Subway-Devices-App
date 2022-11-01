import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../assets/const/colors";

export default function CategoryList({ categories, index }) {
  const [categoriesIndex, setCategoriesIndex] = useState();

  return (
    <View style={style.categoryContainer}>
      <TouchableOpacity activeOpacity={0.8} key={index} onPress={() => setCategoriesIndex(index)}>
        <Text
          style={[
            style.categoryText,
            // categoriesIndex === index && style.categoryTextSelected,
          ]}
        >
          {categories.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
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
  },
});
