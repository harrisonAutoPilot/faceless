import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Button = (props) => {
  return (
    <View style={props.style}>
    <TouchableOpacity onPress={props.onPress}>
    <Text>{props.title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
   
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor:'black',
    width:80,
    height:80,

  },
});

export default Button;