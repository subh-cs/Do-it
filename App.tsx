import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/Homescreen';
import LoginScreen from './pages/LoginScreen';
import Splash from './pages/splash';
import GroupInfoScreen from './pages/GroupInfoScreen';
import PaymentScreen from './pages/PaymentScreen';
// import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";

import test_PaymentScreen from './pages/PaymentScreen';

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
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GroupInfoScreen" component={GroupInfoScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        {/* <Stack.Screen name="LoginScreen" component={PaymentScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
