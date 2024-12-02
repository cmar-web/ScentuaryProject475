import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { query, where, collection, getDocs, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase/firebase";
import BottomNavBar from "./BottomNavBar";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../assets/styles";

//method for converting the blob to a base64 to be stored in the database.
const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
};

const Settings = () => {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(null); //Profile image state, defaults to blankUser as def later on
  const [loading, setLoading] = useState(false); //state for showing the loader for the user
  const [docId, setDocId] = useState(null); //state for docId
  const defaultImage = require("../assets/blankUser.png"); //user starts with the blankUser.png image

  useEffect(() => {
    const auth = getAuth(); //Get the instance for firebase auth
    const currentUser = auth.currentUser;

    if (currentUser) {
      fetchUserDocId(currentUser.uid); //call fetchUserDocId method
    }
  }, []);

  //We get the specific document/person in the user's collection by their uid
  const fetchUserDocId = async (uid) => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", uid)); // Query users collection where uid matches
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0]; // set it to the first match
        setDocId(docRef.id); //set the document id
        const data = docRef.data();
        if (data.profileImage) {
          setProfileImage(`data:image/jpeg;base64,${data.profileImage}`); //we load the defined image from the db
        }
      } else {
        //if we can't find them, we alert
        alert("User not found in Firestore.");
      }
    } catch (error) {
      console.error("Error fetching user document:", error);
      alert("An error occurred while fetching user information.");
    }
  };

  //Method for selecting an image form the user's pictures
  const selectImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      //if we get denied permission, we alert and return
      if (permissionResult.granted === false) {
        alert("Permission is required to access pictures.");
        return;
      }

      //otherwise we allow user to select from their images
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!pickerResult.canceled) {
        setProfileImage(pickerResult.assets[0]?.uri);
        await uploadImage(pickerResult.assets[0]?.uri);
      }
    } catch (error) {
      console.error("Error picking an image:", error);
      alert("An error occurred while selecting the image");
    }
  };

  //Method for uploading the converted base64 to the database
  const uploadImage = async (uri) => {
    if (!docId) {
      alert("User document not found.");
      return;
    }

    try {
      setLoading(true); //show the user the loader while uploading
      const response = await fetch(uri);
      const blob = await response.blob(); //convert image to blob

      //convert that blob to base64
      const base64 = await blobToBase64(blob);

      //We get the specific user's document in the database
      const userDocRef = doc(db, "users", docId);

      //update the profileImage field
      await setDoc(
        userDocRef,
        {
          profileImage: base64, //update the profileImage field
        },
        { merge: true } //we merge it with the data already in the database for the specific user
      );

      setProfileImage(`data:image/jpeg;base64,${base64}`); //Update w the base64 image
      alert("Profile image updated successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading the image.");
    } finally {
      setLoading(false); // Hide loader after upload
    }
  };

  //Method for resetting to the default imaege
  const resetToDefaultImage = async () => {
    if (!docId) {
      alert("User document not found.");
      return;
    }

    try {
      setLoading(true);
      const userDocRef = doc(db, "users", docId);

      //We reset the profileImage field in the db
      await setDoc(
        userDocRef,
        {
          profileImage: null,
        },
        { merge: true }
      );

      setProfileImage(null); //Reset to the default blankUser.png
      alert("Profile image successfully reset");
    } catch (error) {
      console.error("Error resetting image:", error);
      alert("Image could not be reset.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.settingsBackground}>
      <View style={styles.content}>
      <Text style={styles.header}>Settings</Text>
        <View style={styles.profileSection}>
          <Image
            source={
              profileImage
                ? { uri: profileImage }
                : defaultImage // Use default image if no profile image
            }
            style={styles.profileImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.button} onPress={selectImage}>
            <Text style={styles.buttonText}>Change Profile Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={resetToDefaultImage}
          >
            <Text style={styles.buttonText}>Reset to Default</Text>
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator size="large" color="#007BFF" />} {/* Loader */}

        <View style={styles.buttonText}>
              <TouchableOpacity
                style={styles.settingsNavButtons}
                onPress={() => navigation.navigate("FAQ")}
              >
                <Text style={styles.buttonText}>FAQ</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.settingsNavButtons}
                onPress={() => navigation.navigate("PrivacyAndSecurity")}
              >
                <Text style={styles.buttonText}>Privacy and Security</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.settingsNavButtons}
                onPress={() => navigation.navigate("AccountSettings")}
              >
                <Text style={styles.buttonText}>Account Settings</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.settingsNavButtons}
                onPress={() => navigation.navigate("SubscriptionAndBilling")}
              >
                <Text style={styles.buttonText}>Subscription and Billing</Text>
              </TouchableOpacity>
            </View>
      </View>



      <BottomNavBar />
    </SafeAreaView>
  );
};

export default Settings;
