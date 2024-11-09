import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, ScrollView, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ModalFilter from "@/components/Content/Modal/ModalFilter";
import ProductDetails1 from "@/components/Content/ProductDetails/ProductsDetails1";
import ProductDetails2 from "@/components/Content/ProductDetails/ProductsDetails2";
import CheckOut from "@/components/Content/CheckOut/CheckOut";
import MethodPayment from "@/components/Payment/ChoseMethodPayment";
import ResultPayMent from "@/components/Payment/ResultPayment";
import FeedBackProduct from "@/components/FeedBack/ProductFeedBack";

export default function TabTwoScreen() {
  return <FeedBackProduct></FeedBackProduct>;
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
