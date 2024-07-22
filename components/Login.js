import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image, StatusBar, Button } from 'react-native';
const Login = () => {
  return (
    <View>
      <ImageBackground resizeMode="cover" style={styles.image}>
        <Text>Email:
          <TextInput style={styles.input}
            value={Number}
            placeholder="Email"
            keyboardType="numeric"
          />
        </Text>
        <Text>password:
          <TextInput style={styles.input}
            value={Number}
            placeholder="password"
            keyboardType="numeric"
          />
        </Text>
        <Button placeholder="xyz" title="Login" style={styles.button} />
        <Text> Don't have and Account:
          <Button placeholder="xyz" title="Sign in" style={styles.buttons} />

        </Text>
      </ImageBackground>
    </View>
  );

};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'pink',
    //paddingLeft: 600,
    // paddingBottom: 400,
  },
  button: {
    backgroundColor: 'white',
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttons: {
    //marginTop:300,
    backgroundColor: 'white',
    color: 'white',
  },
});

export default Login;