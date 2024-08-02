import { View, Text } from "react-native";
import React from "react";
import Screenwrapper from "../../components/Screenwrapper";
import BackButton from "../../components/BackButton";
import Header from "../../components/Header";
import { StyleSheet } from "react-native";
import { hp, wp } from "../../helper/common";
import Avatar from "../../components/avatar";
import { theme } from "../../constants/theme";
import Input from "../../components/Input";
import { Icon } from "@rneui/themed";
const editProfile = () => {
  return (
    <Screenwrapper bg={"white"}>
      <View style={styles.container}>
        <View>
          <Header co mb={30} showBackButton={true} title={"Edit Profile"} />
        </View>
        <View style={styles.container}>
          <View style={{ gap: 12 }}>
            <Avatar rounded={theme.radius.xxl * 1.4} size={hp(12)} />
          </View>
        </View>
        <View style={{ alignItems: "center", gap: 4 }}>
          <Input
            icon={
              <Icon color={"gray"} name={"user"} size={26} strokeWidth={1.6} />
            }
            placeholder="Enter your Name"
            onChangeText={(value) => {}}
          />
        </View>
      </View>
    </Screenwrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
});
export default editProfile;
