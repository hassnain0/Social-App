import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { hp } from "../helper/common";

const Input = (props) => {
  return (
    <View
      style={[styles.container, props.containerStyle && props.containerStyle]}
    >
      {props.icon && props.icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={props.inputRef && props.inputRef}
        secureTextEntry={props.securityTextEntry && props.securityTextEntry}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.9,
    borderColor: theme.colors.dark,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    paddingHorizontal: 18,
    gap: 12,
  },
});
export default Input;
