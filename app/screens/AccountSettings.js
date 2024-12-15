import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal, TextInput, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNavBar from "./BottomNavBar";
import { styles } from "../assets/styles";
import { auth, db } from "../../firebase/firebase";
import { query, where, collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { sendEmailVerification, deleteUser, updateEmail, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from './notificationHandler'; // Import the updated handler

const AccountSettings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [newInput, setNewInput] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [theme, setTheme] = useState("Light");
  const [docId, setDocId] = useState(null);
  const [currentSubscription, setCurrentSubscription] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      fetchUserDocId(currentUser.uid);
    }
  }, []);

  const fetchUserDocId = async (uid) => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0];
        setDocId(docRef.id); //set doc id
        const userData = docRef.data();
        if (userData.yearlyMembership) {
          setCurrentSubscription("Yearly");
        } else if (userData.monthlyMembership) {
          setCurrentSubscription("Monthly");
        } else {
          setCurrentSubscription("None");
        }
      } else {
        alert("User document not found.");
      }
    } catch (error) {
      console.error("Error fetching user document:", error);
      alert("An error occurred while fetching user information.");
    }
  };
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

  const handleChangeUsername = async () => {
    if (!docId) {
      alert("User document not found.");
      return;
    }

    if (!newInput.trim()) {
      alert("New username cannot be empty.");
      return;
    }

    try {
      const userDocRef = doc(db, "users", docId);

      //Update the username field in teh db
      await updateDoc(userDocRef, {
        username: newInput.trim(),
      });

      alert("Username updated successfully!");
      setModalVisible(false);
    } catch (error) {
      console.error("Error changing username:", error);
      alert("An error occurred while changing the username.");
    }
  };

  const handleChangePassword = async () => {
    if (!oldPassword.trim() || !newPassword.trim()) {
      alert("Both previous and new password are needed.");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("No user is logged in.");
        return;
      }

      //reauth with old password
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credential);

      //update the password
      await updatePassword(user, newPassword);
      alert("Password updated successfully!");
      setModalVisible(false);
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Failed to change password: " + error.message);
    }
  };

  const handleChangeEmail = async () => {
    if (!currentPassword.trim() || !newEmail.trim()) {
      alert("Both current password and new email are required.");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("No user is logged in.");
        return;
      }

      //check verification
      if (!user.emailVerified) {
        alert("Please verify your email before changing it.");
        await sendEmailVerification(user);
        alert("A verification email has been sent to your current email address.");
        return;
      }

      //reauth with the user's current password
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);

      //update email
      await updateEmail(user, newEmail.trim());
      alert("Email updated successfully!");
      setModalVisible(false);
    } catch (error) {
      console.error("Error changing email:", error);
      alert("Failed to change email: " + error.message);
    }
  };

  const handleDeleteAccount = async () => {
    if (!currentPassword.trim()) {
      alert("Password is required to delete the account.");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("No user is logged in.");
        return;
      }

      //reauthenticate the user with their current password
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);

      //if the document exists, delete it
      if (docId) {
        await deleteDoc(doc(db, "users", docId));
      }

      //delete the user in firebase authentication
      await deleteUser(user);

      alert("Your account has been successfully deleted.");
      setModalVisible(false);
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Failed to delete account: " + error.message);
    }
  };

  const handleCancelSubscription = async () => {
    if (!docId) {
      alert("User document not found.");
      return;
    }

    try {
      const userDocRef = doc(db, "users", docId);
      const updateData =
        currentSubscription === "Yearly"
          ? { yearlyMembership: false }
          : { monthlyMembership: false };

      await updateDoc(userDocRef, updateData);

      alert(`Your ${currentSubscription} subscription has been canceled.`);
      setCurrentSubscription("None");
      setModalVisible(false);
    } catch (error) {
      console.error("Error canceling subscription:", error);
      alert("An error occurred while canceling the subscription.");
    }
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

        <Text style={styles.sectionHeader}>Account Information</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Change Username")}>
            <Text style={styles.lightBackgroundButtonText}>Change Username</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Change Password")}>
            <Text style={styles.lightBackgroundButtonText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Change Email")}>
            <Text style={styles.lightBackgroundButtonText}>Change Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Cancel Subscription")}>
            <Text style={styles.lightBackgroundButtonText}>Cancel Subscription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Delete Account")}>
            <Text style={styles.lightBackgroundButtonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader}>App Customization</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Notifications")}>
            <Text style={styles.lightBackgroundButtonText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("App Theme")}>
            <Text style={styles.lightBackgroundButtonText}>App Theme</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomNavBar />

    {modalVisible && (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={24} color="#B497BD" />
            </TouchableOpacity>

            <Text style={styles.modalText}>{modalContent}</Text>

            {modalContent === "Change Username" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter new username"
                  value={newInput}
                  onChangeText={setNewInput}
                />
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleChangeUsername}
                >
                  <Text style={styles.submitButtonText}>Change Username</Text>
                </TouchableOpacity>
              </View>
            )}

            {modalContent === "Change Password" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter old password"
                  secureTextEntry
                  value={oldPassword}
                  onChangeText={setOldPassword}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter new password"
                  secureTextEntry
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleChangePassword}
                >
                  <Text style={styles.submitButtonText}>Change Password</Text>
                </TouchableOpacity>
              </View>
            )}

            {modalContent === "Change Email" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter current password"
                  secureTextEntry
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter new email"
                  keyboardType="email-address"
                  value={newEmail}
                  onChangeText={setNewEmail}
                />
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleChangeEmail}
                >
                  <Text style={styles.submitButtonText}>Change Email</Text>
                </TouchableOpacity>
              </View>
            )}

            {modalContent === "Cancel Subscription" && (
              <View style={styles.inputContainer}>
                <Text style={styles.modalText}>
                  Your current subscription: {currentSubscription}
                </Text>
                <Text style={styles.modalText}>
                  Are you sure you want to cancel your {currentSubscription} subscription?
                </Text>
                <TouchableOpacity
                  style={[styles.submitButton, { backgroundColor: "#B497BD" }]} // Updated background color
                  onPress={handleCancelSubscription}
                >
                  <Text style={styles.submitButtonText}>Yes, Cancel Subscription</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.submitButton, { backgroundColor: "#B497BD" }]} // Updated background color
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.submitButtonText}>No, Keep Subscription</Text>
                </TouchableOpacity>
              </View>
            )}

            {modalContent === "Delete Account" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter current password"
                  secureTextEntry
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                />
                <TouchableOpacity
                  style={[styles.submitButton, { backgroundColor: "#ff4f4f" }]}
                  onPress={handleDeleteAccount}
                >
                  <Text style={styles.submitButtonText}>Delete Account</Text>
                </TouchableOpacity>
              </View>
            )}

            {modalContent === "Notifications" && (
              <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Enable Notifications</Text>
                <Switch
                  value={notificationsEnabled}
                  onValueChange={toggleNotifications}
                />
              </View>
            )}

            {modalContent === "App Theme" && (
              <View>
                <TouchableOpacity
                  style={
                    theme === "Light"
                      ? [styles.optionButton, styles.selectedOptionButton]
                      : styles.optionButton
                  }
                  onPress={() => changeTheme("Light")}
                >
                  <Text
                    style={
                      theme === "Light"
                        ? [styles.optionButtonText, styles.selectedOptionButtonText]
                        : styles.optionButtonText
                    }
                  >
                    Light Theme
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    theme === "Dark"
                      ? [styles.optionButton, styles.selectedOptionButton]
                      : styles.optionButton
                  }
                  onPress={() => changeTheme("Dark")}
                >
                  <Text
                    style={
                      theme === "Dark"
                        ? [styles.optionButtonText, styles.selectedOptionButtonText]
                        : styles.optionButtonText
                    }
                  >
                    Dark Theme
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
      )}
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
//     alignItems: "center",
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
//   buttonAccountSettings: {
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
//     position: "relative", // To position the close icon
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
//     width: "100%",  // Span the width of the container
//   },
//   submitButton: {
//     backgroundColor: "#2196F3",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     marginVertical: 5,
//     width: "100%",  // Span the width of the container
//   },
//   yesButton: {
//     backgroundColor: "#ff4f4f",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     marginVertical: 5,
//     width: "100%",
//   },
//   noButton: {
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
//     width: "100%",  // Span the width of the container
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
// })

export default AccountSettings;