import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import BottomNavBar from "./BottomNavBar"; // Import the BottomNavBar component

const fragrances = [
  { name: "Vanilla 28",
    brand: "Kayali",
    image: "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwdd48e228/images/Kayali/Vanilla28/KAY_100ml_Vanilla_Bottle.jpg?sw=1242&sh=1242&sm=fit",
    status: "Owned",
    category: "Gourmand" },
  { name: "Eden Juicy Apple",
    brand: "Kayali",
    image: "data:image/jpeg;base64,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",
    status: "Favorited",
    category: "Fruity" },
  { name: "Yum Yum Pistachio Gelato",
    brand: "Kayali",
    image: "data:image/jpeg;base64,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",
    status: "Owned",
    category: "Gourmand" },
  { name: "Love Don't Be Shy",
    brand: "Kilian",
    image: "data:image/jpeg;base64,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",
    status: "None",
    category: "Floral" },
];

const MyCollection = () => {
  const [selectedTopFilter, setSelectedTopFilter] = useState("All");
  const [selectedBottomFilter, setSelectedBottomFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const handleTopFilterSelect = (filter) => {
    setSelectedTopFilter(filter);
  };

  const handleBottomFilterSelect = (filter) => {
    setSelectedBottomFilter(filter);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  // Function to filter fragrances based on selected filters and search text
  const getFilteredFragrances = () => {
    return fragrances.filter((fragrance) => {
      const matchesTopFilter =
        selectedTopFilter === "All" || fragrance.status === selectedTopFilter;
      const matchesBottomFilter =
        selectedBottomFilter === "All" || fragrance.category === selectedBottomFilter;
      const matchesSearchText =
        fragrance.name.toLowerCase().includes(searchText.toLowerCase()) ||
        fragrance.brand.toLowerCase().includes(searchText.toLowerCase());
      return matchesTopFilter && matchesBottomFilter && matchesSearchText;
    });
  };

  const filteredFragrances = getFilteredFragrances();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>My Collection</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search fragrances"
            value={searchText}
            onChangeText={handleSearchTextChange}
          />
        </View>

        {/* Top Filters */}
        <View style={styles.tabs}>
          {["All", "Owned", "Favorited"].map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tab,
                selectedTopFilter === filter && styles.activeTab,
              ]}
              onPress={() => handleTopFilterSelect(filter)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTopFilter === filter && styles.activeTabText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Fragrance Cards List (Scrollable) */}
        <ScrollView style={styles.fragranceList}>
          {filteredFragrances.length > 0 ? (
            filteredFragrances.map((fragrance, index) => (
              <View key={index} style={styles.card}>
                <Image source={{ uri: fragrance.image }} style={styles.cardImage} />
                <Text style={styles.cardName}>{fragrance.name}</Text>
                <Text style={styles.cardBrand}>{fragrance.brand}</Text>
                <Text style={styles.cardStatus}>Status: {fragrance.status}</Text>
                <Text style={styles.cardCategory}>Fragrance Family: {fragrance.category}</Text>
              </View>
            ))
          ) : searchText.length > 0 ? (
            <View style={styles.noFragrancesContainer}>
              <Text style={styles.noFragrancesText}>No fragrances match your search query.</Text>
            </View>
          ) : (
            <View style={styles.noFragrancesContainer}>
              <Text style={styles.noFragrancesText}>No fragrances match the selected filters.</Text>
            </View>
          )}
        </ScrollView>
      </View>

      {/* Bottom Filters */}
      <View style={styles.bottomFiltersWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContentContainer}
        >
          {["All", "Fruity", "Woody", "Gourmand", "Floral", "Musky", "Citrus", "Earthy"].map(
            (filter, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tab, // Shared tab style
                  selectedBottomFilter === filter && styles.activeTab, // Active tab style
                ]}
                onPress={() => handleBottomFilterSelect(filter)}
              >
                <Text
                  style={[
                    styles.tabText, // Shared text style
                    selectedBottomFilter === filter && styles.activeTabText, // Active text style
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  searchContainer: {
    width: "100%",
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  fragranceList: {
    width: "100%",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  cardBrand: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  cardStatus: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
  },
  cardCategory: {
    fontSize: 14,
    color: "#333",
  },
  tabs: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: "#B497BD", // Lavender
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
  activeTabText: {
    color: "#fff",
  },
  bottomFiltersWrapper: {
    marginTop: 16,
    marginBottom: 10,
  },
  tabsContentContainer: {
    alignItems: "center",
  },
  noFragrancesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  noFragrancesText: {
    fontSize: 18,
    color: "#333",
  },
});

export default MyCollection;
