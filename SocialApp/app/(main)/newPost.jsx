import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import Screenwrapper from "../../components/Screenwrapper";
import Header from "../../components/Header";
import { hp, wp } from "../../helper/common";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../../components/avatar";
import { theme } from "../../constants/theme";
import RichTextEditor from "../../components/RichTextEditor";
import Button from "../../components/Button";
import Icon from "../../assets/Icons";
import * as ImagePicker from "expo-image-picker";
const newPost = () => {
  const { user } = useAuth();
  const bodyRef = useRef("");
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(file);


  const getFileType = (file) => {
    if (!file) return null;

    if (isLocalFile) {
      return file.type;
    }
    //check image 
    if(file.includes('postImage')){
      return 'image';
    }
    else{
      return 'video';
    }
  }

  const isLocalFile = () => {
    if (!file) return null;
    if (typeof file == 'object') return true;

    return false;
  }
  const onPick = async (isImage) => {
    let mediaConfig = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    }

    if (!isImage) {
      mediaConfig = {
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
      }
    }

    let results = await ImagePicker.launchImageLibraryAsync(mediaConfig);
  
    console.log("Files",results.assets[0]);
    if (!results.canceled) {
      setFile(results.assets[0]);
    }
  }
  const onSubmit = async () => {
    console.log("Hello")
  }

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
          <View style={styles.TextEditor}>
            <RichTextEditor
              editorRef={editorRef}
              onChange={(body) => bodyRef.current == body}
            />
          </View>

          {
            file && (
              <View style={styles.file}>
                {
                  getFileType(file) == 'video' ? (<></>) : (<></>)
                }
              </View>
            )
          }
          <View style={styles.media}>
            <Text style={styles.addImageText}>Add Image to Your Post</Text>
            <View style={styles.mediaIcons}>
              <TouchableOpacity onPress={() => onPick(true)}>
                <Icon name={"image"} size={30} color={theme.colors.dark} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPick(true)}>
                <Icon name={"video"} size={30} color={theme.colors.dark} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Button
          buttonStyle={{ height: hp(6.2) }}
          title="Post"
          loading={loading}
          hasShadow={false}
          onPress={onSubmit}
        />
      </View>
    </Screenwrapper>
  );
};

const styles = StyleSheet.create({
  file: {
    height: hp(30),
    width: '100%',
    borderRadius: theme.radius.xl,
    overflow: 'hidden',
    borderCurve: 'continuous',
  },

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
  media: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1.5,
    padding: 12,
    borderRadius: theme.radius.xl,
    borderCurve: 'continuous',
    borderColor: theme.colors.gray,
  },
  addImageText: {

  },
  mediaIcons: {
    flexDirection: "row",

  }
});
export default newPost;
