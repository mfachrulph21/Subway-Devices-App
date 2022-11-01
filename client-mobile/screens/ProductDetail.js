import { useQuery } from "@apollo/client";
import { Image, SafeAreaView, Text, View } from "react-native";
import COLORS from "../assets/const/colors";
import { GET_ITEM_DETAIL } from "../config/queries";

export default function ProductDetail({ route }) {
  const { id } = route.params;
  console.log({ id });
  const { loading, error, data } = useQuery(GET_ITEM_DETAIL, {
    variables: { getItemId: id },
  });

  const formatPrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  console.log(data, "ini detail datanya");
  console.log(data?.getItem?.imgUrl, "INI LINK IMAGENYA");
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.primaryYellow, height:"100%"}}>
        <View style={{flex:1, marginTop:100, padding:10}}>
      <View>
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: 3,
            paddingBottom: 3,
            paddingRight: 2,
            paddingRight: 2,
            fontSize: 30,
            color: COLORS.textColor,
            marginTop: 10,
          }}
        >
          {data?.getItem.name}
        </Text>
      </View>

      <View style={{ width: "55%", alignSelf: "center", marginTop: 10 }}>
        <Image
          style={{ height: 150, width: "100%" }}
          source={{ uri: data?.getItem?.imgUrl }}
          alt="Picture"
        />
      </View>

      <View
        style={{
          paddingTop: 5,
          paddingRight: 10,
          paddingLeft: 10,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              letterSpacing: 10,
              color: COLORS.primary,
              fontWeight: "bold",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            {formatPrice(data?.getItem?.price)}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            backgroundColor: COLORS.Surface,
            borderRadius: 10,
            height: 40,
            alignItems: "center",
            padding: 7,
            marginTop: 10,
            width: 170,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: COLORS.secondaryTextColor,
              fontWeight: "bold",
              letterSpacing: 2
            }}
          >
            {data?.getItem?.Category.name}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
            fontWeight: "bold",
            color: COLORS.textColor,
          }}
        >
          Recipe owned by : {data?.getItem?.user?.username}
        </Text>
      </View>
      <View
        style={{
          marginTop: 5,
          marginBottom: 5,
          marginRight: 10,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            color: COLORS.textColor,
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 10,
          }}
        >
          Description :
        </Text>
        <Text
          style={{
            color: COLORS.textColor,
            fontWeight: "bold",
            fontSize: 14,
            marginTop: 10,
            backgroundColor: COLORS.Surface,
            padding: 10,
            letterSpacing: 2,
            borderRadius:10,
          }}
        >
          {data?.getItem?.description}
        </Text>
      </View>
      </View>
    </SafeAreaView>
  );
}
