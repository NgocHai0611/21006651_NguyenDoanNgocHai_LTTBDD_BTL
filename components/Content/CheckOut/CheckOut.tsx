import {
  Image,
  StyleSheet,
  Platform,
  View,
  VirtualizedList,
  Text,
  Button,
  Pressable,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import { HeaderProfile } from "@/components/Header/HeaderProfile";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

export default function CheckOut() {
  const [itemCheckOut, setItemCheckOut] = useState([
    {
      id: 1,
      name: "Headphone",
      desc: "Consequat ex eu",
      price: "500",
      img: require("../../../assets/images/imagesCheckout/item1_checkout.png"),
    },
    {
      id: 2,
      name: "Headphone",
      desc: "Consequat ex eu",
      price: "300",
      img: require("../../../assets/images/imagesCheckout/item2_checkout.png"),
    },
    {
      id: 3,
      name: "Smartphone",
      desc: "Consequat ex eu",
      price: "1000",
      img: require("../../../assets/images/imagesCheckout/item3_checkout.png"),
    },
    {
      id: 4,
      name: "Smartphone",
      desc: "Consequat ex eu",
      price: "1000",
      img: require("../../../assets/images/imagesCheckout/item4_checkout.png"),
    },
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.layoutContainer}>
          <View style={styles.header}>
            <HeaderProfile titleHeader={"CheckOut"}></HeaderProfile>
          </View>

          <View style={styles.content}>
            {/* Start Show Item Check Out */}
            <View style={styles.listItemCheckOutContent}>
              <FlatList
                data={itemCheckOut}
                renderItem={({ item }) => (
                  <View style={styles.layoutItemCheckOutContent}>
                    <Image
                      style={styles.sizeImgItemCheckOutContent}
                      source={item.img}
                    ></Image>

                    <View style={styles.descItemCheckOutContent}>
                      <Text>{item.name}</Text>
                      <Text>{item.desc}</Text>
                      <Text>${item.price}</Text>
                    </View>

                    <View style={styles.editItemCheckOutContent}>
                      <Feather name="edit-2" size={24} color="black" />
                      <Text>x1</Text>
                    </View>
                  </View>
                )}
              ></FlatList>
              {/* End Show List Check Out */}
            </View>

            {/*Start Voucher  */}
            <View style={styles.layoutVocher}>
              <Text>Voucher</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  placeholder="Enter voucher code"
                  style={{
                    width: "65%",
                    height: 25,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "gray",
                  }}
                ></TextInput>
                <Pressable
                  style={{
                    width: "25%",
                    height: 25,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "green" }}>Apply</Text>
                </Pressable>
              </View>
              {/* End Voucher */}
            </View>

            {/* Start Total */}
            <View style={styles.layoutTotal}>
              <Text style={styles.fontSizeText}>Total</Text>
              <Text style={[styles.fontSizeText, { fontWeight: "bold" }]}>
                $2,800
              </Text>
            </View>

            <Pressable
              style={{
                width: "100%",
                height: 30,
                backgroundColor: "orange",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 50,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={[styles.fontSizeText, { color: "white" }]}>
                  Next
                </Text>
                <Feather name="arrow-right" size={20} color="white" />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fontSizeText: {
    fontSize: 16,
  },

  layoutTotal: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  layoutVocher: {
    width: "100%",
    height: 60,
  },

  listItemCheckOutContent: {},

  descItemCheckOutContent: {
    marginRight: 60,
    flexDirection: "column",
    height: 70,
    justifyContent: "space-between",
  },

  editItemCheckOutContent: {
    flexDirection: "column",
    height: 70,
    justifyContent: "space-between",
  },

  layoutItemCheckOutContent: {
    marginTop: 10,
    width: "100%",
    height: 100,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  sizeImgItemCheckOutContent: {
    marginLeft: -50,
    width: 150,
    height: 100,
  },

  container: {
    width: "100%",
    height: 600,
    flexDirection: "row",

    justifyContent: "center",
  },

  layoutContainer: {
    width: "92%",
    height: 600,
  },

  header: {},

  content: {
    width: "100%",
    height: 570,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
