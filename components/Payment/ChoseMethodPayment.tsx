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
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { HeaderProfile } from "../Header/HeaderProfile";
import { useState } from "react";
import { RadioButton } from "react-native-paper";

export default function MethodPayment() {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <View style={styles.container}>
      <View style={styles.layoutCounter}>
        <View style={styles.header}>
          <HeaderProfile titleHeader={"Payment"}></HeaderProfile>
        </View>

        <View style={styles.content}>
          <View style={styles.layoutContent}>
            <View style={styles.headLineTotal}>
              <Text style={{ fontSize: 18 }}>Total</Text>
              <Text style={{ fontSize: 30 }}>$3,080</Text>
            </View>

            {/*Start Method Payment  */}
            <View style={styles.layoutMethodPayment}>
              <View style={styles.methodPaymentContent}>
                <Image
                  source={require("../../assets/images/Payment/IconVisaCart.png")}
                  style={styles.sizeImageMethod}
                ></Image>
                <View>
                  <Text>****</Text>
                  <Text>2334</Text>
                </View>

                <RadioButton
                  value="option1"
                  status={selectedValue === "option1" ? "checked" : "unchecked"}
                  onPress={() => setSelectedValue("option1")}
                  color="#007BFF"
                />
              </View>

              <View style={styles.methodPaymentContent}>
                <Image
                  source={require("../../assets/images/Payment/IconMasterCard.png")}
                  style={styles.sizeImageMethod}
                ></Image>
                <View>
                  <Text>****</Text>
                  <Text>2334</Text>
                </View>
                <RadioButton
                  value="option2"
                  status={selectedValue === "option2" ? "checked" : "unchecked"}
                  onPress={() => setSelectedValue("option2")}
                  color="#007BFF"
                />
              </View>

              <View style={styles.methodPaymentContent}>
                <Image
                  source={require("../../assets/images/Payment/IconPaypal.png")}
                  style={styles.sizeImageMethod}
                ></Image>
                <View>
                  <Text>abc@gmail.com</Text>
                </View>
                <RadioButton
                  value="option2"
                  status={selectedValue === "option3" ? "checked" : "unchecked"}
                  onPress={() => setSelectedValue("option3")}
                  color="#007BFF"
                />
              </View>
              {/* End Method Payment */}
            </View>

            <View>
              <Pressable style={styles.btnPayNow}>
                <Ionicons name="wallet-outline" size={24} color="black" />
                <Text>Paynow</Text>
              </Pressable>

              <Pressable style={styles.btnAddNewCart}>
                <AntDesign name="plus" size={24} color="orange" />
                <Text style={{ color: "orange" }}>Add new card</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headLineTotal: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: 30,
  },

  layoutContent: {
    flexDirection: "column",
    height: 400,
    justifyContent: "space-between",
  },

  layoutMethodPayment: {
    marginTop: 40,
    height: 170,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  btnPayNow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "orange",
  },

  btnAddNewCart: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
  },

  sizeImageMethod: {
    width: 80,
    height: 50,
  },

  methodPaymentContent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 50,

    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "orange",
  },

  layoutHeadLinePayment: {},

  content: {
    height: 600,
    flexDirection: "column",
    justifyContent: "center",
  },

  header: {},

  container: {
    width: "100%",
    height: 600,

    flexDirection: "row",
    justifyContent: "center",
  },
  layoutCounter: {
    width: "92%",
    height: 600,
  },
});
