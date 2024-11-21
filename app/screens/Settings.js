import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import BottomNavBar from "./BottomNavBar"; // Import the BottomNavBar component

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Settings</Text>
        {/* Add your settings content here */}
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4", // Light beige background
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Dark gray text
    marginBottom: 20,
  },
});

export default Settings;
