import { View, Text, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { wp, hp } from "../../helper/common";
import { theme } from "../../constants/theme";
import { useAuth } from "../../context/AuthContext";
import ScreenWrapper from "../../components/Screenwrapper";
import Icon from "../../assets/Icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import Avatar from "../../components/avatar";


const Home = () => {
  const { user } = useAuth();
  const { data } = useLocalSearchParams();

  console.log('Raw data:', data); // Debugging step

  const parsedData = data ? JSON.parse(data) : null;

  console.log('Parsed data:', parsedData); // Debugging step
  const router = useRouter();
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
                router.push("notification");
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
                router.push("newPost");
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
                router.push({
                  pathname: 'profile',
                  params: {
                    data: JSON.stringify(parsedData), // Ensure data is stringified
                  },
                });
              }}
            >
              <Avatar
                uri={user && user?.image}
                rounded={theme.radius.small}
                size={hp(4.3)}
              />
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
