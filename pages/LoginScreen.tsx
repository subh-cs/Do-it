


import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, Text, View, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import backgroundImage from '../assets/Group5.png';
import logo from '../assets/logo.png';
StatusBar.setBarStyle('light-content');
import * as Font from 'expo-font';



import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ loginHandler }) => {
  const navigation = useNavigation();

  const navigateToSplash = () => {
    navigation.navigate('Splash');
  };

  const navigateToGroupInfoScreen = () => {
    navigation.navigate('GroupInfoScreen');
  };
  const PaymentScreen = () => {
    navigation.navigate('PaymentScreen');
  };


useEffect(() => {
  // Load the font asynchronously
  Font.loadAsync({ 'GiveYouGlory': GiveYouGloryFont });
});

  // const  = () => {
  //   useEffect(() => {
  //     // Load the font asynchronously
  //     Font.loadAsync({ 'GiveYouGlory': GiveYouGloryFont });
  //   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.content}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>
            The seed of every habit is a single tiny decision
          </Text>

        <TouchableOpacity onPress={navigateToSplash}>
          <Text className='text-red-400' >Go to exercise/terms and condition</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={PaymentScreen}>
            <Text className='text-green-400 pt-3'>Go to PaymentScreen</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToGroupInfoScreen}>
            <Text className='text-blue-400 pt-3'>Go to GroupInfoScreen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Button clicked!')}
          >
            <Text style={styles.buttonText} onPress={loginHandler}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 2, // Add top padding for Android devices
    backgroundColor: '#101010',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: 24, // Add top padding to create space for the network bar and battery icon
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 109,
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    fontFamily: 'GiveYouGlory',

  },
  button: {
    fontWeight: 'bold',
    borderRadius: 5,
    backgroundColor: '#212121',
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: 'rgba(0, 0, 0, 0.137)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    width: 286,
    height: 50,
    position: 'absolute',
    bottom: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: '#00C2FF',
    fontSize: 20,
    letterSpacing: 0.1,
  },
});

export default LoginScreen;
