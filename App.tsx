import React, { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"

import { AuthProvider } from "./src/context/AuthContext"
import AppNavigator from "./src/navigation/AppNavigator"
import { createUserTable, getDBConnection } from "./src/database/database"

const App = () => {
  useEffect(() => {
    const initDatabase = async () => {
      const db = await getDBConnection();
      await createUserTable(db);
    };
    initDatabase();
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App