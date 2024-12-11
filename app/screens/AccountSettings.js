import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal, TextInput, Switch } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BottomNavBar from "./BottomNavBar";
import { styles } from '../assets/styles';
import { auth, db } from '../../firebase/firebase';
import { query, where, collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { sendEmailVerification, deleteUser, updateEmail, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";

const AccountSettings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [newInput, setNewInput] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newEmail, setNewEmail] = useState("")
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [theme, setTheme] = useState("Light");
  const [docId, setDocId] = useState(null);

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
      } else {
        alert("User document not found.");
      }
    } catch (error) {
      console.error("Error fetching user document:", error);
      alert("An error occurred while fetching user information.");
    }
  };

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

      //update the username field in firebase
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

      //reauthenticate with old
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

  const handleChangeEmail = async() => {
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

          //check for if the email is verified
          if (!user.emailVerified) {
            alert("Please verify your email before changing it.");
            await sendEmailVerification(user);
            alert("A verification email has been sent to your current email address.");
            return;
          }

          //reauthenticate with the user's current password
          const credential = EmailAuthProvider.credential(user.email, currentPassword);
          await reauthenticateWithCredential(user, credential);

          //update the email
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

        //if doc exists, delete it
        if (docId) {
          await deleteDoc(doc(db, "users", docId));
        }

        //delete the user in the authentification
        await deleteUser(user);

        alert("Your account has been successfully deleted.");
        setModalVisible(false);
      } catch (error) {
        console.error("Error deleting account:", error);
        alert("Failed to delete account: " + error.message);
      }
    };

  const toggleNotifications = async () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);

    if (newValue) {
      alert("Notifications have been enabled.");
    } else {
      alert("Notifications have been disabled.");
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
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Change Username")}>
            <Text style={styles.buttonText}>Change Username</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Change Password")}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Change Email")}>
            <Text style={styles.buttonText}>Change Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Cancel Subscription")}>
            <Text style={styles.buttonText}>Cancel Subscription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Delete Account")}>
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader}>App Customization</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("Notifications")}>
            <Text style={styles.buttonText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccountSettings} onPress={() => openModal("App Theme")}>
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
                  placeholder="New Username"
                  placeholderTextColor="#888"
                  value={newInput}
                  onChangeText={setNewInput}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleChangeUsername}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}

            {modalContent === "Change Password" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Old Password"
                  placeholderTextColor="#888"
                  value={oldPassword}
                  onChangeText={setOldPassword}
                  secureTextEntry
                />
                <TextInput
                  style={styles.input}
                  placeholder="New Password"
                  placeholderTextColor="#888"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleChangePassword}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
            {modalContent === "Change Email" && (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor="#888"
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                    secureTextEntry
                />
                <TextInput
                     style={styles.input}
                     placeholder="New Email"
                     placeholderTextColor="#888"
                     value={newEmail}
                     onChangeText={setNewEmail}
                     secureTextEntry
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleChangeEmail}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            )}
            {modalContent === "Delete Account" && (
            <View style={styles.inputContainer}>
                 <TextInput
                        style={styles.input}
                        placeholder="Enter password to delete account"
                        placeholderTextColor="#888"
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                        secureTextEntry
                 />
                  <TouchableOpacity style={styles.submitButton} onPress={handleDeleteAccount}>
                     <Text style={styles.submitButtonText}>Delete Account</Text>
                  </TouchableOpacity>
            </View>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default AccountSettings;
