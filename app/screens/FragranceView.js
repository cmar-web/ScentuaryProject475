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
import BottomNavBar from './BottomNavBar';

const FragranceView = ({ route, navigation }) => {
  const { fragrance, toggleFavorite, toggleStatus } = route.params;
  const [showNotes, setShowNotes] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isFavorite, setIsFavorite] = useState(fragrance.favorited);
  const [isOwned, setIsOwned] = useState(fragrance.status === 'Owned');

  useEffect(() => {
    setIsFavorite(fragrance.favorited);
  }, [fragrance.favorited]);

  useEffect(() => {
    setIsOwned(fragrance.status === 'Owned');
  }, [fragrance.status]);

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleOpenURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const handleToggleFavorite = () => {
    toggleFavorite();
    setIsFavorite(!isFavorite);
  };

  const handleToggleStatus = () => {
    toggleStatus();
    setIsOwned(!isOwned);
  };

  const handleFindDupe = () => {
    navigation.navigate('Dupes', {
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

  const sortedPurchasingOptions = purchasingOptions.sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.fixedHeader}>
        {/* Top App Bar */}
        <View style={styles.topAppBar}>
          <View style={styles.leadingIcon}>
            <View style={styles.containerIcon}>
              <View style={styles.stateLayer}>
                <Image style={styles.icon} resizeMode="cover" source="Icon.png" />
              </View>
            </View>
          </View>
          <Text style={styles.headline}>Fragrance View</Text>
          <View style={styles.leadingIcon}>
            <View style={styles.containerIcon}>
              <View style={styles.stateLayer}>
                <Image style={styles.icon} resizeMode="cover" source="Icon.png" />
              </View>
            </View>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Brand and Fragrance Name */}
        <View style={styles.brandNameContainer}>
          <Text style={styles.brand}>{fragrance.brand}</Text>
          <Text style={styles.name}>{fragrance.name}</Text>
          {/* Star Button */}
          <TouchableOpacity onPress={handleToggleFavorite} style={styles.starButton}>
            <Text style={styles.starButtonText}>{isFavorite ? "★" : "☆"}</Text>
          </TouchableOpacity>
          {/* Status Button */}
          <TouchableOpacity onPress={handleToggleStatus} style={styles.statusButton}>
            <Text style={styles.statusButtonText}>{isOwned ? "✔️Owned" : "❌Not Owned"}</Text>
          </TouchableOpacity>
        </View>

        {/* Fragrance Details */}
        <View style={styles.content}>
          <Image style={styles.fragranceImage} resizeMode="cover" source={{ uri: fragrance.image }} />
          <View style={styles.details}>
            <Text style={styles.category}>Fragrance Family: {fragrance.category}</Text>
            <TouchableOpacity onPress={toggleNotes} style={styles.button}>
              <Text style={styles.buttonText}>{showNotes ? "Hide Notes" : "Show Notes"}</Text>
            </TouchableOpacity>
            {showNotes && (
              <View style={styles.notesContainer}>
                <Text style={styles.notesHeader}>Top Notes:</Text>
                <Text style={styles.notes}>{fragrance.topNotes.join(", ")}</Text>
                <Text style={styles.notesHeader}>Middle Notes:</Text>
                <Text style={styles.notes}>{fragrance.middleNotes.join(", ")}</Text>
                <Text style={styles.notesHeader}>Base Notes:</Text>
                <Text style={styles.notes}>{fragrance.bottomNotes.join(", ")}</Text>
              </View>
            )}
          </View>
        </View>

        {/* Fragrance Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.description}>{fragrance.description}</Text>
        </View>

        {/* Find a Dupe Button */}
        <TouchableOpacity onPress={handleFindDupe} style={styles.findDupeButton}>
          <Text style={styles.findDupeButtonText}>Find a Dupe</Text>
        </TouchableOpacity>

        {/* Horizontal Divider and Subheader */}
        <View style={styles.horizontaldividerWithSubheader}>
          <View style={styles.divider} />
          <Text style={styles.subheader}>Purchasing Options</Text>
        </View>

        {/* Price Filter Button */}
        <View style={styles.filterButtonContainer}>
          <TouchableOpacity onPress={handleSortOrderChange} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Sort by Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}</Text>
          </TouchableOpacity>
        </View>

        {/* Purchasing Options */}
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

      {/* Bottom Navigation Bar */}
      <BottomNavBar style={styles.bottomNavBar} />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    paddingTop: 60, // Height of the fixed header
    paddingBottom: 70,
  },
  topAppBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  leadingIcon: {
    flex: 1,
  },
  containerIcon: {
    width: 30,
    height: 30,
  },
  stateLayer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  headline: {
    flex: 4,
    fontSize: 24,
    textAlign: 'center',
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
    backgroundColor: "transparent", // Transparent background
    padding: 10,
    borderRadius: 50,
    marginTop: 5, // Add some space between the text and the star button
  },
  starButtonText: {
    fontSize: 30, // Larger font size for star
    color: "#FFD700", // Gold color for the star
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
    backgroundColor: "#C2A4D9", // Lavender
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
    backgroundColor: "#32CD32", // LimeGreen color
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
    marginVertical: 20,
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterButtonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "#C2A4D9", // Lavender
    padding: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: 'center',
  },
  purchasingOptionsContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  purchasingOptionCard: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: 200,
  },
  storeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storePrice: {
    fontSize: 18,
    color: "#666",
    marginTop: 5,
  },
  storeLink: {
    fontSize: 16,
    color: "#007BFF", // Default link color
    marginTop: 10,
  },
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  statusButton: {
    padding: 1,
  },
  statusButtonText: {
    fontSize: 18,
  },
});

export default FragranceView;
