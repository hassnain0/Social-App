import { View, Pressable} from "react-native";
import Button from "../../components/Button";
import React from "react";
import Screenwrapper from "../../components/Screenwrapper";
import Header from "../../components/Header";
import { StyleSheet } from "react-native";
import { hp, wp } from "../../helper/common";
import Avatar from "../../components/avatar";
import { theme } from "../../constants/theme";
import Input from "../../components/Input";
import Icon from "../../assets/Icons";
const editProfile = () => {
  return (
    <Screenwrapper bg={"white"}>
      <View style={styles.container}>
        <View>
          <Header mb={30} showBackButton={true} title={"Edit Profile"} />
        </View>
        {/* Another View Component */}
        <View style={styles.container}>
          <View style={{ gap: 12, marginBottom: 10 }}>
            <View style={styles.avatarContainer}>
              <Avatar rounded={theme.radius.xxl * 1.4} size={hp(12)} />
              <Pressable
                onPress={() => {
                  router.push("editProfile");
                }}
                style={styles.editIcon}
              >
                <Icon
                  name={"camera"}
                  color={theme.colors.primary}
                  strokeWidth={2.5}
                  size={20}
                />
              </Pressable>
            </View>

            <View style={{ gap: 12 }}>
              <View>
                <Input
                  icon={
                    <Icon
                      color={"gray"}
                      name={"user"}
                      size={26}
                      strokeWidth={1.6}
                    />
                  }
                  placeholder="Enter your Name"
                  onChangeText={(value) => {}}
                />
              </View>
              <View>
                <Input
                  icon={
                    <Icon
                      color={"gray"}
                      name={"call"}
                      size={26}
                      strokeWidth={1.6}
                    />
                  }
                  placeholder="Enter your Phone Number"
                  onChangeText={(value) => {
                    "+92********";
                  }}
                />
              </View>
              <View>
                <Input
                  icon={
                    <Icon
                      color={"gray"}
                      name={"home"}
                      size={26}
                      strokeWidth={1.6}
                    />
                  }
                  placeholder="Enter your Address"
                  onChangeText={(value) => {}}
                />
              </View>
              <View>
                <Input
                  icon={
                    <Icon
                      color={"gray"}
                      name={"mail"}
                      size={26}
                      strokeWidth={1.6}
                    />
                  }
                  placeholder="Enter your Email"
                  onChangeText={(value) => {}}
                />
              </View>
              <View>
                <Input
                  icon={
                    <Icon
                      color={"gray"}
                      name={"user"}
                      size={26}
                      strokeWidth={1.6}
                    />
                  }
                  placeholder="Enter your Bio"
                  onChangeText={(value) => {}}
                />
              </View>
            </View>
          </View>

          <Button title="Update" />
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
  avatarContainer: {
    height: hp(12),
    width: hp(12),
    alignSelf: "center",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: -12,
    padding: 7,
    borderRadius: 50,
    backgroundColor: "white",
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },
});
export default editProfile;
