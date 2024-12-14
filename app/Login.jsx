import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import Screenwrapper from "../components/Screenwrapper";
import { theme } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import BackButton from "../components/BackButton";
import { router, useRouter } from "expo-router";
import { hp, wp } from "../helper/common";
import Input from "../components/Input";
import Icon from "../assets/Icons";
import Button from "../components/Button";
import utils from "../helper/utils";
import Toast from "react-native-toast-message";
import { supabase } from "../lib/supabase";

const Login = () => {
  const route = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      utils.errorMsg("Please fill all requirements");
      return;
    }
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();

    setLoading(false);

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setLoading(false);
    console.log("Error", error);
    if (error) {
      utils.errorMsg(error.message);
    } else {
      router.push("home");
    }
  };

  return (
    <Screenwrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* Welcome Text  */}

        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back,</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please Login to Continue
          </Text>
          <Input
            icon={
              <Icon color={"gray"} name={"mail"} size={26} strokeWidth={1.6} />
            }
            placeholder="Enter your Email"
            onChangeText={(value) => {
              emailRef.current = value;
            }}
          />
          <Input
            icon={
              <Icon color={"gray"} name={"lock"} size={26} strokeWidth={1.6} />
            }
            placeholder="Enter your Password"
            onChangeText={(value) => {
              passwordRef.current = value;
            }}
            securityTextEntry={true}
          />

          <Text style={styles.forgotPassword}>Forgot Password ?</Text>

          <Button title="login" loading={loading} onPress={onSubmit}></Button>

          {/* Footer Area */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                route.push("SignUp");
              }}
            >
              <Text
                style={[
                  styles.footerText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Toast
          ref={(ref) => {
            Toast.setRef(ref);
          }}
        />
      </View>
    </Screenwrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.fonts.medium,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    textAlign: "center",
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
export default Login;
