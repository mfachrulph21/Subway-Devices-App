import { useQuery } from "@apollo/client";
import { SafeAreaView, Text, FlatList } from "react-native";
import COLORS from "../assets/const/colors";
import ItemCard from "../components/itemCard";
import { GET_ALL_ITEMS } from "../config/queries";

export default function ItemScreen({ navigation }) {
  const { loading, error, data: items } = useQuery(GET_ALL_ITEMS);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.primaryYellow}}>
      {loading ? (
        <ActivityIndicator size={"large"} color={"rgb(42, 104, 76)"} />
      ) : (
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 10}}
          numColumns={2}
          data={items?.getAllItems}
          renderItem={({ item }) => {
            return (
              <ItemCard product={item} key={item.id} />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}
