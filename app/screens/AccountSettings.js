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
// });

export default AccountSettings;
