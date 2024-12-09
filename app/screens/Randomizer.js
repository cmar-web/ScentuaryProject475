import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  TextInput,
  Modal,
  StyleSheet,
  Switch,
  Share
} from "react-native";
import BottomNavBar from "./BottomNavBar";

//Given that we are using Expo Go, the React Native native sharing library does not work in there
// import Share from "react-native-share";
//This is the Expo Go version of the same RN library that shoudl work
// import * as Share from "expo-sharing";

import {styles} from '../assets/styles';

const Randomizer = () => {
  const [perfumes, setPerfumes] = useState([
    { name: "Chanel No. 5", category: "Floral" },
    { name: "Dior Sauvage", category: "Woody" },
    { name: "YSL Libre", category: "Floral" },
    { name: "Jo Malone Peony", category: "Floral" },
    { name: "Tom Ford Oud Wood", category: "Woody" },
    { name: "Dolce & Gabbana Light Blue", category: "Fruity" },
    { name: "Guerlain Shalimar", category: "Gourmand" },
    { name: "Creed Aventus", category: "Woody" },
    { name: "Viktor & Rolf Flowerbomb", category: "Floral" },
    { name: "Chloé Nomade", category: "Woody" },
  ]);

  const [newPerfume, setNewPerfume] = useState("");
  const [newPerfumeCategory, setNewPerfumeCategory] = useState("All");
  const [selectedPerfume, setSelectedPerfume] = useState("[Insert Name]");
  const [spinAnimation] = useState(new Animated.Value(0));
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [allowRepeats, setAllowRepeats] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const filteredPerfumes = perfumes.filter(
    (perfume) =>
      selectedFilter === "All" || perfume.category === selectedFilter
  );

  const spinWheel = () => {
    const randomIndex = Math.floor(Math.random() * filteredPerfumes.length);
    Animated.timing(spinAnimation, {
      toValue: 360,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      spinAnimation.setValue(0);
      const selected = filteredPerfumes[randomIndex];
      setSelectedPerfume(selected.name);
      if (!allowRepeats) {
        setPerfumes(perfumes.filter((perfume) => perfume.name !== selected.name));
      }
    });
  };

  const addPerfume = () => {
    if (newPerfume.trim()) {
      setPerfumes([
        ...perfumes,
        { name: newPerfume.trim(), category: newPerfumeCategory },
      ]);
      setNewPerfume("");
    }
  };

  const handleScentProfileSelect = (profile) => {
    setNewPerfumeCategory(profile);
    setModalVisible(false);
  };

  const handleTabPress = (tab) => {
    setSelectedFilter(tab);
  };

  const spinStyle = {
    transform: [
      {
        rotate: spinAnimation.interpolate({
          inputRange: [0, 360],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  //Set up the the Share daily scent function that shares the users result to 
  const shareDailyScent = async() => {
    //this is where we sent the message and or image to send to the social media platform  
    const options = {
        message: 'My scent of the day from Scenturary is: ' + selectedPerfume,
        //placeholder uri needs adjusted in future
        url: 'https://www.niche-beauty.com/images/generated/det/26/40/tom-ford-oud-wood.jpg'
      };

      //attempt to pop up the share bar at the bottom of the screen
      try{

        if(selectedPerfume != '[Insert Name]')
          await Share.share(options);
      } catch(error){
        console.log('Error:', error);
      }

  };


  return (
    <SafeAreaView style={styles.randomizerContainer}>
      {/* Top App Bar */}
      <View style={styles.topAppBar}>
        <View style={styles.leadingIcon} />
        <Text style={styles.headline}>Randomizer</Text>
        <View style={styles.leadingIcon} />
      </View>

      {/* Content Section */}
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.header}>Fragrance of the Day</Text>
          <Text style={styles.subHeader}>{selectedPerfume}</Text>

          {/* Spin Wheel */}
          <View style={styles.wheelContainer}>
            <Animated.View style={[styles.wheel, spinStyle]}>
              {filteredPerfumes.map((perfume, index) => (
                <Text key={index} style={styles.wheelText}>
                  {perfume.name}
                </Text>
              ))}
            </Animated.View>

          </View>

          {/* Spin Button and Allow Repeats Switch */}
          <View style={styles.controlContainer}>
            <TouchableOpacity style={styles.spinButton} onPress={spinWheel}>
              <View style={styles.stateLayer}>
                <Text style={styles.spinButtonText}>Spin</Text>
              </View>
            </TouchableOpacity>
            {/* make a new button to share the results */}
            <TouchableOpacity style={styles.shareResultButton} onPress={shareDailyScent}>
              <Text style={styles.shareResultText}>Share Result</Text>
            </TouchableOpacity>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Allow Repeats</Text>
              <Switch
                value={allowRepeats}
                onValueChange={(value) => setAllowRepeats(value)}
              />
            </View>
          </View>

          {/* Add Perfume Section */}
          <View style={styles.addPerfumeContainer}>
            <Text style={styles.inputLabel}>Add a New Perfume:</Text>
            <TextInput
              style={styles.textInput}
              value={newPerfume}
              onChangeText={setNewPerfume}
              placeholder="Enter perfume name"
            />

            {/* Scent Profile Button */}
            <Text style={styles.inputLabel}>Select Scent Profile:</Text>
            <TouchableOpacity
              style={styles.textInput}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.selectedProfileText}>
                {newPerfumeCategory}
              </Text>
            </TouchableOpacity>

            {/* Add button */}
            <TouchableOpacity style={styles.addButton} onPress={addPerfume}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

          {/* Filters Section */}
          <View style={styles.tabsContainer}>
            <Text style={styles.filtersLabel}>Filter the wheel</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsContentContainer}
            >
              {["All", "Fruity", "Woody", "Gourmand", "Floral", "Musky"].map(
                (tab, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.tab,
                      selectedFilter === tab && styles.activeTab,
                    ]}
                    onPress={() => handleTabPress(tab)}
                  >
                    <Text
                      style={[
                        styles.tabText,
                        selectedFilter === tab && styles.activeTabText,
                      ]}
                    >
                      {tab}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />

      {/* Modal for selecting scent profile */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Select Scent Profile</Text>
            {["All", "Fruity", "Woody", "Gourmand", "Floral", "Musky"].map(
              (profile, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.modalButton}
                  onPress={() => handleScentProfileSelect(profile)}
                >
                  <Text style={styles.modalButtonText}>{profile}</Text>
                </TouchableOpacity>
              )
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
//   topAppBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 16,
//     backgroundColor: "#fff",
//     elevation: 4,
//   },
//   leadingIcon: {
//     width: 24,
//     height: 24,
//   },
//   headline: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   content: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 8,
//   },
//   subHeader: {
//     fontSize: 18,
//     color: "#666",
//     marginBottom: 16,
//   },
//   wheelContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 8,
//   },
//   wheel: {
//     width: 200,
//     height: 200,
//     backgroundColor: "#fff",
//     borderRadius: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "#ccc",
//   },
//   wheelText: {
//     fontSize: 14,
//     textAlign: "center",
//     color: "#333",
//   },
//   spinButton: {
//     backgroundColor: "#B497BD", // Lavender color
//     paddingVertical: 14,
//     paddingHorizontal: 36,
//     borderRadius: 6,
//     marginTop: 8, // Moved up closer to the wheel
//     alignSelf: "center",
//   },
//   spinButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   shareResultButton: {
//     backgroundColor: "#B497BD", // Lavender color
//     paddingVertical: 14,
//     paddingHorizontal: 36,
//     borderRadius: 6,
//     marginTop: 8, // Moved up closer to the wheel
//     alignSelf: "center",
//   },
//   shareResultText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   addPerfumeContainer: {
//     marginTop: 8, // Moved up closer
//   },
//   inputLabel: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 8,
//   },
//   textInput: {
//     height: 40,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     paddingHorizontal: 8,
//     borderRadius: 4,
//     marginBottom: 16,
//   },
//   selectedProfileText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   addButton: {
//     backgroundColor: "#B497BD", // Lavender color
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     marginTop: 8, // Reduced margin to bring the button up
//     borderRadius: 4,
//     alignItems: "center",
//   },
//   addButtonText: {
//     fontSize: 16,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   tabsContainer: {
//     marginTop: 16,
//     paddingBottom: 8,
//   },
//   filtersLabel: {
//     fontSize: 18, // Increased font size for the label
//     //fontWeight: "bold", // Added bold text for emphasis
//     color: "#333",
//     marginBottom: 15, // Space it out slightly more
//     marginHorizontal: 5,
//   },
//   tabsContentContainer: {
//     alignItems: "center",
//   },
//   tab: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     backgroundColor: "#f0f0f0",
//     borderRadius: 8,
//     marginHorizontal: 4,
//   },
//   activeTab: {
//     backgroundColor: "#B497BD", // Lavender
//   },
//   tabText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   activeTabText: {
//     color: "#fff",
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     width: 300,
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   modalButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     backgroundColor: "#B497BD", // Lavender color
//     borderRadius: 4,
//     marginVertical: 8,
//   },
//   modalButtonText: {
//     fontSize: 16,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   closeButton: {
//     position: "absolute",
//     top: 16,
//     right: 16,
//     padding: 8,
//     borderRadius: 16,
//     //backgroundColor: "#ccc",
//   },
//   closeButtonText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#f00",
//   },
// });





export default Randomizer;
