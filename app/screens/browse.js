import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from "./BottomNavBar"; // Import the BottomNavBar component

const BrowseScreen = () => {
  const navigation = useNavigation();

  const fragrances = [
    { id: "1", name: "Fragrance 1", house: "Fragrance House" },
    { id: "2", name: "Fragrance 2", house: "Fragrance House" },
    { id: "3", name: "Fragrance 3", house: "Fragrance House" },
    { id: "4", name: "Fragrance 4", house: "Fragrance House" },
    { id: "5", name: "Fragrance 5", house: "Fragrance House" },
    { id: "6", name: "Fragrance 6", house: "Fragrance House" },
  ];

  const renderFragrance = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.monogram}>
          <Text style={styles.monogramText}>A</Text>
        </View>
        <View style={styles.cardText}>
          <Text style={styles.fragranceName}>{item.name}</Text>
          <Text style={styles.fragranceHouse}>{item.house}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.navigationBar}>
          <TextInput
            style={styles.searchField}
            placeholder="Search"
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Fragrance Cards */}
        <FlatList
          data={fragrances}
          renderItem={renderFragrance}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
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
  navigationBar: {
    padding: 10,
    backgroundColor: "#fff", // White background for the search bar
    borderBottomWidth: 1,
    borderColor: "#ddd", // Light gray border
  },
  searchField: {
    backgroundColor: "#eee", // Light gray background for the search field
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
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
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  monogram: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd", // Light gray background for monogram circle
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  monogramText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555", // Dark gray for the monogram text
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
});

export default BrowseScreen;
