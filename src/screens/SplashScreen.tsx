import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circleTop} />
      <View style={styles.circleBottom} />

      <View style={styles.content}>
        <Text style={styles.logo}>Auth App</Text>
        <Text style={styles.subtitle}>Secure Authentication</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FB",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    alignItems: "center",
  },

  logo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 25,
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