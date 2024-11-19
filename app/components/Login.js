import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { auth, signInWithEmailAndPassword } from '../../firebase/firebase';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../assets/styles';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const database = getFirestore();

    const handleLogin = async () => {
        try {
            // Check if username exists in the database
            const q = query(collection(database, "users"), where("username", "==", username));
            const queryCheck = await getDocs(q);

            if (queryCheck.empty) {
                Alert.alert("Login failed", "Username could not be found");
                return;
            }

            // Get corresponding email
            const loginUser = queryCheck.docs[0];
            const email = loginUser.data().email;

            // Sign in with email and password
            await signInWithEmailAndPassword(auth, email, password);
            navigation.replace('browse');
        } catch (error) {
            console.error("Login error:", error);
            Alert.alert("Login Failed", error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.largeText}> Welcome Back!</Text>
                <Image
                    style={styles.logo}
                    source={require('../assets/ScentuaryLogo.png')}
                />
                <Text style={styles.header}>Welcome Back</Text>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <Button title="Login" onPress={handleLogin} color="#6c63ff" />


                <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
                     Forgot password?
                </Text>

                 <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
                     Register
                 </Text>
            </View>
        </SafeAreaView>


    );
};


export default Login;
