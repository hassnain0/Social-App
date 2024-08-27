import React, { useEffect } from "react";
import { router, Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import { Text } from "react-native";
import { getUserData } from "../services/userServices";

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};
const MainLayout = () => {
  const { setAuth, setUserData } = useAuth();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session?.user);
        updateUserData(session?.user);
        router.replace("./home");
      } else {
        setAuth(null);
        router.replace("./Welcome");
      }
    });
    //For Navigation to Home Screen
  }, []);

  //Update User Data
  const updateUserData = async (user) => {
    let res = await getUserData(user?.id);
    if (res.sucess) {
      setUserData(res?.data);
    }
  };

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default _layout;
