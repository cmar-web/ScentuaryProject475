import React from 'react';
import * as ReactNative from 'react-native';


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
});