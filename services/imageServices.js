import { decode } from "base64-arraybuffer";
import * as FileSystem from "expo-file-system";
import { supabase }  from "../lib/supabase";

export const getUserImageSrc = (imagePath) => {
  if (imagePath) {
    return getSupabasefileUrl(imagePath);
  } else {
    return require("../assets/Images2/defaultUser.png");
  }
};

export const  getSupabasefileUrl=filePath=>{
  if(filePath){
      return{uri:`https://bbggvlzyklxallfdlcnu.supabase.co/storage/v1/object/sign/uploads/profiles/1724776911415png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1cGxvYWRzL3Byb2ZpbGVzLzE3MjQ3NzY5MTE0MTVwbmciLCJpYXQiOjE3MjQ3Nzg0NTUsImV4cCI6MzQ1Mjc3ODQ1NX0.GJDdWQ6ewgH3Up6lTzKg8uwHjrwQJu64pDPQJQN25AU&t=2024-08-27T17%3A07%3A36.321Z`}
  }
  return null;

}
export const uploadFile = async (folderName, fileUri, isImage = true) => {
  
  try {
    let fileName = getFilePath(folderName, isImage);
    const fileBaseUri = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    let imageData = decode(fileBaseUri);
    const { data, error } = await supabase
      .storage
      .from("uploads")
      .upload(fileName, imageData, {
        cahcheControl: "3600",
        upsert: false,
        contentType: isImage ? "image/*" : "video/*",
      });
      if(error){
        return { success: false, msg: "Could not upload media" };
      }
  
        return {success:true, data:data.path}
      
  } catch (error) {
    console.log("File Upload error", error);
    return { success: false, msg: "Could not upload media" };
  }
};

export const getFilePath = (folderName, isImage) => {
  return `/${folderName}/${new Date().getTime()}${isImage ? "png" : ".mp4"}`;
};
