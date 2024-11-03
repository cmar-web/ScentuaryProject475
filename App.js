// App.js
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen'; // Adjust the path if necessary
import Login from './app/components/Login'; // Adjust the path if necessary
import Register from './app/components/Register'; // Adjust the path if necessary

const Stack = createNativeStackNavigator();

export default function App() {
    console.log("App executed");
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

