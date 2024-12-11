import * as React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";

// Static image imports
import cellularConnectionIcon from './assets/Cellular Connection.png';
import wifiIcon from './assets/Wifi.png';
import capIcon from './assets/Cap.png';
import iconImage from './assets/Icon.png';
import genericAvatarIcon from './assets/Generic avatar.png';
import folderIcon from './assets/folder.png';
import editIcon from './assets/edit.png';
import starIcon from './assets/star.png';
import settingsIcon from './assets/settings.png';
import logoAgainIcon from './assets/LogoAgain 2.png';
import {styles} from '../assets/styles';

const IPhone1415ProMax = () => {
  return (
    <ScrollView style={styles.appSettingsContainer}>
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.flexRow]}>
          <View style={styles.timeWrapper}>
            <Text style={styles.time}>9:41</Text>
          </View>
          <View style={styles.dynamicIslandSpacer} />
          <View style={[styles.levels, styles.flexRow]}>
            <Image style={styles.cellularConnectionIcon} source={cellularConnectionIcon} />
            <Image style={styles.wifiIcon} source={wifiIcon} />
            <View style={styles.battery}>
              <View style={styles.border} />
              <Image style={[styles.capIcon, styles.capIconPosition]} source={capIcon} />
              <View style={[styles.capacity]} />
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.topAppBar, styles.flexRow]}>
        <View style={styles.leadingIcon}>
          <Image style={styles.icon} source={iconImage} />
        </View>
        <Text style={styles.headline}>Account Settings</Text>
        <View style={styles.leadingIcon}>
          <Image style={styles.icon} source={iconImage} />
        </View>
      </View>

      <Image style={styles.genericAvatar} source={genericAvatarIcon} />

      <View style={styles.tabBar}>
        <View style={[styles.tabBarButton]}>
          <Text style={styles.label}>Browse</Text>
        </View>
        <View style={styles.tabBarButton}>
          <Text style={styles.label}>Randomizer</Text>
        </View>
        <View style={styles.tabBarButton}>
          <Text style={styles.label}>My Collection</Text>
        </View>
        <View style={styles.tabBarButton}>
          <Text style={styles.label}>Settings</Text>
        </View>
      </View>

      <View style={styles.iconRow}>
        <Image style={styles.icon} source={folderIcon} />
        <Image style={styles.icon} source={editIcon} />
        <Image style={styles.icon} source={starIcon} />
        <Image style={styles.icon} source={settingsIcon} />
      </View>

      <Text style={styles.accountInformation}>Account Information:</Text>
      <Text style={styles.customization}>Customization:</Text>

      {/* Example row */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Notifications</Text>
        <Text style={styles.rowAction}>􀆊</Text>
      </View>

      {/* Add additional rows as needed */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>App Theme</Text>
        <Text style={styles.rowAction}>􀅴</Text>
      </View>

      <Image style={styles.logoAgainIcon} source={logoAgainIcon} />
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eaddff",
//     paddingTop: 20,
//   },
//   flexRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   statusBar: {
//     paddingTop: 10,
//     paddingHorizontal: 16,
//     backgroundColor: "#fff",
//     height: 60,
//   },
//   frame: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   timeWrapper: {
//     paddingLeft: 16,
//   },
//   time: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: "#000",
//   },
//   dynamicIslandSpacer: {
//     width: 124,
//     height: 10,
//   },
//   levels: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   cellularConnectionIcon: {
//     width: 19,
//     height: 12,
//   },
//   wifiIcon: {
//     width: 17,
//     height: 12,
//   },
//   battery: {
//     width: 27,
//     height: 13,
//     position: 'relative',
//   },
//   border: {
//     width: 25,
//     height: '100%',
//     borderRadius: 4,
//     backgroundColor: 'rgba(0,0,0,0.35)',
//     position: 'absolute',
//     top: 0,
//     left: 50,
//   },
//   capIconPosition: {
//     position: 'absolute',
//     top: '36%',
//     left: '50%',
//   },
//   capacity: {
//     width: 21,
//     height: '69%',
//     backgroundColor: "#000",
//     borderRadius: 3,
//     position: 'absolute',
//     left: '50%',
//     top: '15%',
//   },
//   topAppBar: {
//     backgroundColor: '#d0bcff',
//     height: 69,
//     borderRadius: 10,
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     alignItems: 'center',
//     marginTop: 53,
//   },
//   leadingIcon: {
//     width: 48,
//     height: 48,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//   },
//   headline: {
//     fontSize: 22,
//     color: "#676767",
//     textAlign: "center",
//     flex: 1,
//   },
//   genericAvatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginTop: 10,
//     marginLeft: 380,
//     position: 'absolute',
//   },
//   tabBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   tabBarButton: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 12,
//     color: "#999",
//   },
//   iconRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   accountInformation: {
//     fontSize: 16,
//     fontWeight: '700',
//     marginLeft: 10,
//     marginTop: 10,
//   },
//   customization: {
//     fontSize: 16,
//     marginLeft: 10,
//     marginTop: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#e3e3e3",
//     paddingHorizontal: 16,
//   },
//   rowTitle: {
//     fontSize: 17,
//     color: "#000",
//   },
//   rowAction: {
//     fontSize: 18,
//     color: "#007aff",
//   },
//   logoAgainIcon: {
//     width: 185,
//     height: 165,
//     marginTop: 30,
//     alignSelf: 'center',
//   },
// });

export default IPhone1415ProMax;
