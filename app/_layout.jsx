import React, { useEffect } from "react";
import { router, Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import { Text } from "react-native";

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};
const MainLayout = () => {
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session.user);
        router.replace("./home");
      } else {
        setAuth(null);
        router.replace("./Welcome");
      }
    });
    //For Navigation to Home Screen
  }, []);
  //Set Authentication
  const { setAuth } = useAuth();
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default _layout;
