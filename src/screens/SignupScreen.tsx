import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { AuthContext } from "../context/AuthContext";
import { validateEmail, validatePassword } from "../utils/validation";
import ErrorModal from "../components/ErrorModal";

const { width } = Dimensions.get("window");

const SignupScreen = ({ navigation }: any) => {
  const { signup } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setErrorMessage("All fields required")
      setErrorVisible(true)
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Invalid Email")
      setErrorVisible(true)
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 6 characters")
      setErrorVisible(true)
      return;
    }

    try {
      await signup(name, email, password);
    } catch (error: any) {
      setErrorMessage(error.message)
      setErrorVisible(true)
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.circleTop} />
      <View style={styles.circleBottom} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Signup to get started</Text>

          <CustomInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />

          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput
            placeholder="Password"
            isPassword
            value={password}
            onChangeText={setPassword}
          />

          <CustomButton
            title="Signup"
            onPress={handleSignup}
          />

          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account?{" "}
            <Text style={styles.loginLink}>Login</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
      <ErrorModal
        visible={errorVisible}
        message={errorMessage}
        onClose={() => setErrorVisible(false)}
      />
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F6FB",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: 25,
  },

  loginText: {
    textAlign: "center",
    marginTop: 18,
    color: "#555",
  },

  loginLink: {
    color: "#4A90E2",
    fontWeight: "600",
  },

  circleTop: {
    position: "absolute",
    width: width * 1.2,
    height: width * 1.2,
    backgroundColor: "#4A90E2",
    borderRadius: width,
    top: -width * 0.7,
    left: -width * 0.1,
  },

  circleBottom: {
    position: "absolute",
    width: width * 1.1,
    height: width * 1.1,
    backgroundColor: "#6FB1FC",
    borderRadius: width,
    bottom: -width * 0.6,
    right: -width * 0.2,
  },
});