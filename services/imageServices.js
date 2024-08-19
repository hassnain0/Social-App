import { decode } from "base64-arraybuffer";
import * as FileSystem from "expo-file-system";
import { supabase } from "../lib/supabase";
export const getUserImageSrc = (imagePath) => {
  if (imagePath) {
    return { uri: imagePath };
  } else {
    return require("../assets/Images2/defaultUser.png");
  }
};

export const uploadFile = async (folderName, fileUri, isImage = true) => {
  try {
    let fileName = getFilePath(folderName, isImage);
    const fileBaseUri = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    let imageData = decode(fileBaseUri);
    const { data, error } = await supabase
      .storage()
      .from("uploads")
      .upload(fileName, imageData, {
        cahcheControl: "3600",
        upsert: false,
        contentType: isImage ? "image/*" : "video/*",
      });
      if(error){
        return { success: false, msg: "Could not upload media" };
      }
      console.log("Data after uploading image",data)

        return {success:true, data:data.path}
      
  } catch (error) {
    console.log("File Upload error", error);
    return { success: false, msg: "Could not upload media" };
  }
};

export const getFilePath = (folderName, isImage) => {
  return `/${folderName}/${new Date().getTime()}${isImage ? "png" : ".mp4"}`;
};
