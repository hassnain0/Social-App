import {
  View,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Screenwrapper from "../../components/Screenwrapper";
import { useRouter } from "expo-router";
import Header from "../../components/Header";
import { hp, wp } from "../../helper/common";
import Icon from "../../assets/Icons";
import { theme } from "../../constants/theme";
import Avatar from "../../components/avatar";

const Profile = () => {
  const router = useRouter();
  return (
    <Screenwrapper bg={"white"}>
      <UserHeader router={router} />
    </Screenwrapper>
  );
};
const UserHeader = ({ router }) => {
  return (
    <View style={styles.container}>
      <View>
        <Header title={"Profile"} mb={30} showBackButton={true} />
        <TouchableOpacity style={styles.logoutButton}>
          <Icon name={"logout"} color={theme.colors.rose} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{ gap: 15 }}>
          <View style={styles.avatarContainer}>
            <Avatar size={hp(12)} rounded={theme.radius.xxl * 1.4} />
            <Pressable
              onPress={() => {
                router.push("editProfile");
              }}
              style={styles.editIcon}
            >
              <Icon name={"edit"} color={"gray"} strokeWidth={2.5} size={20} />
            </Pressable>
          </View>

          {/* Username and Address */}
          <View style={{ alignItems: "center", gap: 4 }}>
            <Text style={styles.userName}>Hassnain Ali</Text>
            <Text style={styles.infoText}>New York</Text>
          </View>

          {/* Info  email, contact and bio*/}
          <View style={{ gap: 20 }}>
            <View style={styles.info}>
              <Icon name={"mail"} size={20} color={theme.colors.textLight} />
              <Text style={styles.infoText}>hassnainalidayo6@gmail.com</Text>
            </View>
            <View style={styles.info}>
              <Icon name={"call"} size={20} color={theme.colors.textLight} />
              <Text style={styles.infoText}>+92**********</Text>
            </View>
            <View style={styles.info}>
              <Icon name={"user"} size={20} color={theme.colors.textLight} />
              <Text style={styles.infoText}>zyx</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  logoutButton: {
    position: "absolute",
    right: 0,
    padding: 5,
    marginTop: hp(1),
    borderRadius: theme.radius.sm,
    backgroundColor: "#fee2e2",
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
  userName: {
    fontSize: hp(3),
    fontWeight: "500",
    color: theme.colors.textDark,
  },
  infoText: {
    fontSize: hp(1.6),
    fontWeight: "500",
    color: theme.colors.textLight,
  },
});
export default Profile;
