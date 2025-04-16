import React from "react";
import { router, Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import { getUserData } from "../services/userServices";
import DrawerNaviagator from "./(main)/DrawerNaviagator";
import Drawer from "expo-router/drawer";

const _layout = () => {
  return (
    // <AuthProvider>
    //   <MainLayout />
    // </AuthProvider>

    <Drawer>
      <Drawer.Screen name="index"
        options={{
          headerShown: false,
          drawerLabel: "Profile",
          title: 'Profile',
        }}
      />

      <Drawer.Screen name="home/index"
        options={{
          headerShown: false,
          drawerLabel: "Home",
          title: 'Home',
        }}
      />
    </Drawer>
  );
};

const MainLayout = () => {
  const { setAuth, setUserData } = useAuth();

  // useEffect(() => {

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     if (session) {

  //       setAuth(session?.user);
  //       updateUserData(session?.user);
  //       router.replace("./home");
  //     } else {
  //       setAuth(null);
  //       router.replace("./Welcome");
  //     }
  //   });
  //   //For Navigation to Home Screen
  // }, []);
  // useEffect(()=>{
  //   updateUserData(session?.user);
  // })

  //Update User Data

  const updateUserData = async (user) => {
    let email = user?.email;

    let res = await getUserData(user?.id);

    if (res.success) {
      setUserData({ ...res.data, email });
    }
  };

  return <DrawerNaviagator />
};

export default _layout;
