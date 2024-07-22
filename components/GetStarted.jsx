import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image, StatusBar, Button } from 'react-native';

const GetStarted = () => {
    const image = { uri: 'https://imgs.search.brave.com/B3Yk-TNDWaI4zdWLA4p7v4QXM_MIMDJMBU6CaNUB82s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMDcxNTU2MjYv/aW1nX3N5bWJvbEAx/eC5wbmc' };
    return (
        <View style={styles.container} >
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Welcome!</Text>
                <Button placeholder="xyz" title="start" style={styles.button} />
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
    },
    text: {
        color: 'white',
        fontSize: 62,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
        paddingLeft: 60,
    },
    button: {
        backgroundColor: 'white',
        color: 'white',
    }
});
export default GetStarted;