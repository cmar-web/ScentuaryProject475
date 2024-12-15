import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import BottomNavBar from "./BottomNavBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../assets/styles";
import { getDupes } from "../../FragranceFinderAPI.js";

const Dupes = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, name, brand, image, topNotes = [], middleNotes = [], bottomNotes = [], category } = route.params;

  const [dupesList, setDupesList] = useState([]);
  const [loading, setLoading] = useState(false);

  const scent = { id: "0", image: image };

  // Fetch duplicates based on the selected fragrance
  useEffect(() => {
    const fetchDupes = async () => {
      if (!id) return; // Ensure ID is available

      setLoading(true);
      try {
        const response = await getDupes(id); // Fetch dupes using the perfume ID

        // Log the response to check the data structure
        console.log("API Response:", response);

        // Extract recommendations from the response and map them to the required format
        const mappedDupes = Array.isArray(response.recommendations)
          ? response.recommendations.map((dupe) => ({
              id: dupe._id || "unknown", // Use _id as the unique identifier
              image: dupe.image || "", // Fallback to empty string if no image
              name: dupe.perfume || "Unknown Name", // Use perfume name
              brand: dupe.brand || "Unknown Brand", // Fallback to unknown brand
              category: dupe.perfume || "Unknown Category", // Fallback to the perfume name
              topNotes: dupe.topNotes || [],
              middleNotes: dupe.middleNotes || [],
              bottomNotes: dupe.bottomNotes || [],
              description: dupe.description || "",
            }))
          : [];

        setDupesList(mappedDupes);
      } catch (error) {
        console.error("Error fetching duplicates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDupes();
  }, [id]);

  const handleDupeClick = (dupe) => {
    // Pass the dupe object to FragranceView
    navigation.navigate("FragranceView", {
      fragrance: dupe,  // Passing the entire dupe object
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Dupes</Text>

        {/* Card for the Scent to dupe */}
        <View style={styles.scentCard}>
          <Image style={styles.scentImage} source={{ uri: scent.image }} />
          <View style={styles.scentDetails}>
            <Text style={styles.brand}>{brand}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.category}>Fragrance Family: {category}</Text>
            <Text style={styles.notesHeader}>Notes:</Text>
            <Text style={styles.notes}>- Top: {topNotes.join(", ") || "N/A"}</Text>
            <Text style={styles.notes}>- Middle: {middleNotes.join(", ") || "N/A"}</Text>
            <Text style={styles.notes}>- Base: {bottomNotes.join(", ") || "N/A"}</Text>
          </View>
        </View>

        {/* Show what dupes have been found */}
        <View>
          <Text style={styles.subheader}>Dupes Found</Text>

          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : dupesList.length > 0 ? (
            <FlatList
              data={dupesList}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleDupeClick(item)} style={styles.gridCard}>
                  {item.image ? (
                    <Image style={styles.dupeImage} source={{ uri: item.image }} />
                  ) : (
                    <Text style={styles.noImageText}>No Image Available</Text>
                  )}
                  <Text style={styles.dupeName}>{item.name}</Text>
                  <Text style={styles.dupeBrand}>{item.brand}</Text>
                  {/* Small tag under the picture displaying the name of the perfume */}
                  <View style={styles.perfumeTag}>
                    <Text style={styles.perfumeTagText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              numColumns={2}
              contentContainerStyle={styles.listContainer}
            />
          ) : (
            <Text style={styles.noDupesText}>No dupes found.</Text>
          )}
        </View>
      </View>

      <BottomNavBar />
    </SafeAreaView>
  );
};

export default Dupes;
