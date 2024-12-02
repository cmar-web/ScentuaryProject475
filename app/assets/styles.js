import React from 'react';
import * as ReactNative from 'react-native';
import {StyleSheet} from 'react-native';


export const styles = ReactNative.StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#e3bccc',
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 150,
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 90,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        padding: 16,
    },

    settingsBackground: {
        flex: 1,
        backgroundColor: '#e3bccc',
        alignItems: "flex-start",

    },

    profileSection: {
        alignItems: "flex-start",
        marginBottom: 20,
        paddingVertical: 50,
    },

    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: "#e3bccc", // Placeholder color
        marginBottom: 25,
        overflow: "hidden",
    },

    button: {
        backgroundColor: "#945493",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 5,
        marginBottom: 10,
    },

    settingsNavButtons: {
        backgroundColor: "#945493",
        marginBottom: 5,
        borderRadius: 5,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginHorizontal: 5,

    },

    buttonText: {
        color: "#fff", // White text
        fontSize: 16,
        fontWeight: "bold",
    },

    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333", // Dark gray text
    },
});