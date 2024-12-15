import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { auth, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../assets/styles';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleRegister = async () => {
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Add user details to Firestore
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                email,
                username,
                createdAt: new Date().toISOString(),
            });

            console.log('User successfully registered and added to Firestore:', email);

            // Navigate to Browse screen
            navigation.replace('Browse');
        } catch (error) {
            console.error('Registration error:', error);
            Alert.alert('Registration Failed', error.message); // Display error alert
        }
    };

    return (
        <SafeAreaView style={styles.backgroundRegAndLog}>
            <View>
                <Text style={styles.header}>Welcome!</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleRegister}
                >
                  <Text style={styles.welcomeButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 16,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 12,
//         paddingHorizontal: 8,
//     },
// });

export default Register;
