import { View, Text } from "react-native";
import React from "react";
import { hp } from "../helper/common";
import { theme } from "../constants/theme";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { getUserImageSrc } from "../services/imageServices";

const Avatar = ({
  uri,
  size = hp(3.5),
  rounded = theme.radius.md,
  style = {},
}) => {
  return (
    <Image
      source={getUserImageSrc(uri)}
      transition={100}
      style={[
        styles.avatar,
        { height: size, width: size, borderRadius: rounded },
        style,
      ]}
    />
  );
};
const styles = StyleSheet.create({
  avatar: {
    borderCurve: "continuous",
    borderColor: theme.colors.darklight,
    borderWidth: 1,
  },
});
export default Avatar;

