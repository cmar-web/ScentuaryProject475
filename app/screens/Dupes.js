import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from "react-native";
import BottomNavBar from "./BottomNavBar";
import { useNavigation, useRoute } from "@react-navigation/native";

const Dupes = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, brand, image, topNotes = [], middleNotes = [], bottomNotes = [], category } = route.params;

  // The scent you are trying to duplicate
  const scent = { id: "0", imageURI: image };

  // The list of similar scents that come back, will be modified when we connect API/DB to it
  const dupesList = [
    { id: "1", imageURI: "https://www.sephora.com/productimages/sku/s513168-main-zoom.jpg"},
    { id: "2", imageURI: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6O7wFscCNH5k9cg52cfyjOFBMnPbUm9JpSQ&s" },
    { id: "3", imageURI: "https://i5.walmartimages.com/seo/Ariana-Grande-Sweet-Like-Candy-Eau-de-Parfum-Perfume-for-Women-1-Oz_6e8a4fdb-601f-42e5-86b0-0ed64fb1412a.28b228882edbbd27cf7d851dad8ec0df.jpeg"},
    { id: "4", imageURI: "https://theperfumeworld.co.uk/cdn/shop/files/sauvage_homepage_tile_684x684_b8c47959-3a78-4638-98e8-06fc2f4fbaf3.webp?v=1679670504&width=1500" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Dupes</Text>

        {/* Card for the Scent to dupe */}
        <View style={styles.scentCard}>
          <Image style={styles.scentImage} source={{uri: scent.imageURI}} />
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

          {/* Generate all the related scents that come back */}
          <FlatList
            data={dupesList}
            renderItem={({item}) => (
              <View style={styles.gridCard}>
                <Image style={styles.dupeImage} source={{uri: item.imageURI}} />
              </View>
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            key={2} // Force fresh render by changing key prop
            contentContainerStyle={styles.listContainer}
          />
        </View>
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
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: 'center',
  },
  scentCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  scentImage: {
    width: '30%',
    height: '100%',
    borderRadius: 10,
  },
  scentDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  listContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginHorizontal: 10,
    height: 150,
    width: 150,
  },
  dupeImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  brand: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  name: {
    fontSize: 16,
    color: "#555",
  },
  category: {
    fontSize: 14,
    color: "#777",
  },
  notesHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },
  notes: {
    fontSize: 14,
    color: "#777",
  },
});

export default Dupes;
