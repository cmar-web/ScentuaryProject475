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

    randomizerContainer: {
        flex: 1,
        backgroundColor: "#f8f4f4",
      },
      topAppBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#fff",
        elevation: 4,
      },
      leadingIcon: {
        width: 24,
        height: 24,
      },
      headline: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
      },
      content: {
        flex: 1,
        padding: 16,
      },
      header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
      },
      subHeader: {
        fontSize: 18,
        color: "#666",
        marginBottom: 16,
      },
      wheelContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
      },
      wheel: {
        width: 200,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#ccc",
      },
      wheelText: {
        fontSize: 14,
        textAlign: "center",
        color: "#333",
      },
      spinButton: {
        backgroundColor: "#B497BD", // Lavender color
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 6,
        marginTop: 8, // Moved up closer to the wheel
        alignSelf: "center",
      },
      spinButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
      },
      shareResultButton: {
        backgroundColor: "#B497BD", // Lavender color
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 6,
        marginTop: 8, // Moved up closer to the wheel
        alignSelf: "center",
      },
      shareResultText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
      },
      addPerfumeContainer: {
        marginTop: 8, // Moved up closer
      },
      inputLabel: {
        fontSize: 16,
        color: "#333",
        marginBottom: 8,
      },
      textInput: {
        height: 40,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 8,
        borderRadius: 4,
        marginBottom: 16,
      },
      selectedProfileText: {
        fontSize: 16,
        color: "#333",
      },
      addButton: {
        backgroundColor: "#B497BD", // Lavender color
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 8, // Reduced margin to bring the button up
        borderRadius: 4,
        alignItems: "center",
      },
      addButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
      },
      tabsContainer: {
        marginTop: 16,
        paddingBottom: 8,
      },
      filtersLabel: {
        fontSize: 18, // Increased font size for the label
        //fontWeight: "bold", // Added bold text for emphasis
        color: "#333",
        marginBottom: 15, // Space it out slightly more
        marginHorizontal: 5,
      },
      tabsContentContainer: {
        alignItems: "center",
      },
      tab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        marginHorizontal: 4,
      },
      activeTab: {
        backgroundColor: "#B497BD", // Lavender
      },
      tabText: {
        fontSize: 16,
        color: "#333",
      },
      activeTabText: {
        color: "#fff",
      },
      modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      modalContent: {
        width: 300,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
      },
      modalButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: "#B497BD", // Lavender color
        borderRadius: 4,
        marginVertical: 8,
      },
      modalButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
      },
      closeButton: {
        position: "absolute",
        top: 16,
        right: 16,
        padding: 8,
        borderRadius: 16,
        //backgroundColor: "#ccc",
      },
      closeButtonText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#f00",
      },
});