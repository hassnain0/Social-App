import { View, Text, Image, StyleSheet ,Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "../components/Screenwrapper";
import StatusBar from "expo-status-bar";
import { hp, wp } from "../helper/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";
import { useRouter } from "expo-router";

const Welcome = () => {
    const router=useRouter();
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        {/* ImageComponent */}

        <Image
          resizeMode="contain"
          style={styles.image_container}
          source={require("../assets/Images2/welcome.png")}
        ></Image>

        {/* Title */}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>LinkUp!</Text>
          <Text style={styles.punchLine}>
            Where every thoughts finds a home and every image tell a story.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizantal: wp(3) }}
            onPress={() => {}}
          />

          <View style={styles.BottomContainer}>
            <Text style={styles.LoginText}>Already have an Account !</Text>
            <Pressable onPress={()=>{router.push('Login')}}><Text style={[styles.LoginText ,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold}]}>Login</Text></Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  BottomContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:5
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extrabold,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  image_container: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
  punchLine: {
    textAlign: "center",
    paddingHorizontal: hp(10),
    fontSize: hp(1.7),
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  LoginText:{
    textAlign:"center",
    color:theme.colors.text
  }
});
export default Welcome;
