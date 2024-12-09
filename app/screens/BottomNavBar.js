import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {styles} from '../assets/styles';

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Browse')}
      >
        <Text style={styles.navText}>Browse</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Randomizer')}
      >
        <Text style={styles.navText}>Randomizer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('MyCollection')}
      >
        <Text style={styles.navText}>My Collection</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.navText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   navBar: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     height: 60,
//     backgroundColor: "rgba(241, 241, 241, 1)", // Explicit light grey
//     borderTopWidth: 1,
//     borderColor: "#ddd", // Light grey border
//   },
//   navItem: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   navText: {
//     fontSize: 16,
//     color: "#333", // Dark grey text
//   },
// });

export default BottomNavBar;
