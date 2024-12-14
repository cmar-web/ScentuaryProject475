import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal, TextInput, Switch, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BottomNavBar from "./BottomNavBar";
import {styles} from '../assets/styles';


const PrivacyAndSecurity = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [newInput, setNewInput] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("current@example.com");
  const [currentPhone, setCurrentPhone] = useState("123-456-7890");
  const [profileVisibility, setProfileVisibility] = useState("Visible");

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
    setCurrentInput("");
    setNewInput("");
  };

  const handleSubmit = () => {
    if (modalContent === "Recovery Email") {
      setCurrentEmail(newInput);
    } else if (modalContent === "Recovery Phone") {
      setCurrentPhone(newInput);
    }
    alert(`${modalContent} has been updated!`);
    setModalVisible(false);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(previousState => !previousState);
  };

  const handleProfileVisibility = (visibility) => {
    setProfileVisibility(visibility);
    alert(`Profile visibility set to ${visibility}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.sectionHeader}>Privacy</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.buttonPrivacyAndSecurity} onPress={() => openModal("Profile Visibility")}>
            <Text style={styles.lightBackgroundButtonText}>Profile Visibility</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrivacyAndSecurity} onPress={() => openModal("Location Preferences")}>
            <Text style={styles.lightBackgroundButtonText}>Location Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrivacyAndSecurity} onPress={() => openModal("Activity Status")}>
            <Text style={styles.lightBackgroundButtonText}>Activity Status</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader}>Security</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.buttonPrivacyAndSecurity} onPress={() => openModal("Two-Factor Authentication")}>
            <Text style={styles.lightBackgroundButtonText}>Two-Factor Authentication</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrivacyAndSecurity} onPress={() => openModal("Recovery Email")}>
            <Text style={styles.lightBackgroundButtonText}>Recovery Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrivacyAndSecurity} onPress={() => openModal("Recovery Phone")}>
            <Text style={styles.lightBackgroundButtonText}>Recovery Phone</Text>
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
            {modalContent === "Profile Visibility" && (
              <View style={styles.inputContainer}>
                <TouchableOpacity
                  style={[styles.optionButton, profileVisibility === "Visible" && styles.selectedOptionButton]}
                  onPress={() => handleProfileVisibility("Visible")}
                >
                  <Text style={styles.optionButtonText}>Visible</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.optionButton, profileVisibility === "Invisible" && styles.selectedOptionButton]}
                  onPress={() => handleProfileVisibility("Invisible")}
                >
                  <Text style={styles.optionButtonText}>Invisible</Text>
                </TouchableOpacity>
              </View>
            )}
            {modalContent === "Location Preferences" && (
              <View style={styles.inputContainer}>
                <View style={styles.switchContainer}>
                  <Text style={styles.switchText}>Enable Location</Text>
                  <Switch
                    onValueChange={toggleNotifications}
                    value={notificationsEnabled}
                  />
                </View>
              </View>
            )}
            {modalContent === "Activity Status" && (
              <View style={styles.inputContainer}>
                <View style={styles.switchContainer}>
                  <Text style={styles.switchText}>Show Activity Status</Text>
                  <Switch
                    onValueChange={toggleNotifications}
                    value={notificationsEnabled}
                  />
                </View>
              </View>
            )}
            {modalContent === "Two-Factor Authentication" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Code"
                  placeholderTextColor="#888"
                  value={currentInput}
                  onChangeText={setCurrentInput}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
            {modalContent === "Recovery Email" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Current Recovery Email"
                  placeholderTextColor="#888"
                  value={currentEmail}
                  editable={false}
                />
                <TextInput
                  style={styles.input}
                  placeholder="New Recovery Email"
                  placeholderTextColor="#888"
                  value={newInput}
                  onChangeText={setNewInput}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
            {modalContent === "Recovery Phone" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Current Recovery Phone"
                  placeholderTextColor="#888"
                  value={currentPhone}
                  editable={false}
                />
                <TextInput
                  style={styles.input}
                  placeholder="New Recovery Phone"
                  placeholderTextColor="#888"
                  value={newInput}
                  onChangeText={setNewInput}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f4f4",
//   },
//   content: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 16,
//   },
//   sectionHeader: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#444",
//     marginVertical: 10,
//     alignSelf: "flex-start",
//   },
//   section: {
//     marginBottom: 20,
//     width: "100%",
//   },
//   button: {
//     backgroundColor: "#fff",
//     padding: 16,
//     marginBottom: 10,
//     borderRadius: 8,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   lightBackgroundButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.5)",
//   },
//   modalView: {
//     width: "80%",
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 10,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     position: "relative",
//   },
//   closeIcon: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//   },
//   modalText: {
//     fontSize: 20,
//     color: "#333",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     width: "100%",
//   },
//   input: {
//     backgroundColor: "#fff",
//     color: "#000",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     fontSize: 16,
//     width: "100%",
//   },
//   submitButton: {
//     backgroundColor: "#2196F3",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     marginVertical: 5,
//     width: "100%",
//   },
//   submitButtonText: {
//     color: "#fff",
//     fontSize: 18,
//   },
//   switchContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   switchText: {
//     fontSize: 18,
//     color: "#333",
//   },
//   optionButton: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     padding: 16,
//     marginBottom: 10,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     width: "100%",
//   },
//   optionButtonText: {
//     fontSize: 18,
//     color: "#333",
//   },
//   selectedOptionButton: {
//     backgroundColor: "#2196F3",
//   },
//   selectedOptionButtonText: {
//     color: "#fff",
//   },
// });

export default PrivacyAndSecurity;
