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
  FlatList,
} from "react-native";

import stylesGobal from "@/assets/css/style";
import { HeaderProfile } from "@/components/Header/HeaderProfile";
import { HeaderSearch } from "@/components/Header/HeaderSearch";
import { useEffect, useState } from "react";
import axios from "axios";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function FreshFruits() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6494e6aeb08e17c91791736d.mockapi.io/api/book/btl_mobile")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getItemCount = (item) => item.length;
  const getItem = (item, index) => item[index];

  const renderItem = ({ item }) => (
    <ScrollView>
      <View
        style={{
          width: 160,
          height: 170,
          backgroundColor: "blue",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            height: 170,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={{ uri: item.img_product }}
            style={{ width: "100%", height: 90, resizeMode: "contain" }}
          ></Image>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 110 }}>{item.product_name}</Text>
            <FontAwesome5 name="plus-circle" size={20} color="green" />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="star" size={18} color="#f3c63f" />
              <AntDesign name="star" size={18} color="#f3c63f" />
              <AntDesign name="star" size={18} color="#f3c63f" />
              <AntDesign name="star" size={18} color="#f3c63f" />
              <AntDesign name="star" size={18} color="gray" />
              {/* <FontAwesome5 name="plus-circle" size={24} color="green" /> */}
            </View>

            <Text style={styles.priceText}>${item.price}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <ScrollView>
      <View style={stylesGobal.container}>
        {/* Header */}
        <View style={styles.header}>
          <HeaderProfile titleHeader={"Fresh Fruit"}></HeaderProfile>
          <HeaderSearch></HeaderSearch>
        </View>
      </View>

      {/* Content */}
      <View style={styles.containerContent}>
        {/* Thieu Slider */}

        <View style={styles.content}>
          <View style={{ width: "100%", height: 350 }}>
            <FlatList
              data={data}
              renderItem={renderItem}
              initialNumToRender={4}
              keyExtractor={(item) => item.id}
              numColumns={2}
            ></FlatList>
          </View>

          <Pressable style={styles.btnSeeAll}>
            <Text>See All</Text>
          </Pressable>

          {/* Relevant products */}
          <View>
            {/* Headline Relevant products */}
            <View
              style={{
                width: "100%",
                height: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "aqua",
              }}
            >
              <Text>Relevant products</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>See All</Text>
                <AntDesign name="right" size={16} color="black" />
              </View>
            </View>

            {/*  */}
            <View>
              <View style={styles.productItemRelevant}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../assets/images/imagesFruitFresh/peach.png")}
                ></Image>
                <View style={{ marginLeft: -120 }}>
                  <Text>Peach</Text>
                  <View style={{ flexDirection: "row" }}>
                    <AntDesign name="star" size={18} color="#f3c63f" />
                    <AntDesign name="star" size={18} color="#f3c63f" />
                    <AntDesign name="star" size={18} color="#f3c63f" />
                    <AntDesign name="star" size={18} color="#f3c63f" />
                    <AntDesign name="star" size={18} color="gray" />
                  </View>
                </View>

                <View>
                  <FontAwesome5 name="plus-circle" size={20} color="green" />
                  <Text>$15</Text>
                </View>
              </View>

              <View style={[styles.productItemRelevant, { marginTop: 10 }]}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../assets/images/imagesFruitFresh/Pomegranate.png")}
                ></Image>
                <View style={{ marginLeft: -120 }}>
                  <Text>Pomegranate</Text>
                  <View style={{ flexDirection: "row" }}>
                    <AntDesign name="star" size={18} color="#f3c63f" />
                    <AntDesign name="star" size={18} color="#f3c63f" />
                    <AntDesign name="star" size={18} color="#f3c63f" />
                    <AntDesign name="star" size={18} color="#f3c63f" />
                    <AntDesign name="star" size={18} color="gray" />
                  </View>
                </View>

                <View>
                  <FontAwesome5 name="plus-circle" size={20} color="green" />
                  <Text>$23</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginLeft: -5,
  },

  containerContent: {
    width: "100%",
    height: 600,
    backgroundColor: "red",
    flexDirection: "row",

    justifyContent: "center",
  },

  content: {
    width: 323,
    height: 600,
    backgroundColor: "yellow",
  },

  priceText: {
    fontSize: 14,
  },

  btnSeeAll: {
    width: "100%",
    height: 40,
    backgroundColor: "gray",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    opacity: 0.7,
  },

  productItemRelevant: {
    width: "100%",
    height: 70,
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
});
