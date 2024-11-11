// LandingScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from 'C:/Users/cmari/OneDrive/Documents/CMPSC475/ScentuaryProject475/firebase_folder/firebase.js'

const LandingScreen = ({ navigation }) => {

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                navigation.replace('Login'); // Navigate back to Login screen
            })
            .catch((error) => console.error('Error signing out: ', error));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Scentuary!</Text>
            <Text style={styles.description}>
                You have successfully logged in. Enjoy exploring the app!
            </Text>
            <Button title="Log Out" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4a90e2',
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 40,
    },
});

export default LandingScreen;