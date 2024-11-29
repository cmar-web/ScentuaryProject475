import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from "./BottomNavBar"; // Import the BottomNavBar component

const BrowseScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // asc for ascending, desc for descending
  const [fragrances, setFragrances] = useState([
      {
        id: "1",
        name: "Vanilla 28",
        brand: "Kayali",
        image: "https://m.media-amazon.com/images/I/51qlLQxhpVL.jpg",
        category: "Gourmand",
        price: 118,
        favorited: true
      },
      {
        id: "2",
        name: "Eden Juicy Apple",
        brand: "Kayali",
        image: "https://m.media-amazon.com/images/I/61KSXkjsaSL.jpg",
        category: "Fruity",
        price: 95,
        favorited: false
      },
      {
        id: "3",
        name: "Yum Yum Pistachio Gelato",
        brand: "Kayali",
        image: "https://m.media-amazon.com/images/I/6116POMgLPL.jpg",
        category: "Gourmand",
        price: 138,
        favorited: false
      },
      {
        id: "4",
        name: "Love Don't Be Shy",
        brand: "Kilian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnWr2cmFLnxEn6DzcNYqZZ7SNfDtV5i5U-w&s",
        category: "Floral",
        price: 240,
        favorited: false
      },
      {
        id: "5",
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        image: "https://labelleperfumes.com/cdn/shop/products/unisex-fragrances-maison-francis-kurkdjian-baccarat-rouge-540-6-8-oz-edp-u-3_800x.jpg?v=1570129374",
        category: "Amber",
        price: 325,
        favorited: false
      },
      {
        id: "6",
        name: "Delina",
        brand: "Parfums de Marly",
        image: "https://perfumeheadquarters.com/cdn/shop/files/parfums-de-marly-delina-la-rosee-royal-essence-fragrance-3700578500786-294570.jpg?v=1717637561&width=1445",
        category: "Floral",
        price: 330,
        favorited: false
      }
    ]);


  const handleSearchTextChange = (text) => {
      setSearchText(text);
    };

    const handleSortOrderChange = () => {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const filteredFragrances = fragrances
      .filter((fragrance) =>
        fragrance.name.toLowerCase().includes(searchText.toLowerCase()) ||
        fragrance.brand.toLowerCase().includes(searchText.toLowerCase()) ||
        fragrance.category.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

    const renderFragrance = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('FragranceView', { fragrance: item, toggleFavorite: () => toggleFavorite(item.id) })}>
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <View style={styles.cardText}>
            <Text style={styles.fragranceName}>{item.name}</Text>
            <Text style={styles.fragranceHouse}>{item.brand}</Text>
            <Text style={styles.fragranceCategory}>Category: {item.category}</Text>
            <Text style={styles.fragrancePrice}>Price: ${item.price}</Text>
          </View>
          <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
            <Text style={styles.favoriteButtonText}>{item.favorited ? "★" : "☆"}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );

    const toggleFavorite = (id) => {
      const updatedFragrances = fragrances.map((fragrance) =>
        fragrance.id === id
          ? { ...fragrance, favorited: !fragrance.favorited }
          : fragrance
      );
      setFragrances(updatedFragrances);
    };

    return (
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchField}
              placeholder="Search"
              placeholderTextColor="#aaa"
              value={searchText}
              onChangeText={handleSearchTextChange}
            />
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
          {filteredFragrances.length > 0 ? (
            <FlatList
              data={filteredFragrances}
              renderItem={renderFragrance}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContainer}
            />
          ) : (
            <View style={styles.noFragrancesContainer}>
              <Text style={styles.noFragrancesText}>No fragrances match your search query.</Text>
            </View>
          )}
        </View>

        {/* Bottom Navigation Bar */}
        <BottomNavBar />
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f8f4f4", // Light beige background
  },
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: "#f8f4f4", // Matching the background color to make it blend in
    borderBottomWidth: 1,
    borderColor: "#ddd", // Light gray border
  },
  searchField: {
    backgroundColor: "#f0f0f0", // Light gray background for the search field
    borderRadius: 25, // Rounded corners
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  filterButton: {
    backgroundColor: "#B497BD", // Lavender color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Rounded corners
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  filterButtonText: {
    color: "#fff", // White text
    fontSize: 16,
  },
  listContainer: {
    paddingTop: 10,
  },
  card: {
    backgroundColor: "#fff", // White background for fragrance cards
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginHorizontal: 10, // Ensures card spans the whole screen width with margin
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    flex: 1,
  },
  fragranceName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", // Dark gray text for fragrance name
  },
  fragranceHouse: {
    fontSize: 14,
    color: "#777", // Light gray for fragrance house
  },
  fragranceCategory: {
    fontSize: 14,
    color: "#555", // Gray for fragrance category
  },
  fragrancePrice: {
    fontSize: 14,
    color: "#111", // Dark color for fragrance price
  },
  noFragrancesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFragrancesText: {
    fontSize: 18,
    color: "#333",
  },
  favoriteButton: {
    padding: 10,
    alignSelf: "flex-start",
    marginLeft: -10, // Shift the button to the left
  },
  favoriteButtonText: {
    fontSize: 24,
    color: "#FFD700",
    textAlign: "left",
  },
});

export default BrowseScreen;
