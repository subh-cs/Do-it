import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView , StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
StatusBar.setBarStyle('light-content')
const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const loginHandler = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loggedIn ? (
          <Stack.Screen name="Home" 
          children={() => <HomeScreen loginHandler={loginHandler} />}          />
        ) : (
          <Stack.Screen
            name="Login"
            children={() => <LoginScreen loginHandler={loginHandler} />}
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