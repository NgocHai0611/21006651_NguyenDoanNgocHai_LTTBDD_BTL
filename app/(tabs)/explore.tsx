import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, ScrollView, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Electronics from "@/components/Content/ContentHome/Electronic";
import FreshFruits from "@/components/Content/ContentHome/Fruits";

export default function TabTwoScreen() {
  return <FreshFruits></FreshFruits>;
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
