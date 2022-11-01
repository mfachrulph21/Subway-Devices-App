import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import COLORS from "../assets/const/colors";

const width = Dimensions.get("screen").width / 2 - 30;

const formatPrice = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
};

export default function ItemCard({ product }) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => {
      console.log(product, "ini productnya <<<<<<<<<");
      navigation.navigate("ProductDetail", { id: product.id })
    }} >
    <View style={style.card}>
      <View style={{ height: 60, alignItems: "center" }}>
        <Image
          style={{ flex: 1, resizeMode: "contain", width: "100%", height: 80 }}
          source={{ uri: product.imgUrl }}
        />
      </View>
      <View style={{ height: 40, alignItems: "center"}}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            marginTop: 5,
            fontWeight: "bold",
            color: COLORS.textColor,
          }}
        >
          {product.name}
        </Text>

        
      </View>
      <View style={{ height: 20, alignItems: "center"}}>
      <Text
          style={{
            textAlign: "center",
            fontSize: 10,
            marginTop: 7,
            color: COLORS.primary,
          }}
        >
          {formatPrice(product.price)}
        </Text>

      </View>
    </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: COLORS.Surface,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    padding: 15,
  },
});
