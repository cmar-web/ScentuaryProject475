import React from 'react';
import * as ReactNative from 'react-native';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
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
        alignItems: 'center',
        padding: 16,
    },
    input: {
        height: 40,
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

    largeText: {
        fontSize: 32, // Large font size
        fontWeight: 'bold', // Makes the text bold
        textAlign: 'center', // Centers the text horizontally
        marginTop: 20, // Adds space at the top
        color: '#333', // Dark gray text color (adjust as needed)
    },
    inputField: {
        gap: 8,
        alignSelf: 'stretch',
    },
    inputContainer: {
        borderColor: '#d9d9d9',
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignSelf: 'stretch',
    },
    inputLabel: {
        textAlign: 'left',
        color: '#1e1e1e',
        fontFamily: 'Inter-Regular',
        lineHeight: 22,
        fontSize: 16,
        marginBottom: 4,
    },
    button: {
        backgroundColor: '#676767',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 20,
    },
    buttonText: {
        color: '#f5f5f5',
        fontSize: 16,
        fontWeight: '600',
    },
    textLink: {
        color: '#3c4043',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 12,
    },
    signInWithContainer: {
        height: 40,
        borderColor: '#dadce0',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 16,
    },
    signInWithText: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Roboto-Medium',
        color: '#3c4043',
        textAlign: 'center',
    },
    googleLogo: {
        width: 20,
        height: 20,
        marginRight: 8,
    },

});