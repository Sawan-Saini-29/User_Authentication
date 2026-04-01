import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
} from "react-native";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { AuthContext } from "../context/AuthContext";
import { validateEmail, validatePassword } from "../utils/validation";
import ErrorModal from "../components/ErrorModal";
import SQLite from 'react-native-sqlite-storage';
import { getDBConnection, createUserTable } from '../database/database';
import { addUser, checkUserExists } from '../services/userService';
import { GlobleStyle } from "../components/GlobleStyle";

const SignupScreen = ({ navigation }: any) => {
  const { signup } = useContext(AuthContext);
  const [db, setDb] = useState<SQLite.SQLiteDatabase>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    initDB();
  }, []);

  const initDB = async () => {
    const database = await getDBConnection();
    setDb(database);
    await createUserTable(database);
  };

  const handleSignup = async () => {
    const userExists = await checkUserExists(db!, email);

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

    if (userExists) {
      setErrorMessage("User already exists")
      setErrorVisible(true)
      return;
    }

    try {

      await addUser(db!, {
        name,
        email
      });

      await signup(name, email, password);

    } catch (error: any) {
      setErrorMessage(error.message)
      setErrorVisible(true)
    }
  };

  return (
    <SafeAreaView style={GlobleStyle.container}>
      <View style={GlobleStyle.circleTop} />
      <View style={GlobleStyle.circleBottom} />

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

});