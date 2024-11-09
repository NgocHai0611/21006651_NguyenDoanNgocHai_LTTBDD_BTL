import React, { useRef, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function FeedBackProduct() {
  // ref
  const bottomSheetRef = useRef(null);

  const handleCloseBottomSheet = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
    }
  };

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet ref={bottomSheetRef}>
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.layoutTitleFeedBack}>
            <View style={{ width: 10, height: 40 }}></View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>FeedBack</Text>
            <Pressable onPress={handleCloseBottomSheet}>
              <Text style={{ fontSize: 25 }}>X</Text>
            </Pressable>
          </View>

          <View style={styles.layoutIconFeedBack}>
            <Entypo name="emoji-sad" size={31} color="black" />
            <FontAwesome6 name="face-rolling-eyes" size={31} color="black" />
            <Fontisto name="smiley" size={31} color="black" />
          </View>

          <View style={styles.containerBtnSevice}>
            <View style={styles.layoutBtnSevice}>
              <Pressable style={styles.btnSevice}>
                <Text>Service</Text>
                <AntDesign name="plus" size={24} color="black" />
              </Pressable>

              <Pressable style={styles.btnSevice}>
                <Text>Quantity</Text>
                <AntDesign name="plus" size={24} color="black" />
              </Pressable>
            </View>

            <View style={styles.layoutBtnSevice}>
              <Pressable style={styles.btnSevice}>
                <Text>Payment</Text>
                <AntDesign name="plus" size={24} color="black" />
              </Pressable>

              <Pressable style={styles.btnSevice}>
                <Text>Delivery</Text>
                <AntDesign name="plus" size={24} color="black" />
              </Pressable>
            </View>

            <View style={styles.layoutBtnSevice}>
              <Pressable style={styles.btnSevice}>
                <Text>Promotion</Text>
                <AntDesign name="plus" size={24} color="black" />
              </Pressable>

              <Pressable style={styles.btnSevice}>
                <Text>Gift</Text>
                <AntDesign name="plus" size={24} color="black" />
              </Pressable>
            </View>
          </View>

          {/* Start Coment */}
          <View style={styles.layoutComment}>
            <Text style={{ fontWeight: "bold" }}>Care to share more?</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={{ width: "100%", height: 70, backgroundColor: "gray" }}
            ></TextInput>
            {/* End Coment */}
          </View>

          {/* Start Upload Img */}
          <View style={styles.layoutRatingAndUploadFeedBack}>
            <Text style={{ fontWeight: "bold" }}>Upload images</Text>

            <Pressable style={styles.btnAddImg}>
              <AntDesign name="plus" size={24} color="black" />
            </Pressable>
            {/* End Upload Img */}
          </View>

          {/* Start Rating */}
          <View style={styles.layoutRatingAndUploadFeedBack}>
            <Text style={{ fontWeight: "bold" }}>Rating</Text>

            <View style={styles.iconStartFeedBack}>
              <Entypo name="star" size={24} color="yellow" />
              <Entypo name="star" size={24} color="yellow" />
              <Entypo name="star" size={24} color="yellow" />
              <Entypo name="star" size={24} color="yellow" />
              <Entypo name="star" size={24} color="gray" />
            </View>
            {/* End Rating */}
          </View>

          <Pressable style={styles.btnSubmit}>
            <Text style={{ color: "white" }}>Submit</Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  btnSubmit: {
    marginTop: 10,
    width: "90%",
    height: 50,
    backgroundColor: "orange",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  iconStartFeedBack: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  layoutRatingAndUploadFeedBack: {
    marginTop: 15,
    width: "90%",
  },

  btnAddImg: {
    width: 70,
    height: 70,
    backgroundColor: "#f3f4f6ff",
    justifyContent: "center",
    alignItems: "center",
  },

  layoutComment: {
    width: "90%",
  },

  layoutBtnSevice: {
    width: 180,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  containerBtnSevice: {},

  container: {
    height: 650,
    backgroundColor: "red",
  },
  contentContainer: {
    width: "100%",
    height: 580,
    flexDirection: "column",
    alignItems: "center",
  },

  btnSevice: {
    marginTop: 10,
    width: 80,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f3f4f6ff",
    borderRadius: 20,
  },

  layoutTitleFeedBack: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },

  layoutIconFeedBack: {
    marginTop: 15,
    width: 150,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
