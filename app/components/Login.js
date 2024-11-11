//Login.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
//path was giving me a ton of issues for firebase.js so i just threw the whole thing in for now
import { auth, signInWithEmailAndPassword } from 'C:/Users/cmari/OneDrive/Documents/CMPSC475/ScentuaryProject475/firebase_folder/firebase.js';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

   const handleLogin = async () => {
           try {
               await signInWithEmailAndPassword(auth, email, password);
               //Navigates to landingscreen if credentials are correct
               navigation.replace('LandingScreen');
           } catch (error) {
               console.error("Login error:", error);
               Alert.alert("Login Failed", error.message); //Display login failure when needed
           }
       };

       return (
           <View style={styles.container}>
               <Text style={styles.title}>Login</Text>
               <TextInput
                   placeholder="Email"
                   value={email}
                   onChangeText={setEmail}
                   style={styles.input}
                   autoCapitalize="none"
                   keyboardType="email-address"
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

   const styles = StyleSheet.create({
       container: {
           flex: 1,
           justifyContent: 'center',
           padding: 16,
           backgroundColor: '#f0f0f0',
       },
       title: {
           fontSize: 24,
           fontWeight: 'bold',
           marginBottom: 24,
           textAlign: 'center',
           color: '#333',
       },
       input: {
           height: 40,
           borderColor: 'gray',
           borderWidth: 1,
           marginBottom: 12,
           paddingHorizontal: 8,
           backgroundColor: 'white',
       },
   });

   export default Login;