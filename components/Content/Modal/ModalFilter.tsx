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

import Checkbox from "expo-checkbox";
import Collapsible from "react-native-collapsible";
import AntDesign from "@expo/vector-icons/AntDesign";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";

export default function ModalFilter() {
  const [show, setShow] = useState(true);

  const toggleExpanded = () => {
    setShow(!show);
  };

  const [isChecked, setChecked] = useState(false);

  const [values, setValues] = useState([10, 1000]);

  const handleValuesChange = (values) => {
    setValues(values);
  };

  return (
    <ScrollView
      style={{ width: "100%", backgroundColor: "red" }}
      contentContainerStyle={{ flexDirection: "row", justifyContent: "center" }}
    >
      <View style={styles.containerLayout}>
        <View style={{ flexDirection: "row" }}>
          <Text>Filter</Text>
          <Text>X</Text>
        </View>

        {/* Start Content */}
        <View style={styles.containerContent}>
          {/*Shipping Options  */}
          <View>
            <Pressable onPress={toggleExpanded}>
              <View style={[styles.btnShowCollapsible]}>
                <Text style={styles.titleText}>Shipping Options</Text>
                <AntDesign name="up" size={20} color="black" />
              </View>
            </Pressable>
            <Collapsible collapsed={show}>
              <View style={styles.styleLayoutChecked}>
                <Checkbox
                  value={isChecked}
                  onValueChange={setChecked}
                ></Checkbox>
                <Text style={styles.titleText}>Instant (2 hours delivery)</Text>
              </View>

              <View style={styles.styleLayoutChecked}>
                <Checkbox
                  value={isChecked}
                  onValueChange={setChecked}
                ></Checkbox>
                <Text style={styles.titleText}>Express (2 days delivery)</Text>
              </View>

              <View style={styles.styleLayoutChecked}>
                <Checkbox
                  value={isChecked}
                  onValueChange={setChecked}
                ></Checkbox>
                <Text style={styles.titleText}>
                  Standard (7- 10 days delivery)
                </Text>
              </View>
            </Collapsible>
            {/* End Shipping Options */}
          </View>

          {/* Start Price Range */}
          <View>
            <Pressable onPress={toggleExpanded}>
              <View style={[styles.btnShowCollapsible]}>
                <Text style={styles.titleText}>Price Arrange</Text>
                <AntDesign name="up" size={20} color="black" />
              </View>
            </Pressable>
            <Collapsible
              collapsed={show}
              style={{
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <View>
                <View style={styles.layoutContainerPrice}>
                  <View style={styles.containerPrice}>
                    <Text>$ {values[0]}</Text>
                  </View>

                  <View style={styles.containerPrice}>
                    <Text>$ {values[1]}</Text>
                  </View>
                </View>

                <MultiSlider
                  values={values}
                  sliderLength={280}
                  onValuesChange={handleValuesChange}
                  min={0}
                  max={8000}
                  step={1}
                  allowOverlap={false}
                  selectedStyle={{ backgroundColor: "#1EB1FC" }}
                  unselectedStyle={{ backgroundColor: "#d3d3d3" }}
                  markerStyle={{
                    backgroundColor: "orange",
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                  }}
                />
              </View>
            </Collapsible>

            {/* End Price Range */}
          </View>

          {/* Start Average review */}
          <View>
            <Pressable onPress={toggleExpanded}>
              <View style={[styles.btnShowCollapsible]}>
                <Text style={styles.titleText}>Average Review</Text>
                <AntDesign name="up" size={20} color="black" />
              </View>
            </Pressable>

            <Collapsible collapsed={show}>
              <View style={styles.layoutReview}>
                <View style={styles.containerListIcon}>
                  <Entypo name="star" size={20} color="yellow" />
                  <Entypo name="star" size={20} color="yellow" />
                  <Entypo name="star" size={20} color="yellow" />
                  <Entypo name="star" size={20} color="yellow" />
                  <Entypo name="star" size={20} color="gray" />
                  <Text>&Up</Text>
                </View>
              </View>
            </Collapsible>

            {/* End Average review */}
          </View>

          {/* Option Review */}
          <View style={{ width: "100%" }}>
            <Pressable onPress={toggleExpanded}>
              <View style={[styles.btnShowCollapsible]}>
                <Text style={styles.titleText}>Others</Text>
                <AntDesign name="up" size={20} color="black" />
              </View>
            </Pressable>

            <Collapsible collapsed={show}>
              <View
                style={{
                  width: "100%",
                  height: 170,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.itemOption}>
                    <AntDesign name="retweet" size={24} color="black" />
                    <Text>30-day Free Return</Text>
                  </View>
                  <View style={styles.itemOption}>
                    <Feather name="shield" size={24} color="black" />
                    <Text>Buyer Protection</Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={styles.itemOption}>
                    <FontAwesome5 name="tags" size={24} color="black" />
                    <Text>Best Deal</Text>
                  </View>
                  <View style={styles.itemOption}>
                    <EvilIcons name="location" size={24} color="black" />
                    <Text>Ship to store</Text>
                  </View>
                </View>
              </View>
            </Collapsible>

            {/* End Option Reviews */}
          </View>

          {/* End Content */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerLayout: {
    width: "90%",
    height: 500,
    backgroundColor: "blue",
  },

  containerContent: {},

  btnShowCollapsible: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  styleLayoutChecked: {
    height: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
  },

  containerPrice: {
    width: 50,
    height: 30,
    backgroundColor: "white",
  },

  layoutContainerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerReview: {
    width: "100%",
  },

  layoutReview: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  containerListIcon: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemOption: {
    width: 150,
    height: 80,
    backgroundColor: "white",
    marginRight: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
