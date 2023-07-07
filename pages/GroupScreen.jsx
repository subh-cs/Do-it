import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const GroupScreen = ({ enrollHandler }) => {
  return (
    <Stack.Navigator
      initialRouteName="ListOfGroups"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ListOfGroups" component={ListOfGroups} />
      <Stack.Screen name="SingleGroup" component={SingleGroup} />
      <Stack.Screen
        name="PaymentPage"
        children={() => <PaymentPage enrollHandler={enrollHandler} />}
      />
    </Stack.Navigator>
  );
};

const ListOfGroups = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ListOfGroups</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SingleGroup")}>
        <Text>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const SingleGroup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SingleGroup</Text>
      <TouchableOpacity onPress={() => navigation.navigate("PaymentPage")}>
        <Text>Enroll</Text>
      </TouchableOpacity>
    </View>
  );
};

const PaymentPage = ({ enrollHandler }) => {
  return (
    <View style={styles.container}>
      <Text>PaymentPage</Text>
      <TouchableOpacity onPress={enrollHandler}>
        <Text>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
