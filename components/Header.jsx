import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import BackButton from "../components/BackButton";
import { hp } from "../helper/common";
import { theme } from "../constants/theme";
const Header = ({ title, showBackButton = false, mb = 10 }) => {
  const router = useRouter();
  return (
    <View style={[styles.container, { marginBottom: mb }]}>
      {showBackButton && (
        <View style={styles.showBackButton}>
          <BackButton router={router} />
        </View>
      )}

      <Text style={styles.title}>{title || ""}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  showBackButton: {
    position: "absolute",
    left: 0,
  },
  title: {
    fontSize: hp(2.7),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
});
export default Header;
