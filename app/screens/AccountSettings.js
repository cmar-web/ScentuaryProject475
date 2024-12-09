import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal, TextInput, Switch, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BottomNavBar from "./BottomNavBar";
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from './notificationHandler'; // Import the updated handler

const AccountSettings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [newInput, setNewInput] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const handleSubmit = () => {
    alert(`${modalContent} has been updated!`);
    setModalVisible(false);
  };

  const handleDeleteAccount = () => {
    alert("Your account has been deleted.");
    setModalVisible(false);
  };

  const handleCancelSubscription = () => {
    alert("Your subscription has been canceled.");
    setModalVisible(false);
  };

  const toggleNotifications = async () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);

    if (newValue) {
      const token = await registerForPushNotificationsAsync();
      if (!token) {
        alert('Since you previously disabled notifications, please enable notifications in your device settings.');
        setNotificationsEnabled(false); // Reset switch if there was an error
      }
    } else {
      alert('Notifications have been disabled.');
    }
  };

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Account Settings</Text>

        <Text style={styles.sectionHeader}>Account Information</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.button} onPress={() => openModal("Change Username")}>
            <Text style={styles.buttonText}>Change Username</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => openModal("Change Password")}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => openModal("Change Email")}>
            <Text style={styles.buttonText}>Change Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => openModal("Cancel Subscription")}>
            <Text style={styles.buttonText}>Cancel Subscription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => openModal("Delete Account")}>
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader}>App Customization</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.button} onPress={() => openModal("Notifications")}>
            <Text style={styles.buttonText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => openModal("App Theme")}>
            <Text style={styles.buttonText}>App Theme</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomNavBar />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.closeIcon} onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.modalText}>{modalContent}</Text>
            {modalContent === "Change Username" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Current Username"
                  placeholderTextColor="#888"
                  value={currentInput}
                  onChangeText={setCurrentInput}
                />
                <TextInput
                  style={styles.input}
                  placeholder="New Username"
                  placeholderTextColor="#888"
                  value={newInput}
                  onChangeText={setNewInput}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
            {modalContent === "Change Password" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Current Password"
                  placeholderTextColor="#888"
                  value={currentInput}
                  onChangeText={setCurrentInput}
                  secureTextEntry
                />
                <TextInput
                  style={styles.input}
                  placeholder="New Password"
                  placeholderTextColor="#888"
                  value={newInput}
                  onChangeText={setNewInput}
                  secureTextEntry
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
            {modalContent === "Change Email" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Current Email"
                  placeholderTextColor="#888"
                  value={currentInput}
                  onChangeText={setCurrentInput}
                />
                <TextInput
                  style={styles.input}
                  placeholder="New Email"
                  placeholderTextColor="#888"
                  value={newInput}
                  onChangeText={setNewInput}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
            {modalContent === "Notifications" && (
              <View style={styles.inputContainer}>
                <View style={styles.switchContainer}>
                  <Text style={styles.switchText}>Enable Notifications</Text>
                  <Switch
                    onValueChange={toggleNotifications}
                    value={notificationsEnabled}
                  />
                </View>
              </View>
            )}
            {modalContent === "App Theme" && (
              <View style={styles.inputContainer}>
                <TouchableOpacity
                  style={[styles.optionButton, theme === "Light" && styles.selectedOptionButton]}
                  onPress={() => changeTheme("Light")}
                >
                  <Text style={styles.optionButtonText}>Light Mode {theme === "Light" && "✓"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.optionButton, theme === "Dark" && styles.selectedOptionButton]}
                  onPress={() => changeTheme("Dark")}
                >
                  <Text style={styles.optionButtonText}>Dark Mode {theme === "Dark" && "✓"}</Text>
                </TouchableOpacity>
              </View>
            )}
            {modalContent === "Cancel Subscription" && (
              <View style={styles.inputContainer}>
                <Text style={styles.modalText}>Would you like to cancel your subscription?</Text>
                <TouchableOpacity style={styles.yesButton} onPress={handleCancelSubscription}>
                  <Text style={styles.submitButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.submitButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            )}
            {modalContent === "Delete Account" && (
              <View style={styles.inputContainer}>
                <Text style={styles.modalText}>Are you sure you want to delete your account?</Text>
                <TouchableOpacity style={styles.yesButton} onPress={handleDeleteAccount}>
                  <Text style={styles.submitButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.submitButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  section: {
    marginBottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "relative", // To position the close icon
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalText: {
    fontSize: 20,
    color: "#333",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    width: "100%",  // Span the width of the container
  },
  submitButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
    width: "100%",  // Span the width of the container
  },
  yesButton: {
    backgroundColor: "#ff4f4f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
    width: "100%",
  },
  noButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
    width: "100%",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  switchText: {
    fontSize: 18,
    color: "#333",
  },
  optionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",  // Span the width of the container
  },
  optionButtonText: {
    fontSize: 18,
    color: "#333",
  },
  selectedOptionButton: {
    backgroundColor: "#2196F3",
  },
  selectedOptionButtonText: {
    color: "#fff",
  },
});

export default AccountSettings;


