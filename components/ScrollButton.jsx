import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Icon from "../assets/Icons";
import { theme } from "../constants/theme";
import { hp, wp } from "../helper/common";
import { useRouter } from "expo-router";

const ScrollButton = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push("Login")} style={styles.button}>
      <Icon color={"white"} height={40} width={40} name={"ArrowRight"} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    height: hp(10),
    width: wp(10),
    padding: hp(5),
    marginTop: hp(1),
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ScrollButton;
