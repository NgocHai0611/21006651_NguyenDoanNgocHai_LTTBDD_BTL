import {
  Image,
  StyleSheet,
  Platform,
  View,
  VirtualizedList,
  Text,
  Button,
  Pressable,
  ScrollView,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HeaderProfile } from "@/components/Header/HeaderProfile";
import { HeaderSearch } from "@/components/Header/HeaderSearch";
import stylesGobal from "../../assets/css/style";
import { useEffect, useState } from "react";
import axios from "axios";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function HomeScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6494e6aeb08e17c91791736d.mockapi.io/api/book/btl_mobile#")
      .then((respone) => {
        setData(respone.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getItem = (data: any, index: any) => {
    return data[index];
  };

  const renderItem = ({ item }) => {
    return (
      <View key={item.id} style={{ marginRight: 7 }}>
        <View style={styles.backgroundProduct}>
          <Image
            source={{ uri: item.img_product }}
            style={styles.imageProduct}
          ></Image>
        </View>

        <Text style={styles.textFont}>{item.product_name}</Text>
      </View>
    );
  };

  const renderRecomendItem = ({ item }) => {
    return (
      <View
        key={item.id}
        style={{
          marginTop: 10,
          width: 150,
          height: 170,
          backgroundColor: "red",
          marginRight: 5,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={{ uri: item.img_product }}
          style={{ width: 150, height: 80, resizeMode: "contain" }}
        ></Image>
        <Text style={{ width: 120, textAlign: "center" }}>
          {item.product_name}
        </Text>

        <View style={styles.ratingProductRecomend}>
          <AntDesign name="star" size={24} color="yellow" />
          <Text>{item.rating}</Text>
          <Text style={{ color: "aqua", fontWeight: "bold" }}>
            ${item.price}
          </Text>
        </View>
      </View>
    );
  };

  const getItemCount = (data: any, index: any) => data.length;

  return (
    <ScrollView>
      <View style={stylesGobal.container}>
        <View style={styles.header}>
          <HeaderProfile titleHeader={"All Deals"}></HeaderProfile>
          <HeaderSearch></HeaderSearch>
        </View>

        {/* Start Content */}
        <View style={styles.content}>
          <VirtualizedList
            data={data}
            initialNumToRender={3}
            renderItem={renderItem}
            getItem={getItem}
            getItemCount={getItemCount}
            horizontal={true}
          ></VirtualizedList>

          {/* Sale Product */}
          <View style={styles.containerSaleProduct}>
            <View style={styles.layoutSaleProduct}>
              <View style={styles.detailsSaleProduct}>
                <Text
                  style={{ fontWeight: "bold", color: "aqua", fontSize: 24 }}
                >
                  Shoes
                </Text>

                <Text style={{ fontSize: 20, color: "gray" }}>50% off</Text>
                <Pressable style={styles.btnBuy}>
                  <Text style={{ color: "white", fontSize: 16 }}>Buy Now</Text>
                </Pressable>
              </View>

              <Image
                source={require("../../assets/images/imagesHome/image-shoseHome.png")}
              ></Image>
            </View>

            <View style={styles.subDiscountProduct}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require("../../assets/images/imagesHome/imageItemSale1.png")}
              ></Image>
              <Image
                style={{ width: 170, height: 150 }}
                source={require("../../assets/images/imagesHome/imageItemSale2.png")}
              ></Image>
            </View>
            {/*End Sale Product */}
          </View>

          {/* Recomend Item */}
          <View>
            <View style={styles.containerHeadLineRecomend}>
              <View style={styles.headLineRecomend}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Recommended For You
                </Text>
                <Text style={{ fontSize: 16, color: "gray" }}>View All</Text>
              </View>

              <View>
                <VirtualizedList
                  data={data}
                  initialNumToRender={3}
                  renderItem={renderRecomendItem}
                  getItem={getItem}
                  getItemCount={getItemCount}
                  horizontal={true}
                ></VirtualizedList>
              </View>
            </View>
          </View>

          {/* End Content */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {},

  content: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },

  imageProduct: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  backgroundProduct: {
    width: 90,
    height: 90,
    backgroundColor: "red",
    borderRadius: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  textFont: {
    width: 90,
    textAlign: "center",
  },

  btnBuy: {
    flexDirection: "row",
    width: 100,
    height: 40,
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },

  containerSaleProduct: {
    width: 345,
    height: 330,
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
  },

  layoutSaleProduct: {
    height: 170,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "red",
  },

  detailsSaleProduct: {
    flexDirection: "column",
    height: 130,
    justifyContent: "space-between",
  },

  subDiscountProduct: {
    height: 150,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  containerHeadLineRecomend: {
    width: 340,
  },

  headLineRecomend: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemProductRecomend: {},

  ratingProductRecomend: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
