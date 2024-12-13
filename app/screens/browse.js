import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from "./BottomNavBar";
import { styles } from '../assets/styles';
import { searchPerfumes } from '../../FragranceFinderAPI.js';

const BrowseScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [fragrances, setFragrances] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFragrances = async () => {
    if (searchText.trim().length === 0) return;
    setLoading(true);
    try {
      const response = await searchPerfumes(searchText);
      const hits = response?.hits || [];
      const mappedFragrances = hits.map(hit => ({
        id: hit.objectID,
        name: hit.perfume,
        brand: hit.brand,
        image: hit.image || null,
        category: hit.main_accords?.join(", ") || "Unknown",
        notes: hit.notes || [],
        longevity: hit.longevity || [],
        sillage: hit.sillage || [],
        price: hit.price || "N/A",
        favorited: false,
        status: "Not Owned",
      }));
      setFragrances(mappedFragrances);
    } catch (error) {
      console.error("Error fetching fragrances:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredFragrances = fragrances.sort((a, b) => {
    const priceA = isNaN(Number(a.price)) ? 0 : Number(a.price);
    const priceB = isNaN(Number(b.price)) ? 0 : Number(b.price);
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  const renderFragrance = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FragranceView', {
          fragrance: item,
          toggleFavorite: () => toggleFavorite(item.id),
          toggleStatus: () => toggleStatus(item.id),
        })
      }
    >
      <View style={styles.card}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.cardImage} />
        ) : (
          <View style={[styles.cardImage, { backgroundColor: '#f8f4f4' }]} />
        )}

        <View style={styles.cardText}>
          <Text style={styles.fragranceName}>{item.name}</Text>
          <Text style={styles.fragranceHouse}>{item.brand}</Text>
          <Text style={styles.fragranceCategory}>Category: {item.category}</Text>
          <Text style={styles.fragrancePrice}>Price: {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        {/* Search Bar with Small Arrow Button */}
        <View style={styles.searchContainerBrowse}>
          <TextInput
            style={styles.searchField}
            placeholder="Search"
            placeholderTextColor="#aaa"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <TouchableOpacity onPress={fetchFragrances} style={styles.searchArrowButton}>
            <Text style={styles.searchArrowText}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Filter Controls */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton} onPress={handleSortOrderChange}>
            <Text style={styles.filterButtonText}>
              Sort by Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Fragrance Cards */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : filteredFragrances.length > 0 ? (
          <FlatList
            data={filteredFragrances}
            renderItem={renderFragrance}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
          />
        ) : (
          <View style={styles.noFragrancesContainer}>
            <Text style={styles.noFragrancesText}>
              {searchText.trim().length === 0
                ? "Search for a fragrance..."
                : "No fragrances match your search."}
            </Text>
          </View>
        )}
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </SafeAreaView>
  );
};

export default BrowseScreen;
