//App.js
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Login1 from './app/components/Login';
import Register from './app/components/Register';
import Randomizer from './app/screens/Randomizer';
import MyCollection from './app/screens/MyCollection';
import Settings from './app/screens/Settings';
import BrowseScreen from './app/screens/browse';
import Dupes from './app/screens/Dupes';
import PrivacyAndSecurity from './app/screens/PrivacyAndSecurity';
import AccountSettings from './app/screens/AccountSettings';
import FAQ from './app/screens/FAQ';
import FragranceView from './app/screens/FragranceView';
import Subscriptions from './app/screens/Subscriptions';


const Stack = createNativeStackNavigator();

export default function App() {
    console.log("App executed");
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={Login1} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Browse" component={BrowseScreen} />
                <Stack.Screen name="Randomizer" component={Randomizer} />
                <Stack.Screen name="MyCollection" component={MyCollection} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Dupes" component={Dupes} />
                <Stack.Screen name="PrivacyAndSecurity" component={PrivacyAndSecurity} />
                <Stack.Screen name="AccountSettings" component={AccountSettings} />
                <Stack.Screen name="FAQ" component={FAQ} />
                <Stack.Screen name="FragranceView" component={FragranceView} />
                <Stack.Screen name="Subscriptions" component={Subscriptions} />


            </Stack.Navigator>
        </NavigationContainer>

    );
}

