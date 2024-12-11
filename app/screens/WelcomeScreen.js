import React from 'react';
import { Text, SafeAreaView, Image, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../assets/styles'

function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.backgroundWelcome}>
            <View style={styles.logoContainer}>
                {/* This is where we see our logo */}
                <Image style={styles.logo} source={require("../assets/ScentuaryLogo.png")} />
            </View>


            <View style={styles.buttonContainer}>
                 <Text style={styles.welcomeText}>Scentuary</Text>
            </View>

            <TouchableOpacity
                 style={styles.buttonContainer}
                 onPress={() => navigation.navigate("Login")}>
                 <Text style={styles.welcomeText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                 style={styles.buttonContainer}
                 onPress={() => navigation.navigate("Register")}>
                 <Text style={styles.welcomeText}>Register</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         backgroundColor: '#e3bccc',
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     logo: {
//         width: 150,
//         height: 150,
//     },
//     logoContainer: {
//         alignItems: 'center',
//         position: 'absolute',
//         top: 90,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginVertical: 20,
//     },
//     buttonContainer: {
//         marginTop: 20,
//     },
// });

export default WelcomeScreen;
