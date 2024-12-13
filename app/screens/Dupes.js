import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, ActivityIndicator } from "react-native";
import BottomNavBar from "./BottomNavBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from '../assets/styles';
import { getDupesById } from '../../FragranceFinderAPI.js'; // Add this import for the API function

const Dupes = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, brand, image, topNotes = [], middleNotes = [], bottomNotes = [], category, objectID } = route.params;

  const [dupesList, setDupesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (objectID) {
      fetchDupes(objectID); // Fetch duplicates when objectID is available
    }
  }, [objectID]);

  const fetchDupes = async (id) => {
    setLoading(true);
    try {
      // Assuming `getDupesById` makes the API call for duplicate fragrances
      const response = await handleFindDupe(id);
      setDupesList(response || []); // If no duplicates are found, set an empty array
    } catch (error) {
      console.error("Error fetching duplicates:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Dupes</Text>

        {/* Card for the Scent to dupe */}
        <View style={styles.scentCard}>
          <Image style={styles.scentImage} source={{ uri: image }} />
          <View style={styles.scentDetails}>
            <Text style={styles.brand}>{brand}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.category}>Fragrance Family: {category}</Text>
            <Text style={styles.notesHeader}>Notes:</Text>
            <Text style={styles.notes}>- Top: {topNotes.join(", ") || 'N/A'}</Text>
            <Text style={styles.notes}>- Middle: {middleNotes.join(", ") || 'N/A'}</Text>
            <Text style={styles.notes}>- Base: {bottomNotes.join(", ") || 'N/A'}</Text>
          </View>
        </View>

        {/* Show what dupes have been found */}
        <View>
          <Text style={styles.subheader}>Dupes Found</Text>

          {/* If loading, show a spinner */}
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
          ) : (
            <FlatList
              data={dupesList}
              renderItem={({ item }) => (
                <View style={styles.gridCard}>
                  <Image style={styles.dupeImage} source={{ uri: item.imageURI }} />
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              key={2} // Force fresh render by changing key prop
              contentContainerStyle={styles.listContainer}
            />
          )}
        </View>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
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
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   subheader: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   scentCard: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   scentImage: {
//     width: '30%',
//     height: '100%',
//     borderRadius: 10,
//   },
//   scentDetails: {
//     flex: 1,
//     marginLeft: 10,
//     justifyContent: 'center',
//   },
//   listContainer: {
//     paddingTop: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gridCard: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//     marginHorizontal: 10,
//     height: 150,
//     width: 150,
//   },
//   dupeImage: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 10,
//   },
//   brand: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   name: {
//     fontSize: 16,
//     color: "#555",
//   },
//   category: {
//     fontSize: 14,
//     color: "#777",
//   },
//   notesHeader: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//     marginTop: 8,
//   },
//   notes: {
//     fontSize: 14,
//     color: "#777",
//   },
// });

export default Dupes;
