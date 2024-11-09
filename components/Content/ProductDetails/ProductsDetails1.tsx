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
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ProductDetails1() {
  return (
    <ScrollView
      style={{ width: "100%", backgroundColor: "red" }}
      contentContainerStyle={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderProfile titleHeader={"HeadPhone"}></HeaderProfile>

          <View style={styles.headerSlider}></View>

          <View style={styles.layoutPriceAndPreview}>
            <Text style={{ fontSize: 20 }}>$59</Text>
            <View style={styles.contentReview}>
              <AntDesign name="staro" size={20} color="black" />
              <Text>4.5</Text>
              <Text>(99 reviews)</Text>
            </View>
          </View>

          <View style={styles.layoutDesciption}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Description
            </Text>
            <Text>
              Quis occaecat magna elit magna do nisi ipsum amet excepteur tempor
              nisi exercitation qui...
            </Text>
          </View>

          <View></View>
        </View>
        <View style={styles.content}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layoutProcess: {},
  layoutDesciption: {},
  layoutPriceAndPreview: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  contentReview: {
    flexDirection: "row",
    height: 30,
    alignItems: "center",
  },

  container: {
    width: "90%",
    height: 500,
    backgroundColor: "blue",
  },

  header: {},

  content: {},

  headerSlider: {
    width: "100%",
    height: 80,
  },
});
