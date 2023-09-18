import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleLoginButtonPress = () => {
    navigation.navigate('ViewImageScreen');
  };

  return (
    <ImageBackground
      source={require('../assets/home.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/favicon.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginButtonPress} />
        <View style={styles.registerButton} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
    marginBottom: 15,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ECDC4',
  },
});

export default WelcomeScreen;
