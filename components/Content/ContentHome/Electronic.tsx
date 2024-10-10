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

import { HeaderProfile } from "../../Header/HeaderProfile";
import { HeaderSearch } from "../../Header/HeaderSearch";
import stylesGobal from "@/assets/css/style";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";

export default function Electronics() {
  const [category, setCategories] = useState([
    {
      name: "iphone",
      image: require("../../../assets/imagesHome/imagesElectronic/iphone.png"),
    },
    {
      name: "ipad",
      image: require("../../../assets/imagesHome/imagesElectronic/ipad.png"),
    },
    {
      name: "laptop",
      image: require("../../../assets/imagesHome/imagesElectronic/laptop.png"),
    },
  ]);

  const [smartPhone, setSmartPhone] = useState([
    {
      id: 1,
      price: 899,
      img: require("../../../assets/images/imagesElectronic/item_electric1.png"),
    },
    {
      id: 2,
      price: 899,
      img: require("../../../assets/images/imagesElectronic/item_electric2.png"),
    },
    {
      id: 3,
      price: 789,
      img: require("../../../assets/images/imagesElectronic/item_electric3.png"),
    },
    {
      id: 4,
      price: 999,
      img: require("../../../assets/images/imagesElectronic/item_electric4.png"),
    },
  ]);

  return (
    <ScrollView>
      <View style={stylesGobal.container}>
        {/* Header */}
        <View style={styles.header}>
          <HeaderProfile titleHeader={"Electronics"}></HeaderProfile>
          <HeaderSearch></HeaderSearch>
          {/* End Header */}
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.headlineContent}>
            <Text>Categories</Text>

            <Pressable style={{ flexDirection: "row" }}>
              <Text style={{ color: "grey" }}>See All</Text>
              <AntDesign
                name="caretright"
                size={15}
                color="grey"
                style={{ marginTop: 2 }}
              />
            </Pressable>
          </View>

          <View style={{ width: "100%", height: 110 }}>
            <FlatList
              horizontal={true}
              data={category}
              renderItem={({ item }) => (
                <View>
                  {item.name == "iphone" ? (
                    <Image
                      source={item.image}
                      style={[
                        styles.imgProduct,
                        {
                          backgroundColor: "#C3EFB9FF",
                          borderWidth: 2,
                          borderColor: "green",
                        },
                      ]}
                    ></Image>
                  ) : item.name == "ipad" ? (
                    <Image
                      source={item.image}
                      style={[
                        styles.imgProduct,
                        { backgroundColor: "#BCDAF9FF" },
                      ]}
                    ></Image>
                  ) : (
                    <Image
                      source={item.image}
                      style={[
                        styles.imgProduct,
                        { backgroundColor: "#FAE7B6FF" },
                      ]}
                    ></Image>
                  )}
                </View>
              )}
              contentContainerStyle={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            ></FlatList>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 30,
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={[{ backgroundColor: "#fff4f0" }, styles.btnNavSize]}
            >
              <Text style={{ color: "#ff7948" }}>Best Sales</Text>
            </Pressable>

            <Pressable style={styles.btnNavSize}>
              <Text>Best Mached</Text>
            </Pressable>

            <Pressable style={styles.btnNavSize}>
              <Text>Popular</Text>
            </Pressable>
          </View>

          <View style={{ width: "100%", height: 470 }}>
            <FlatList
              data={smartPhone}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 345,
                    height: 100,

                    flexDirection: "row",
                    marginBottom: 5,
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: "black",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    <View>
                      <Image
                        source={item.img}
                        style={{ width: 50, height: 90 }}
                      ></Image>
                    </View>

                    <View>
                      <Text
                        style={{
                          marginBottom: 10,
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Smart Phone
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <AntDesign name="star" size={24} color="#f3c63f" />
                        <AntDesign name="star" size={24} color="#f3c63f" />
                        <AntDesign name="star" size={24} color="#f3c63f" />
                        <AntDesign name="star" size={24} color="#f3c63f" />
                        <AntDesign name="star" size={24} color="gray" />
                      </View>
                    </View>

                    <View>
                      <FontAwesome5
                        name="plus-circle"
                        size={24}
                        color="green"
                      />
                      <Text style={{ marginTop: 10 }}>${item.price}</Text>
                    </View>
                  </View>
                </View>
              )}
            ></FlatList>

            <Pressable
              style={{
                width: "100%",
                height: 40,
                backgroundColor: "grey",
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.2,
              }}
            >
              <Text>See All</Text>
            </Pressable>
          </View>
          {/* End Content */}

          {/* Thieu Slider  */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {},

  content: {
    marginTop: 15,
    marginLeft: 2,
    flexDirection: "column",
    width: 345,
    height: 680,
    alignItems: "center",

    justifyContent: "space-between",
  },

  headlineContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  imgProduct: {
    width: 110,
    height: 110,
    borderRadius: 5,
  },

  btnNavSize: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 105,
    height: 30,
    fontSize: 12,

    borderRadius: 20,
  },

  textNavStyle: {
    textAlign: "center",
  },
});
