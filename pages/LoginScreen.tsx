import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import backgroundImage from '../assets/Group5.png';
import logo from '../assets/logo.png';

import { useNavigation } from '@react-navigation/native';
// import Splash from './splash';
const LoginScreen = ({ loginHandler }) => {
  const navigation = useNavigation();

  // const navigateToSplash = () => {
  //   navigation.navigate('Splash');
  // };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>
          The seed of every habit is a single tiny decision
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Button clicked!')}
        >
          <Text style={styles.buttonText} onPress={loginHandler}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

  );
};
      {/* <Button
        title="Get Started"
        onPress={loginHandler}
      /> */}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#101010',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
