import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { hp } from "../helper/common";

const Input = ({ icon,placeholder,containerStyles,inputRef,onChangeText,securityTextEntry }) => {
 
  return (
    
    <View style={[styles.container, containerStyles ]}>
      {icon && icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={inputRef}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={securityTextEntry}
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
    borderWidth: 0.6,
    borderColor: theme.colors.dark,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    paddingHorizontal: 18,
    gap: 12,
  },
});
export default Input;
