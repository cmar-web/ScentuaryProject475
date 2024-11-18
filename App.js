//App.js
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Login1 from './app/components/Login';
import Register from './app/components/Register';
//import login from './Screens/Assets/login';
import browse from 'C:/Users/cmari/OneDrive/Documents/CMPSC475/ScentuaryProject475/app/screens/browse.js';

const Stack = createNativeStackNavigator();

export default function App() {
    console.log("App executed");
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={Login1} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="browse" component={browse} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

