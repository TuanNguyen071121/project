import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton} />
      <View style={styles.deleteButton} />
      <Image
        style={styles.image}
        source={require('../assets/2.jpg')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 30,
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
  },
  deleteButton: {
    position: 'absolute',
    top: 40,
    right: 30,
    width: 50,
    height: 50,
    backgroundColor: '#4ECDC4',
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: 70,
  },
});

export default ViewImageScreen;
