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
      <View style={{ marginLeft: 2 }}>
        <View
          style={{
            width: 160,
            height: 170,
            backgroundColor: "blue",
            marginBottom: 10,
          }}
        >
          <Text>{item.product_name}</Text>
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
    height: 500,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    width: 328,
    height: 500,
    backgroundColor: "black",
  },
});
