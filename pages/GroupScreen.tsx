import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

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
            <Text className= 'text-red-500'>ListOfGroups</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SingleGroup")}>
                <Text>View</Text>
            </TouchableOpacity>
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

export default GroupScreen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
});
