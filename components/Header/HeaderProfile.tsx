import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ImageBackground,
} from "react-native";

import stylesGobal from "@/assets/css/style";

import AntDesign from "@expo/vector-icons/AntDesign";

export function HeaderProfile({ titleHeader }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <AntDesign name="left" size={25} color="black" />
        <Text style={stylesGobal.textTitle}>{titleHeader}</Text>
      </View>

      <View style={styles.rightSection}>
        <AntDesign name="shoppingcart" size={25} color="black" />
        <ImageBackground
          source={require("../../assets/images/AvatarHeader.png")}
          style={{
            width: 30,
            height: 30,
            backgroundColor: "green",
            borderRadius: 50,
          }}
          resizeMode="cover"
        ></ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    flexDirection: "row", // Đưa các thành phần thành hàng ngang
    justifyContent: "space-between", // Căn giữa các thành phần
    alignItems: "center", // Canh giữa theo trục dọc (theo chiều cao)
  },
  leftSection: {
    width: 108,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between", //
    alignItems: "center", // Sắp xếp biểu tượng và văn bản theo hàng ngang
  },
  rightSection: {
    width: 70,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Sắp xếp biểu tượng và ảnh theo hàng ngang
  },
});
