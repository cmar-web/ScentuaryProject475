//Login.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
//path was giving me a ton of issues for firebase.js so i just threw the whole thing in for now
import { auth, signInWithEmailAndPassword } from '../../firebase/firebase';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../assets/styles';

const Login = () => {
    //have users sign in with username instead of email
    //const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const database = getFirestore();

    const handleLogin = async () => {
        try {

            //we check the username first
            const q = query(collection(database, "users"), where ("username", "==",username));
            const queryCheck = await getDocs(q);

            //if empty, username not present in database:
            if(queryCheck.empty)
            {
                Alert.alert("Login failed", "Username could not be found");
                return;
            }

            //assuming user exists, we get corresponding email from the database
            const loginUser = queryCheck.docs[0];
            const email = loginUser.data().email;

            //now user can login
            await signInWithEmailAndPassword(auth, email, password);
            navigation.replace('browse');

        } catch (error) {
            console.error("Login error:", error);
             Alert.alert("Login Failed", error.message); //Display login failure when needed
        }
    };

    return (
        <View style={styles.container}>
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
            <Button title="Login" onPress={handleLogin} />
        </View>
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

export default Login;
