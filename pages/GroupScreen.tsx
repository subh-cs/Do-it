import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import logo from '../assets/logo.png';
const Stack = createStackNavigator();

interface GroupScreenProps {
  enrollHandler: () => void;
}

const GroupScreen: FC<GroupScreenProps> = ({ enrollHandler }) => {
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

const ListOfGroups: FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Ongoing Groups</Text>
      <Text style={styles.descText}>Ongoing Groups</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SingleGroup")}>
          <View style={styles.card}>
            <Image
              source={require("../assets/object_exercise.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Exercise</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SingleGroup")}>
          <View style={styles.card}>
            <Image
              source={require("../assets/meditation.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Meditate</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity onPress={() => navigation.navigate("SingleGroup")}>
          <View style={styles.card}>
            <Image
              source={require("../assets/meditation.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Another Card</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SingleGroup: FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SingleGroup</Text>
      <TouchableOpacity onPress={() => navigation.navigate("PaymentPage")}>
        <Text>Enroll</Text>
      </TouchableOpacity>
    </View>
  );
};

const PaymentPage: FC<GroupScreenProps> = ({ enrollHandler }) => {
  return (
    <View style={styles.container}>
      <Text>PaymentPage</Text>
      <TouchableOpacity onPress={enrollHandler}>
        <Text>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 20,
    height: "100%",
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#101010',
  },
  
  container2: {
    display: "flex",
    paddingTop: 20,
    height: "100%",
    paddingRight: 20,
    paddingLeft: 10,
  },
  cardContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  card: {
    width: 141,
    height: 167,
    borderWidth: 2,
    borderColor: "#474343",
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  
  cardImage: {
    width: 92,
    height: 76,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: "center",
    color: "#00C2FF",
  },
  descText: {
    color: "#FF0084",
    fontSize: 20,
    marginBottom: 10,
  },
});

export default GroupScreen;
