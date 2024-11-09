import { useState } from "react";
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
import { HeaderProfile } from "@/components/Header/HeaderProfile";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ProductDetails2() {
  const [itemSelect, setItemSelect] = useState([
    {
      id: 1,
      imageItem: require("../../../assets/images/imagesProductsDetails/imagesProductDetails2/item1_ProductDetail2.png"),
    },
    {
      id: 2,
      imageItem: require("../../../assets/images/imagesProductsDetails/imagesProductDetails2/item2_ProductDetail2.png"),
    },
    {
      id: 3,
      imageItem: require("../../../assets/images/imagesProductsDetails/imagesProductDetails2/item3_ProductDetail2.png"),
    },
    {
      id: 4,
      imageItem: require("../../../assets/images/imagesProductsDetails/imagesProductDetails2/item4_ProductDetail2.png"),
    },
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.layoutContainer}>
          <View style={styles.header}>
            <HeaderProfile titleHeader={"T-Shirt"}></HeaderProfile>
          </View>

          {/* Content */}
          <View style={styles.content}>
            {/* Start Select Item */}
            <View style={styles.layoutSelectItem}>
              <Image
                source={require("../../../assets/images/imagesProductsDetails/imagesProductDetails2/itemSelectInit_ProductsDetails2.png")}
              ></Image>

              <FlatList
                data={itemSelect}
                horizontal={true}
                renderItem={({ item }) => (
                  <View>
                    <Image
                      source={item.imageItem}
                      style={styles.sizeImgItem}
                    ></Image>
                  </View>
                )}
                contentContainerStyle={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              ></FlatList>
              {/* End Select Item */}
            </View>

            {/* Start Layout Details Product */}
            <View style={styles.layoutDetailProduct}>
              <View style={styles.priceProductContent}>
                <Text style={{ fontSize: 36 }}>$2,99</Text>
                <View
                  style={{
                    width: 80,
                    height: 40,
                    backgroundColor: "yellow",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                  }}
                >
                  <Text>Buy 1 Get 1</Text>
                </View>
              </View>

              <View style={styles.descriptionProductContent}>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 23 }}>
                    Hoodie shirt
                  </Text>
                  <Text>Occaecat est deserunt tempor offici</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    height: 50,
                    alignItems: "center",
                  }}
                >
                  <Entypo name="star" size={24} color="yellow" />
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>4.5</Text>
                </View>
              </View>
              {/* End Details Product */}
            </View>

            {/*Start Color  */}
            <View style={styles.containerColorItem}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Color</Text>

              <View style={styles.layoutColorItem}>
                <View
                  style={[styles.sizeColorItem, { backgroundColor: "brown" }]}
                ></View>
                <View
                  style={[styles.sizeColorItem, { backgroundColor: "red" }]}
                ></View>
                <View
                  style={[styles.sizeColorItem, { backgroundColor: "yellow" }]}
                ></View>
              </View>
            </View>

            {/* Start Size */}
            <View style={styles.containerColorItem}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Size</Text>

              <View style={styles.layoutSizeItem}>
                <Pressable style={[styles.itemSizeContent]}>
                  <Text>XS</Text>
                </Pressable>

                <Pressable style={[styles.itemSizeContent]}>
                  <Text>S</Text>
                </Pressable>

                <Pressable style={[styles.itemSizeContent]}>
                  <Text>M</Text>
                </Pressable>

                <Pressable style={[styles.itemSizeContent]}>
                  <Text>L</Text>
                </Pressable>

                <Pressable style={[styles.itemSizeContent]}>
                  <Text>XL</Text>
                </Pressable>
              </View>
            </View>

            {/* Start Quantity */}
            <View style={styles.containerTotalItemContent}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Quantity</Text>
              <View style={styles.layoutTotalContent}>
                <View style={styles.handleQtyContent}>
                  <Pressable>
                    <AntDesign name="minussquare" size={20} color="black" />
                  </Pressable>
                  <Text>0</Text>
                  <Pressable>
                    <AntDesign name="plussquare" size={20} color="orange" />
                  </Pressable>
                </View>
                <View style={styles.totalContent}>
                  <Text>Total</Text>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    $4.98
                  </Text>
                </View>
              </View>
              {/* End Qty */}
            </View>

            {/* Start Size Guide */}
            <View style={styles.layoutSizeGuideAndReview}>
              <Text>Size guide</Text>
              <AntDesign name="right" size={20} color="black" />
              {/* End Size Guide */}
            </View>

            {/* Start Review */}
            <View style={[styles.layoutSizeGuideAndReview, { marginTop: 10 }]}>
              <Text>Reviews (99)</Text>
              <AntDesign name="right" size={20} color="black" />
              {/* End Size Guide */}
            </View>

            {/* BTN Add To Cart */}
            <View style={styles.layoutBtnAddToCart}>
              <Pressable
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "orange",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="shoppingcart" size={20} color="white" />
                <Text style={{ marginLeft: 10, color: "white" }}>
                  Add To Cart
                </Text>
              </Pressable>
            </View>

            {/* End Content */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layoutBtnAddToCart: {
    width: "92%",
  },

  layoutSizeGuideAndReview: {
    width: "92%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalContent: {
    width: 100,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  layoutTotalContent: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerTotalItemContent: {
    width: "92%",
  },

  handleQtyContent: {
    width: 100,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemSizeContent: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  containerSize: {
    width: "92%",
  },

  layoutSizeItem: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerColorItem: {
    width: "92%",
  },

  layoutColorItem: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sizeColorItem: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },

  layoutColorContent: {},

  descriptionProductContent: {
    width: "100%",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },

  priceProductContent: {
    width: 180,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  layoutDetailProduct: {
    width: "92%",
  },

  layoutSelectItem: {},

  sizeImgItem: {
    width: 90,
    height: 50,
  },

  content: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {},

  container: {
    width: "100%",
    height: 750,
    backgroundColor: "red",
    flexDirection: "column",
    alignItems: "center",
  },

  layoutContainer: {
    width: "90%",
    height: 750,
    backgroundColor: "blue",
  },
});
