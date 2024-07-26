import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
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

const SignUp = () => {
  const route = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      utils.errorMsg("Please fill all requirements");
      return;
    }
  };

  return (
    <Screenwrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* Welcome Text  */}

        <View>
          <Text style={styles.welcomeText}>Let's </Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
        <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please fill the details to create an account
          </Text>
        <Input
            icon={<Icon name={"user"} size={26} strokeWidth={1.6} />}
            placeholder="Enter your Name"
            onChangeText={(value) => {
              emailRef.current = value;
            }}
          />
          <Input
            icon={<Icon name={"mail"} size={26} strokeWidth={1.6} />}
            placeholder="Enter your Email"
            onChangeText={(value) => {
              emailRef.current = value;
            }}
          />
          <Input
            icon={<Icon name={"lock"} size={26} strokeWidth={1.6} />}
            placeholder="Enter your Password"
            onChangeText={(value) => {
              passwordRef.current = value;
            }}
            securityTextEntry={true}
          />
           <Input
            icon={<Icon name={"lock"} size={26} strokeWidth={1.6} />}
            placeholder="Re Enter your Password"
            onChangeText={(value) => {
              passwordRef.current = value;
            }}
            securityTextEntry={true}
          />

          <Button title="SignUP" loading={loading} onPress={onSubmit}></Button>

          {/* Footer Area */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account ?</Text>
            <TouchableOpacity onPress={()=>{route.push('Login')}}>
                
              <Text
                style={[
                  styles.footerText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                    paddingHorizontal:wp(2)
                  },
                ]}
              >
                Login
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
export default SignUp;
