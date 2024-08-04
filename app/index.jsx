import {
  View,
  Image,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import slider from "../helper/slider";
import { theme } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helper/common";
import ScrollButton from "../components/ScrollButton";

const index = () => {
  //For Navigation
  const [currentSliderIndicator, setCurrentSliderIndicator] = useState(0);
  const Slide = ({ item }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Image
          source={item.image}
          style={{ height: "70%", width: wp(100), resizeMode: "contain" }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            {slider.map((item, index) => (
              <View
                style={[
                  styles.indicator,
                  currentSliderIndicator == index && {
                    backgroundColor: theme.colors.dark,
                    width: 25,
                  },
                ]}
              />
            ))}
          </View>
          <ScrollButton />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <FlatList
        data={slider}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: hp(10),
    textAlign: "center",
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    height: hp(10),
    width: wp(10),
    padding: hp(5),
    marginTop: hp(4),
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: hp(2),
    fontWeight: theme.fonts.bold,
  },
  subtitle: {
    textAlign: "center",

    lineHeight: hp(3),
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: theme.colors.primary,
    marginTop: hp(5),
    marginHorizontal: 2,
  },
});

export default index;
