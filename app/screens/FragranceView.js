import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavBar from './BottomNavBar';

const FragranceView = ({ route, navigation }) => {
  const { fragrance } = route.params;  // Extract fragrance object passed from Dupes.js
  console.log(fragrance.image);
  const [showNotes, setShowNotes] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOwned, setIsOwned] = useState(false);

  useEffect(() => {
    // Load initial states from AsyncStorage
    loadState();
  }, []);

  const loadState = async () => { // Saving for fav and owned
    try {
      const storedFragrance = await AsyncStorage.getItem(`fragrance-${fragrance.id}`);
      if (storedFragrance) {
        const fragranceData = JSON.parse(storedFragrance);
        setIsFavorite(fragranceData.favorited);
        setIsOwned(fragranceData.status === "Owned");
      }
    } catch (error) {
      console.error("Error loading state from AsyncStorage:", error);
    }
  };

  const saveState = async (updatedFragrance) => {
    try {
      await AsyncStorage.setItem(`fragrance-${updatedFragrance.id}`, JSON.stringify(updatedFragrance));
    } catch (error) {
      console.error("Error saving state to AsyncStorage:", error);
    }
  };

  const handleToggleFavorite = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);

    const updatedFragrance = {
      ...fragrance,
      favorited: newFavoriteStatus,
    };

    saveState(updatedFragrance); // Save the entire fragrance object (not working properly for Collection caching)
  };

  const handleToggleStatus = () => {
    const newOwnedStatus = !isOwned ? "Owned" : "Not Owned";
    setIsOwned(newOwnedStatus === "Owned");

    const updatedFragrance = {
      ...fragrance,
      status: newOwnedStatus,
    };

    saveState(updatedFragrance); // Save the entire fragrance object (not working properly for Collection caching)
  };

  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  const handleOpenURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const handleFindDupe = () => {
    navigation.navigate('Dupes', {
      id: fragrance.id,
      name: fragrance.name,
      brand: fragrance.brand,
      image: fragrance.image,
      topNotes: fragrance.topNotes,
      middleNotes: fragrance.middleNotes,
      bottomNotes: fragrance.bottomNotes,
      category: fragrance.category,
    });
  };

  const purchasingOptions = [
    { store: "Sephora", price: 450, url: "https://www.sephora.com" },
    { store: "FragranceNet", price: 277.89, url: "https://www.fragrancenet.com" },
    { store: "FragranceBuy", price: 218.98, url: "https://www.fragrancebuy.ca" },
  ];

  const sortedPurchasingOptions = purchasingOptions.sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  // Function to format the notes, returning N/A if no notes are available
  const formatNotes = (notes) => {
    if (!notes || notes.length === 0) return "N/A";
    return notes.join(", ");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.brandNameContainer}>
          <Text style={styles.brand}>{fragrance.brand}</Text>
          <Text style={styles.name}>{fragrance.name}</Text>
          {/* Favorite Button */}
          <TouchableOpacity onPress={handleToggleFavorite} style={styles.starButton}>
            <Text style={styles.starButtonText}>{isFavorite ? "★" : "☆"}</Text>
          </TouchableOpacity>
          {/* Owned Status Button */}
          <TouchableOpacity onPress={handleToggleStatus} style={styles.statusButton}>
            <Text style={styles.statusButtonText}>{isOwned ? "✔️ Owned" : "❌ Not Owned"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Image
            style={styles.fragranceImage}
            resizeMode="cover"
            source={{ uri: fragrance.image }}
          />
          <View style={styles.details}>
            <Text style={styles.category}>Fragrance Family: {fragrance.category}</Text>
            <TouchableOpacity onPress={toggleNotes} style={styles.button}>
              <Text style={styles.buttonText}>{showNotes ? "Hide Notes" : "Show Notes"}</Text>
            </TouchableOpacity>
            {showNotes && (
              <View style={styles.notesContainer}>
                <Text style={styles.notesHeader}>Top Notes:</Text>
                <Text style={styles.notes}>{formatNotes(fragrance.topNotes)}</Text>
                <Text style={styles.notesHeader}>Middle Notes:</Text>
                <Text style={styles.notes}>{formatNotes(fragrance.middleNotes)}</Text>
                <Text style={styles.notesHeader}>Base Notes:</Text>
                <Text style={styles.notes}>{formatNotes(fragrance.bottomNotes)}</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.description}>{fragrance.description}</Text>
        </View>

        <TouchableOpacity onPress={handleFindDupe} style={styles.findDupeButton}>
          <Text style={styles.findDupeButtonText}>Find a Dupe</Text>
        </TouchableOpacity>

        <View style={styles.horizontaldividerWithSubheader}>
          <View style={styles.divider} />
          <Text style={styles.subheader}>Purchasing Options</Text>
        </View>

        <View style={styles.filterButtonContainer}>
          <TouchableOpacity onPress={handleSortOrderChange} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>
              Sort by Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal style={styles.purchasingOptionsContainer}>
          {sortedPurchasingOptions.map((option, index) => (
            <View key={index} style={styles.purchasingOptionCard}>
              <Text style={styles.storeName}>{option.store}</Text>
              <Text style={styles.storePrice}>${option.price}</Text>
              <TouchableOpacity onPress={() => handleOpenURL(option.url)}>
                <Text style={styles.storeLink}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <BottomNavBar style={styles.bottomNavBar} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
  scrollViewContent: {
    paddingTop: 60, // Height of the fixed header
    paddingBottom: 70,
  },
  brandNameContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  brand: {
    fontSize: 18,
    color: "#666",
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
  },
  starButton: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 50,
    marginTop: 5,
  },
  starButtonText: {
    fontSize: 30,
    color: "#FFD700",
    textAlign: 'center',
  },
  content: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  fragranceImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  category: {
    fontSize: 18,
    color: "#666",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#C2A4D9",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: 'center',
  },
  notesContainer: {
    marginTop: 10,
  },
  notesHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  notes: {
    fontSize: 18,
    color: "#666",
  },
  descriptionContainer: {
    padding: 16,
  },
  descriptionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: "#666",
  },
  findDupeButton: {
    backgroundColor: "#32CD32",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  findDupeButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: 'center',
  },
  horizontaldividerWithSubheader: {
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "#ddd",
  },
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  purchasingOptionsContainer: {
    flexDirection: "row",
  },
  purchasingOptionCard: {
    width: 200,
    marginRight: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    alignItems: "center",
  },
  storeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  storePrice: {
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
  },
  storeLink: {
    fontSize: 16,
    color: "#0066cc",
    textDecorationLine: "underline",
  },
  filterButtonContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  filterButton: {
    backgroundColor: "#8A2BE2",
    padding: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  bottomNavBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default FragranceView;
