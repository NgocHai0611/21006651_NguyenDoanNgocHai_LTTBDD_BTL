import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export function HeaderSearch() {
  return (
    <View style={styles.container}>
      <View>
        <Feather
          name="search"
          size={24}
          color="black"
          style={styles.iconSearch}
        />

        <TextInput
          style={styles.input}
          placeholder="Search For Product"
          selectionColor={"black"}
        ></TextInput>
      </View>

      <View style={styles.boxFilter}>
        <Ionicons name="filter" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 36,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  input: {
    width: 297,
    height: 36,
    backgroundColor: "#BCC1CAFF",
    borderRadius: 6,
    opacity: 0.3,
    paddingLeft: 30,
    color: "#222222",
  },

  iconSearch: {
    height: 36,
    position: "absolute",
    top: 5,
  },

  boxFilter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    backgroundColor: "#BCC1CAFF",
    opacity: 0.3,
    borderRadius: 6,
  },
});
