import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { query, where, collection, getDocs, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase/firebase";
import BottomNavBar from "./BottomNavBar";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../assets/styles";

//use for converting the blob to base64 so we can send it to the db
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
  const [profileImage, setProfileImage] = useState(null); //state for profile pic, defaults to blankuser.png
  const [loading, setLoading] = useState(false); //state for the laoder
  const [docId, setDocId] = useState(null); //state for doc id
  const defaultImage = require("../assets/blankUser.png"); //user will default to blankUser.png

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      fetchUserDocId(currentUser.uid); //get the user's doc in the database
    }
  }, []);

  //get the document ID for the logged-in user
  const fetchUserDocId = async (uid) => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0];//set it to the first result
        setDocId(docRef.id);
        const data = docRef.data();
        if (data.profileImage) {
          setProfileImage(`data:image/jpeg;base64,${data.profileImage}`);
        }
      } else {
        alert("User could not be found.");
      }
    } catch (error) {
      console.error("Error fetching user document:", error);
      alert("An error occurred while fetching user information.");
    }
  };

  //compress the users selected image
  const compressImage = async (uri) => {
    try {
      const manipulatedImage = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 800 } }], //resize
        { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG } //compress and save the pic as a jpeg
      );
      return manipulatedImage.uri;
    } catch (error) {
      console.error("Error compressing image:", error);
      alert("An error occurred while compressing the image.");
      throw error;
    }
  };

  // Handle image selection
  const selectImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      //if we don't get permission, we alert and reurn
      if (!permissionResult.granted) {
        alert("Permission is required to access pictures.");
        return;
      }

    //otherwise continue
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!pickerResult.canceled) {
        //compress image to limit file size
        const compressedUri = await compressImage(pickerResult.assets[0]?.uri);

        //calls to set image and upload
        setProfileImage(compressedUri);
        await uploadImage(compressedUri);
      }
    } catch (error) {
      console.error("Error picking an image:", error);
      alert("An error occurred while selecting the image.");
    }
  };

  //upload the image to the firebase database
  const uploadImage = async (uri) => {
    if (!docId) {
      alert("User document not found.");
      return;
    }

    try {
      setLoading(true); //show the user the loader while uploadign
      const response = await fetch(uri);
      const blob = await response.blob();

      //convert blob to the base64
      const base64 = await blobToBase64(blob);

      //user's specific doc in the firebase
      const userDocRef = doc(db, "users", docId);

      //we update the profileImage field for the specific user
      await setDoc(
        userDocRef,
        {
          profileImage: base64,
        },
        { merge: true }
      );

      setProfileImage(`data:image/jpeg;base64,${base64}`); //set the new image
      alert("Profile image updated successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading the image.");
    } finally {
      setLoading(false); //get rid of loader
    }
  };

  //reset the pic to the default blankUser.png
  const resetToDefaultImage = async () => {
    if (!docId) {
      alert("User document not found.");
      return;
    }

    try {
      setLoading(true);
      const userDocRef = doc(db, "users", docId);

      //Reset the profile pic field in the database
      await setDoc(
        userDocRef,
        {
          profileImage: null,
        },
        { merge: true }
      );

      setProfileImage(null);
      alert("Profile image successfully reset.");
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
        <View style={styles.profileSection}>
          <Image
            source={
              profileImage
                ? { uri: profileImage }
                : defaultImage //Use the default image if no profile image
            }
            style={styles.profileImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.button} onPress={selectImage}>
            <Text style={styles.buttonText}>Change Profile Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetToDefaultImage}>
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
            onPress={() => navigation.navigate("Subscriptions")}
          >
            <Text style={styles.buttonText}>Subscription Management</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNavBar />
    </SafeAreaView>
  );
};

export default Settings;
