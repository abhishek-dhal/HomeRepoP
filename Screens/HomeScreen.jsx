import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import CardComponent from '../components/CardComponent';
import Carousel from '../components/Carousel';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <View style={styles.spacing} />
      <CardComponent />
      <View style={styles.spacing} />
      <Carousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spacing: {
    height: 20, // Adjust the height to add more or less space between components
  },
});

export default HomeScreen;