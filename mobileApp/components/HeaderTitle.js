import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

// COMPONENT BODY
export default function HeaderTitle() {
  return (
    <View style={HeaderTitleStyles.HeaderTitleStyles}>
      <Image
        resizeMethod="resize"
        resizeMode="contain"
        style={HeaderTitleStyles.HeaderImage}
        source={require("../assets/images/soundlinklogo.png")}
      />
    </View>
  );
}

// COMPONENT STYLES
const HeaderTitleStyles = StyleSheet.create({
  HeaderTitleStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    backgroundColor: "black",
    borderBottomColor: "gray",
    borderBottomWidth: "1px",
  },
  HeaderImage: {
    marginLeft: "10px",
    height: "100px",
    width: "120px",
  },
});
