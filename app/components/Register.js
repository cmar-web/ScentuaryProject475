//Register.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView } from 'react-native';
import { auth, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

import {styles} from '../assets/styles';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    //this is where the task of sending data to db takes place
    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            //Add user info to Firestore db
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                email: email,
                createdAt: new Date().toISOString()
            });
            //log success
            console.log("User registered and added to Firestore:", email);
        } catch (error) {
            //log failure
            console.error("Error during registration:", error);
            setErrorMessage(error.message);
        }
    };

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
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
//     errorText: {
//         color: 'red',
//         marginBottom: 10,
//         textAlign: 'center',
//     },
// });

export default Register;
