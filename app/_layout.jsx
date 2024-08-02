import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import { Text } from "react-native";

const _layout = () => {
  return (
  <Stack screenOptions={{headerShown:false}}/>
  )
}

export default _layout;
