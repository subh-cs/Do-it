import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import HomeScreen from "./pages/HomeScreen";
import HomeScreen from "./pages/Homescreen";
// import HomeScreen from "./src/pages/Homescreen";



import LoginScreen from "./pages/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginHandler = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loggedIn ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen
            name="Login"
            component={() => <LoginScreen loginHandler={loginHandler} />}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
