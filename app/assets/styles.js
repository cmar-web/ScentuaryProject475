import React from 'react';
import * as ReactNative from 'react-native';
import {StyleSheet} from 'react-native';


export const styles = ReactNative.StyleSheet.create({
  //Items to potentially unify or need to renamed to be unique to a page
  /*
  input

  */

  //Reused css across multiple screens ////////////////////////////////////////////////////////////////////////
    background: {
      flex: 1,
      backgroundColor: "#f8f4f4", // Light beige background
    },
    statusButtonText: {
      fontSize: 18,
    },
    statusButton: {
      padding: 1,
    },
    content: {
      flex: 1,
      padding: 16,
      alignItems: "center",
    },  
    container: {
      flex: 1,
      backgroundColor: "#f8f4f4",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 16,
    },
    tabsContentContainer: {
      alignItems: "center",
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
    card: {
      backgroundColor: "#fff",
      padding: 16,
      marginBottom: 16,
      borderRadius: 8,
      alignItems: "flex-start",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    cardImage: {
      width: "100%",
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
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
    sectionHeader: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#444",
      marginVertical: 10,
      alignSelf: "flex-start",
    },
    section: {
      marginBottom: 20,
      width: "100%",
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
    modalBackground: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
      width: "80%",
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      position: "relative", // To position the close icon
    },
    closeIcon: {
      position: "absolute",
      top: 10,
      right: 10,
    },
    modalText: {
      fontSize: 20,
      color: "#333",
      marginBottom: 20,
    },
    inputContainer: {
      width: "100%",
    },
    submitButton: {
      backgroundColor: "#2196F3",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginVertical: 5,
      width: "100%",  // Span the width of the container
    },
    submitButtonText: {
      color: "#fff",
      fontSize: 18,
    },
    switchContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 10,
    },
    switchText: {
      fontSize: 18,
      color: "#333",
    },
    optionButton: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 16,
      marginBottom: 10,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      width: "100%",  // Span the width of the container
    },
    optionButtonText: {
      fontSize: 18,
      color: "#333",
    },
    selectedOptionButton: {
      backgroundColor: "#2196F3",
    },
    selectedOptionButtonText: {
      color: "#fff",
    },

  
    //Welcome and login/resigster screens css/////////////////////////////////////////////////////////////////
  
    backgroundWelcome: {
        flex: 1,
        backgroundColor: "#f8f4f4",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 90,
        paddingBottom: 20,
    },
    backgroundRegAndLog: {
        flex: 1,
        backgroundColor: "#f8f4f4",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 90,
        paddingBottom: 20,
        marginTop: 155,
        marginBottom: 50,

    },
    logo: {
        width: 150,
        height: 150,
    },

    welcomeText: {
        fontSize: 40,
        fontWeight: 15,
        color: 'white',
    },

    welcomeButtonText: {
        fontSize: 20,
        fontWeight: 15,
        color: 'white',
        textAlign: 'center',
    },

    logoContainer: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#8d5da8',
        marginBottom: 40,
    },
    // title: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     marginVertical: 20,
    // },
    buttonContainer: {
        backgroundColor: "#B497BD",
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 45,
        borderRadius: 30,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginHorizontal: 15,
    },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     padding: 16,
    // },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },

    //Randomizer screen css ////////////////////////////////////////////////////////////////////////////////
    randomizerContainer: {
        flex: 1,
        backgroundColor: "#f8f4f4",
      },
      topAppBarRandomizer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#fff",
        elevation: 4,
      },
      leadingIcon: {
        width: 24,
        height: 24,
      },
      headline: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
      },
    
      wheelContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
      },
      wheel: {
        width: 200,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#ccc",
      },
      wheelText: {
        fontSize: 14,
        textAlign: "center",
        color: "#333",
      },
      spinButton: {
        backgroundColor: "#B497BD", // Lavender color
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 6,
        marginTop: 8, // Moved up closer to the wheel
        alignSelf: "center",
      },
      spinButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
      },
      shareResultButton: {
        backgroundColor: "#B497BD", // Lavender color
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 6,
        marginTop: 8, // Moved up closer to the wheel
        alignSelf: "center",
      },
      shareResultText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
      },
      addPerfumeContainer: {
        marginTop: 8, // Moved up closer
      },
      inputLabel: {
        fontSize: 16,
        color: "#333",
        marginBottom: 8,
      },
      textInput: {
        height: 40,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 8,
        borderRadius: 4,
        marginBottom: 16,
      },
      selectedProfileText: {
        fontSize: 16,
        color: "#333",
      },
      addButton: {
        backgroundColor: "#B497BD", // Lavender color
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 8, // Reduced margin to bring the button up
        borderRadius: 4,
        alignItems: "center",
      },
      addButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
      },
      tabsContainer: {
        marginTop: 16,
        paddingBottom: 8,
      },
      filtersLabel: {
        fontSize: 18, // Increased font size for the label
        //fontWeight: "bold", // Added bold text for emphasis
        color: "#333",
        marginBottom: 15, // Space it out slightly more
        marginHorizontal: 5,
      },
      
      
      
      modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      modalContent: {
        width: 300,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
      },
      modalButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: "#B497BD", // Lavender color
        borderRadius: 4,
        marginVertical: 8,
      },
      modalButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
      },
      closeButton: {
        position: "absolute",
        top: 16,
        right: 16,
        padding: 8,
        borderRadius: 16,
        //backgroundColor: "#ccc",
      },
      closeButtonText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#f00",
      },


    // Settings screen css //////////////////////////////////////////////////////////////////////////////////////////////
    settingsBackground: {
        flex: 1,
        backgroundColor: "#f8f4f4",
        alignItems: "flex-start",

    },

    profileSection: {
        alignItems: "flex-start",
        marginBottom: 20,
        paddingVertical: 50,
    },

    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: "#e3bccc", // Placeholder color
        marginBottom: 25,
        overflow: "hidden",
    },

    button: {
        backgroundColor: "#B497BD",
        paddingHorizontal: 25,
        paddingVertical: 8,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 5,
    },

    settingsNavButtons: {
        backgroundColor: "#B497BD",
        marginBottom: 5,
        borderRadius: 5,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginHorizontal: 5,

    },

    

    

    //commented out to not override above css, may be needed for fixing UI if somehting found to be broken
    // header: {
    //     fontSize: 24,
    //     fontWeight: "bold",
    //     color: "#333", // Dark gray text
    // },

    //this is the bottom nav bars css //////////////////////////////////////////////////////////////////////////////
    navBar: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height: 60,
      backgroundColor: "rgba(241, 241, 241, 1)", // Explicit light grey
      borderTopWidth: 1,
      borderColor: "#ddd", // Light grey border
    },
    navItem: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    navText: {
      fontSize: 16,
      color: "#333", // Dark grey text
    },

    // this is the css for the browse screen///////////////////////////////////////////////////////////////
    
    searchContainerBrowse: {
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
    //commented out in case there are errors
    // card: {
    //   backgroundColor: "#fff", // White background for fragrance cards
    //   borderRadius: 10,
    //   padding: 15,
    //   marginBottom: 10,
    //   shadowColor: "#000",
    //   shadowOpacity: 0.1,
    //   shadowRadius: 5,
    //   elevation: 2,
    //   marginHorizontal: 10, // Ensures card spans the whole screen width with margin
    // },
    
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
      color: "#333",
      marginBottom: 2,
      textAlign: "left",
    },
    fragranceStatus: {
        fontSize: 14,
        color: "#333",
        marginBottom: 2,
        textAlign: "left",
      },
    fragrancePrice: {
      fontSize: 14,
      color: "#333",
      textAlign: "left",
    },
    
    
    
    
    // css for the dupes page/////////////////////////////////////////////////////////////////////////////////////////////////
    
    
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
    // AccountSettings screen css/////////////////////////////////////////////////////////////////////////////
    
    
    buttonAccountSettings: {
      backgroundColor: "#fff",
      padding: 16,
      marginBottom: 10,
      borderRadius: 8,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    
    
    
    
    
    input: {
      backgroundColor: "#fff",
      color: "#000",
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#ccc",
      fontSize: 16,
      width: "100%",  // Span the width of the container
    },
    
    yesButton: {
      backgroundColor: "#ff4f4f",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginVertical: 5,
      width: "100%",
    },
    noButton: {
      backgroundColor: "#2196F3",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginVertical: 5,
      width: "100%",
    },
    
    
    
    
    // App Settings Screen css/////////////////////////////////////////////////////////////////////////////////
    appSettingsContainer: {
      flex: 1,
      backgroundColor: "#eaddff",
      paddingTop: 20,
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    statusBar: {
      paddingTop: 10,
      paddingHorizontal: 16,
      backgroundColor: "#fff",
      height: 60,
    },
    frame: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    timeWrapper: {
      paddingLeft: 16,
    },
    //is overriden in other css need to see if there is an error but I am not familiar with the screen. for bug fixes
    // time: {
    //   fontSize: 17,
    //   fontWeight: '600',
    //   color: "#000",
    // },
    dynamicIslandSpacer: {
      width: 124,
      height: 10,
    },
    levels: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cellularConnectionIcon: {
      width: 19,
      height: 12,
    },
    wifiIcon: {
      width: 17,
      height: 12,
    },
    battery: {
      width: 27,
      height: 13,
      position: 'relative',
    },
    border: {
      width: 25,
      height: '100%',
      borderRadius: 4,
      backgroundColor: 'rgba(0,0,0,0.35)',
      position: 'absolute',
      top: 0,
      left: 50,
    },
    capIconPosition: {
      position: 'absolute',
      top: '36%',
      left: '50%',
    },
    capacity: {
      width: 21,
      height: '69%',
      backgroundColor: "#000",
      borderRadius: 3,
      position: 'absolute',
      left: '50%',
      top: '15%',
    },
    //currently overriden, need to see if it affects screen
    // topAppBar: {
    //   backgroundColor: '#d0bcff',
    //   height: 69,
    //   borderRadius: 10,
    //   paddingHorizontal: 8,
    //   paddingVertical: 6,
    //   alignItems: 'center',
    //   marginTop: 53,
    // },
    // leadingIcon: {
    //   width: 48,
    //   height: 48,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    icon: {
      width: 24,
      height: 24,
    },
    // headline: {
    //   fontSize: 22,
    //   color: "#676767",
    //   textAlign: "center",
    //   flex: 1,
    // },
    genericAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginTop: 10,
      marginLeft: 380,
      position: 'absolute',
    },
    tabBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      backgroundColor: "#fff",
      paddingVertical: 10,
      borderRadius: 20,
    },
    tabBarButton: {
      flex: 1,
      alignItems: 'center',
    },
    //is overriden elsewhere
    // label: {
    //   fontSize: 12,
    //   color: "#999",
    // },
    iconRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      marginBottom: 30,
    },
    accountInformation: {
      fontSize: 16,
      fontWeight: '700',
      marginLeft: 10,
      marginTop: 10,
    },
    customization: {
      fontSize: 16,
      marginLeft: 10,
      marginTop: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#e3e3e3",
      paddingHorizontal: 16,
    },
    rowTitle: {
      fontSize: 17,
      color: "#000",
    },
    rowAction: {
      fontSize: 18,
      color: "#007aff",
    },
    logoAgainIcon: {
      width: 185,
      height: 165,
      marginTop: 30,
      alignSelf: 'center',
    },

    // FAQ screen css//////////////////////////////////////////////////////////////////////////////////////
  time: {
    color: "#fff",
    fontSize: 16,
  },
  topAppBar: {
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headline: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // contentFAQ: {
  //   flex: 1,
  //   padding: 16,
  // },
  //unique bc it has the underline
  headerFAQ: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Dark gray text
    marginBottom: 20,
    textDecorationLine: 'underline', // This adds the underline
  },
  accordion: {
    flex: 1,
  },
  accordionItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  body: {
    marginTop: 5,
    fontSize: 16,
    color: "#666",
  },
  // inputContainer: {
  //   padding: 16,
  // },
  inputField: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonFAQ: {
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  

  //fragrance view screen css ////////////////////////////////////////////////////////////////////////////////////////////
  //Coming back to this one, the css is a little weird with this one


  //Privacy and security///////////////////////////////////////////////////////////////////////////////////////////////////
  
  buttonPrivacyAndSecurity: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lightBackgroundButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  
  
  input: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    width: "100%",
  },
  
  
  
  

  //Mycollection screen css /////////////////////////////////////////////////////////////////////////////////////
  
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
  
  
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    textAlign: "left",
  },
  cardBrand: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
    textAlign: "left",
  },
  cardStatus: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
    textAlign: "left",
  },
  cardCategory: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
    textAlign: "left",
  },
  
  tabs: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 16,
  },
  
  
  
  bottomFiltersWrapper: {
    marginTop: 16,
    marginBottom: 10,
  },
  
  cardPrice: {
    fontSize: 14,
    color: "#333",
    textAlign: "left",
  },
  
  

});