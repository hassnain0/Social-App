import { View, Text, Pressable, FlatList, LogBox } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { wp, hp } from "../../helper/common";
import { theme } from "../../constants/theme";
import { useAuth } from "../../context/AuthContext";
import ScreenWrapper from "../../components/Screenwrapper";
import Icon from "../../assets/Icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import Avatar from "../../components/avatar";
import PostCard from "../../components/PostCard";
import Drawer from 'expo-router/drawer';

const Home = () => {
  const { user } = useAuth();
  const { data } = useLocalSearchParams();

  const parsedData = data ? JSON.parse(data) : null;
  const postData = [
    {
      id: 1,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Hello World!<b> Welcome to the platform<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 2,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Good Morning!<b> Have a great day<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 3,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Stay Safe!<b> Take care<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 4,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Happy Coding!<b> Enjoy your work<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 5,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Keep Learning!<b> Knowledge is power<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 6,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Stay Positive!<b> Good vibes only<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 7,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Be Kind!<b> Spread love<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 8,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Work Hard!<b> Achieve your goals<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 9,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Stay Focused!<b> Keep pushing<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 10,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Be Creative!<b> Think outside the box<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 11,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Stay Healthy!<b> Eat well<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 12,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Stay Humble!<b> Be grateful<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 13,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Stay Motivated!<b> Keep going<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
    {
      id: 14,
      name: "Tester",
      created_at: "Jun 19",
      body: '<div><p>Stay Curious!<b> Never stop learning<b/></p><div>',
      video: require('../../assets/postVideos/buildingVideo.mp4')
    },
  ]

  const getPost = async () => {

  }

  useEffect(() => {
    getPost();
  })
  LogBox.ignoreLogs(['Warning: TNodeChildrenRenderer: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.', 'MemoizedTNodeRenderer: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.'])
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
                uri={user?.image}
                rounded={theme.radius.small}
                size={hp(4.3)}
              />
            </Pressable>
          </View>
        </View>
        <FlatList
          data={postData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <PostCard
            item={item}
            currentUser={user}
          />}
        />
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
  contentContainerStyle: {
    paddingTop: 20,
    paddingHorizontal: wp(4),
  },
  avatarImage: {
    height: hp(10),
  },
});
