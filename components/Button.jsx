import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { hp } from "../helper/common";
import Loading from "./Loading";

const Button = ({
  buttonStyle,
  textStyle,
  title = "",
  onPress = () => {},
  loading = false,
  hasShadow = true,
}) => {
  const shadowStyle = {
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 8,
    elevation: 4,
  };

  if (loading == true) {
    return (
      <View style={[styles.Button, buttonStyle, { backgroundColor: "white" }]}>
        <Loading />
      </View>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      style={[styles.Button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    backgroundColor: theme.colors.primary,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: theme.radius.xl,
  },
  text: {
    color: theme.colors.darklight,
    fontWeight: theme.fonts.bold,
    fontSize: 20,
  },
  footer: {
    gap: 30,
    width: "100",
  },
});
