import React, { useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from "react-native"

import CustomButton from "../components/CustomButton"
import LogoutModal from "../components/LogoutModal"
import { AuthContext } from "../context/AuthContext"
import SQLite from 'react-native-sqlite-storage';
import { User } from '../models/User';
import { getDBConnection } from '../database/database';
import { getUsers } from '../services/userService'

const { width } = Dimensions.get("window")

const HomeScreen = ({ navigation }: any) => {
  const { user, logout } = useContext(AuthContext)
  const [visible, setVisible] = useState(false)

  const confirmLogout = async () => {
    setVisible(false)
    await logout()
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.circleTop} />
      <View style={styles.circleBottom} />

      <View style={styles.container}>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.name?.charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text style={styles.title}>
            Welcome Back to the Home Page!
          </Text>

          <Text style={styles.name}>
            {user?.name}
          </Text>

          <Text style={styles.email}>
            {user?.email}
          </Text>

          <CustomButton
            title="See Users List"
            onPress={() => navigation.navigate("UserListScreen")}
          />

          <CustomButton
            title="Logout"
            onPress={() => setVisible(true)}
          />

        </View>

      </View>

      <LogoutModal
        visible={visible}
        onCancel={() => setVisible(false)}
        onConfirm={confirmLogout}
      />

    </SafeAreaView>
  )
}

export default HomeScreen


const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#F4F6FB"
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 18,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,

    alignItems: "center"
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },

  avatarText: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold"
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },

  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#4A90E2",
    marginBottom: 5
  },

  email: {
    fontSize: 16,
    color: "#777",
    marginBottom: 25
  },

  circleTop: {
    position: "absolute",
    width: width * 1.2,
    height: width * 1.2,
    backgroundColor: "#4A90E2",
    borderRadius: width,
    top: -width * 0.7,
    left: -width * 0.1
  },

  circleBottom: {
    position: "absolute",
    width: width * 1.1,
    height: width * 1.1,
    backgroundColor: "#6FB1FC",
    borderRadius: width,
    bottom: -width * 0.6,
    right: -width * 0.2
  }

})