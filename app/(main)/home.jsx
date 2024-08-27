import { View, Text, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { wp, hp } from "../../helper/common";
import { theme } from "../../constants/theme";
import { useAuth } from "../../context/AuthContext";
import ScreenWrapper from "../../components/Screenwrapper";
import Icon from "../../assets/Icons";
import { useRouter } from "expo-router";
import Avatar from "../../components/avatar";

const Home = () => {
  const router = useRouter();
  const { user, setAuth } = useAuth();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Nested View Componenets */}
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.title}>Social Hook</Text>

          {/* View Component for Icons */}

          <View style={styles.icon}>
            {/* Reusable Icons */}
            <Pressable
              onPress={() => {
                router.push("newPost");
              }}
            >
              <Icon
                name={"heart"}
                size={hp(3.2)}
                color={"#494949"}
                strokeWidth={2}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("notification");
              }}
            >
              <Icon
                name={"plus"}
                size={hp(3.2)}
                color={"#494949"}
                strokeWidth={2}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("profile");
              }}
            >
              <Avatar rounded={theme.radius.small} size={hp(4.3)} />
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: wp(4),
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(3.2),
    fontWeight: theme.fonts.bold,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  avatarImage: {
    height: hp(),
  },
});
