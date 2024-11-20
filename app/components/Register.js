import React, { useState } from 'react';
import { View, TextInput, Button, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { auth, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

import { styles } from '../assets/styles';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const navigation = useNavigation(); // Initialize navigation

    const handleRegister = async () => {
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Add user info to Firestore db, including username
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                email: email,
                username: username,
                createdAt: new Date().toISOString(),
            });

            console.log('User registered and added to Firestore:', email);

            // Navigate to Browse screen
            navigation.navigate('browse');
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage(error.message);
        }
    };

    return (
        // <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
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
                <Button title="Register" onPress={handleRegister} />
            </View>
        // </SafeAreaView>
    );
};

export default Register;
