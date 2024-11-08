import React from 'react';
import { Text, SafeAreaView, Image, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import main.css from "./assets"

function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.logoContainer}>
                {/* This is where we see our logo */}
                <Image style={styles.logo} source={require("../assets/ScentuaryLogo.png")} />

                <Text style={styles.title}>Scentuary</Text>

                <View style={styles.buttonContainer}>
                    {/* Takes user to login screen */}
                    <Button title="Login" onPress={() => navigation.navigate('Login')} />
                    {/* Takes user to register screen */}
                    <Button title="Register" onPress={() => navigation.navigate('Register')} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#e3bccc',
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 150,
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 90,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default WelcomeScreen;
