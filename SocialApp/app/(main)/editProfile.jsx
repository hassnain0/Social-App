import { View, Pressable, ScrollView, Text } from "react-native";
import Button from "../../components/Button";
import React, { useEffect, useState } from "react";
import Screenwrapper from "../../components/Screenwrapper";
import Header from "../../components/Header";
import { StyleSheet } from "react-native";
import { hp, wp } from "../../helper/common";
import Avatar from "../../components/avatar";
import { theme } from "../../constants/theme";
import Input from "../../components/Input";
import Icon from "../../assets/Icons";
import utils from "../../helper/utils";
import { useAuth } from "../../context/AuthContext";
import { getUserImageSrc, uploadFile } from "../../services/imageServices";
import Toast from "react-native-toast-message";
import { updateUserData } from "../../services/userServices";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const editProfile = () => {
  //States
  const { user: currentUser, setUserData } = useAuth();
  const [loading, setLoading] = useState(false);


  const [user, setUser] = useState({
    name: "",
    phone: "",
    image: null,
    bio: "",
    address: "",
  });

  const onPickImage = async () => {
    let results = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!results.canceled) {
      setUser({ ...currentUser, image: results.assets[0] });
    }
    console.log("Current user after selecting Image", user.image);
  };

  const onSubmit = async () => {
    let userData = { ...user };
    let { name, phone, address, image, bio } = userData;
    if (!name || !phone || !address || !bio || !image) {
      utils.errorMsg("Please fill all the feidls");
      return;
    }

    setLoading(true);

    if (typeof image == "object") {
      let imageRes = await uploadFile("profiles", image?.uri, true);
      if (imageRes.success) userData.image = imageRes.data;
      else {
        userData.image = null;
      }
    }
    const res = await updateUserData(currentUser?.id, userData);
    setLoading(false);
    if (res.sucess) {
      setUserData({ ...currentUser, ...userData });
      utils.successMsg("Successfully Profile Updated");
    }
  };

  let imagesource = user?.image && typeof user.image == "object" ? user.image.uri : getUserImageSrc(currentUser?.image);



  useEffect(() => {
    if (currentUser) {
      setUser({
        name: currentUser?.name,
        phone: currentUser?.phone || "",
        address: currentUser?.address || "",
        bio: currentUser?.bio || "",
        image: currentUser?.image || null,

      });
    }
  }, []);

  return (
    <Screenwrapper bg={"white"}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View>
            <Header mb={30} showBackButton={true} title={"Edit Profile"} />
          </View>
          {/* Another View Component */}
          <View style={styles.container}>
            <View style={{ gap: 12, marginBottom: 10 }}>
              <View style={styles.avatarContainer}>
                <Avatar
                  uri={imagesource}
                  rounded={theme.radius.xxl * 1.4}
                  size={hp(12)}
                />
                <Pressable
                  onPress={() => {
                    onPickImage();
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
              <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
                Please fill your profile details
              </Text>
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
                    value={user.name}
                    onChangeText={(value) => setUser({ ...user, name: value })}
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
                    value={user.phone}
                    onChangeText={(value) => {
                      setUser({ ...user, phone: value });
                    }}
                    keyboardType={"numeric"}
                  />
                </View>
                <View>
                  <Input
                    icon={
                      <Icon
                        color={"gray"}
                        name={"location"}
                        size={26}
                        strokeWidth={1.6}
                      />
                    }
                    placeholder="Enter your Address"
                    onChangeText={(value) => {
                      setUser({ ...user, address: value });
                    }}
                    value={user.address}
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
                    multiline={true}
                    containerStyle={styles.bio}
                    onChangeText={(value) => {
                      setUser({ ...user, bio: value });
                    }}
                    value={user.bio}
                  />
                </View>
              </View>
            </View>
            <Button
              onPress={() => {
                onSubmit();
              }}
              title="Update"
              loading={loading}
            />
          </View>
        </ScrollView>
        <Toast setRef={(ref) => Toast.setRef(ref)} />
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
  bio: {
    flexDirection: "row",
    height: hp(15),
    alignItems: "flex-start",
    paddingVertical: 15,
  },
});
export default editProfile;
