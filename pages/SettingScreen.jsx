import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import React from "react";

const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Text>SettingScreen</Text>
    </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"100%"
  },
});
