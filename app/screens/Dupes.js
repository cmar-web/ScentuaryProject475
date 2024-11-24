import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, FlatList } from "react-native";
import BottomNavBar from "./BottomNavBar"; // Import the BottomNavBar component
import { useNavigation } from "@react-navigation/native";
//import { FlatList } from "react-native-web";


const Dupes = () => {

  const navigation = useNavigation();

  //the scent you are trying to duplicate
  const scent = {id:"0", imageURI: "https://media.ulta.com/i/ulta/2627574?w=1200&h=1200&fmt=auto"}

  //the list of similar scents that come back, will be modified when we connect API/DB to it
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

        {/*Make the card for the Scent to dupe and the search bar*/}
        <View style={{flexDirection: 'row', height: '15%'}}>
            <Image style={{width:'30%', height:'100%', position: ''}} source={{uri:scent.imageURI}}></Image>
          {/* Search Bar */}
          <View style={styles.navigationBar}>
            <TextInput
              style={styles.searchField}
              placeholder="Search"
              placeholderTextColor="#aaa"
            />
          </View>
        </View>

        {/* Show what dupes have been found*/}
        <View>
          <Text style={styles.header}> Dupes Found:</Text>

          {/* Generate all the related scents that come back */}
          {/* Each one is a gridCard with an image inside of it*/}
          <FlatList
            data={dupesList}
            renderItem={({item}) => (

              <View style={styles.gridCard}>
                <Image style={{ width: "100%", height: "100%"}} source={{uri: item.imageURI}}></Image>  
              </View>
              
            ) }
            keyExtractor={(item) => item.id}
            numColumns={3}
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
    backgroundColor: "#f8f4f4", // Light beige background
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Dark gray text
    marginBottom: 20,
  },
  listContainer: {
    paddingTop: 10,
  },
  gridCard:{
    backgroundColor: "#fff", // White background for fragrance cards
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginHorizontal: 5, 
    // height: "70%", // percentage based sizes break th flexlist for some reason
    // width: "50%", // percentage based sizes break th flexlist for some reason
    height: 100,
    width: 100,
  },
  gridCardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  navigationBar: {
    padding: 10,
    backgroundColor: "#fff", // White background for the search bar
    borderBottomWidth: 1,
    borderColor: "#ddd", // Light gray border
    width: '60%',
  },
  searchField: {
    backgroundColor: "#eee", // Light gray background for the search field
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    flex:1,
    alignContent: 'center',
  },
  dupeImage: {
    padding: 10,
  }
});

export default Dupes;
