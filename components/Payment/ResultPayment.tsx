import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  FlatList,
  ImageBackground,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function ResultPayMent() {
  return (
    <View style={styles.container}>
      <View style={styles.layoutContainer}>
        <AntDesign name="checkcircle" size={80} color="green" />
        <Text style={{ fontSize: 30, color: "orange" }}>
          Order placed successfully!
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", width: 280 }}>
          Commodo eu ut sunt qui minim fugiat elit nisi enim
        </Text>

        {/* Start  Bills */}
        <View style={styles.layoutDetailBill}>
          <View style={styles.detailsBill}>
            <Text>Subtotal</Text>
            <Text>$2,800</Text>
          </View>

          <View style={styles.detailsBill}>
            <Text>Tax(10%)</Text>
            <Text>$280</Text>
          </View>

          <View style={styles.detailsBill}>
            <Text>Fees</Text>
            <Text>$0</Text>
          </View>

          <View
            style={[
              styles.detailsBill,
              { borderTopWidth: 2, borderStyle: "solid", borderColor: "gray" },
            ]}
          >
            <Text>Card</Text>
            <View
              style={{ flexDirection: "row", height: 40, alignItems: "center" }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../assets/images/Payment/IconVisaCart.png")}
              ></Image>
              <Text>2324</Text>
            </View>
          </View>

          <View
            style={[
              styles.detailsBill,
              { borderTopWidth: 2, borderStyle: "solid", borderColor: "gray" },
            ]}
          >
            <Text>Total</Text>
            <View
              style={{
                flexDirection: "row",
                width: 130,
                justifyContent: "space-between",
              }}
            >
              <Text>Success</Text>
              <Text>$3,080</Text>
            </View>
          </View>
          {/* End  Bills */}
        </View>

        {/* Start Ratting */}
        <View style={styles.layoutRating}>
          <Text>How was your experience?</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Entypo name="star" size={24} color="yellow" />
            <Entypo name="star" size={24} color="yellow" />
            <Entypo name="star" size={24} color="yellow" />
            <Entypo name="star" size={24} color="yellow" />
            <Entypo name="star" size={24} color="yellow" />
          </View>
          {/* End Ratting */}
        </View>

        <Pressable style={styles.btnBackToHome}>
          <AntDesign name="home" size={24} color="white" />
          <Text style={{ color: "white" }}>Back To Home</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnBackToHome: {
    flexDirection: "row",
    width: "92%",
    height: 40,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  layoutRating: {},

  layoutDetailBill: {
    width: "92%",
  },

  detailsBill: {
    width: "100%",
    height: 40,
    backgroundColor: "#f3f4f6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  container: {
    width: "100%",
    height: 650,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  layoutContainer: {
    width: "92%",
    height: 500,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
