import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";

const SettingScreen: FC = () => {
    return (
        <View style={styles.container}>
        </View>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
});
