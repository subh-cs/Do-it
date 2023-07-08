import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ loginHandler }) => {
  const navigation = useNavigation();

  const navigateToSplash = () => {
    navigation.navigate('Splash');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginScreen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button
        title="Login"
        onPress={loginHandler}
      />
      <TouchableOpacity onPress={navigateToSplash}>
        <Text style={styles.button}>Go to Splash</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  forgotPassword: {
    marginTop: 10,
    color: '#007AFF',
  },
  button: {
    marginTop: 20,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;