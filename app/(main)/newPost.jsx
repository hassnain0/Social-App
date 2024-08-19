import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import Screenwrapper from "../../components/Screenwrapper";
import Header from "../../components/Header";
import { hp, wp } from "../../helper/common";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../../components/avatar";
import { theme } from "../../constants/theme";
const newPost = () => {
  const { user } = useAuth();
  return (
    <Screenwrapper bg={"white"}>
      <View style={styles.container}>
        <Header showBackButton={true} title={"Create Post"} />
        <ScrollView contentContainerStyle={{ gap: 20 }}>
          <View style={styles.header}>
            <Avatar
              uri={user?.image}
              size={hp(6.5)}
              rounded={theme.radius.xxl}
            />
            <View style={{ gap: 2 }}>
              <Text style={styles.username}>Hassnain Ali</Text>
              <Text style={styles.publicText}>Public</Text>
            </View>
          </View>
          <View>
          </View>
          <Text style={styles.TextEditor}></Text>
        </ScrollView>
      </View>
    </Screenwrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: wp(4),
    gap: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  username: {
    fontSize: hp(2.2),
    fontWeight: theme.fonts.semibold,
  },
  publicText: {
    fontSize: hp(1.7),
    fontWeight: theme.fonts.medium,
    color: theme.colors.textLight,
  },
});
export default newPost;
