//Login.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView } from 'react-native';
//path was giving me a ton of issues for firebase.js so i just threw the whole thing in for now
import { auth, signInWithEmailAndPassword, db } from '../../firebase/firebase';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../assets/styles';
import { collection, query, where, getDocs } from "firebase/firestore";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            const q = query(collection(db, "users"), where("username","==", username));
            const queryCheck = await getDocs(q);

            if (queryCheck.empty)
            {
                Alert.alert("Login failed.", "Username could not be found");
                return;
            }

            const loginUser = queryCheck.docs[0];
            const email = loginUser.data().email;

            await signInWithEmailAndPassword(auth, email, password);
            navigation.replace('Browse');
            //Handle successful login
        } catch (error) {
            console.error("Login error:", error);
             Alert.alert("Login Failed", error.message); //Display login failure when needed
        }
    };

    return (

    <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <TextInput
                    placeholder="username"
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

export default Login;
