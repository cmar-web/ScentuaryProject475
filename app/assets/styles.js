import React from 'react';
import * as ReactNative from 'react-native';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#e3bccc',
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 150,
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 90,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        height: 40,
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

    largeText: {
        fontSize: 32, // Large font size
        fontWeight: 'bold', // Makes the text bold
        textAlign: 'center', // Centers the text horizontally
        marginTop: 20, // Adds space at the top
        color: '#333', // Dark gray text color (adjust as needed)
    },
    inputField: {
        gap: 8,
        alignSelf: 'stretch',
    },
    inputContainer: {
        borderColor: '#d9d9d9',
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignSelf: 'stretch',
    },
    inputLabel: {
        textAlign: 'left',
        color: '#1e1e1e',
        fontFamily: 'Inter-Regular',
        lineHeight: 22,
        fontSize: 16,
        marginBottom: 4,
    },
    button: {
        backgroundColor: '#676767',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 20,
    },
    buttonText: {
        color: '#f5f5f5',
        fontSize: 16,
        fontWeight: '600',
    },
    textLink: {
        color: '#3c4043',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 12,
    },
    signInWithContainer: {
        height: 40,
        borderColor: '#dadce0',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 16,
    },
    signInWithText: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Roboto-Medium',
        color: '#3c4043',
        textAlign: 'center',
    },
    googleLogo: {
        width: 20,
        height: 20,
        marginRight: 8,
    },

    //styles for browse.js:
    barSpaceBlock: {
    		paddingHorizontal: 4,
    		width: 430,
    		position: "absolute"
  	},
  	topAppBarFlexBox: {
    		borderRadius: 10,
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	timeFlexBox: {
    		paddingLeft: 16,
    		justifyContent: "center",
    		flexDirection: "row",
    		alignItems: "center",
    		flex: 1
  	},
  	levelsFlexBox: {
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	borderBorder: {
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	horizontalCardLayout: {
    		height: 97,
    		width: 382,
    		left: 24,
    		borderRadius: 12,
    		flexDirection: "row",
    		position: "absolute"
  	},
  	contentLayout: {
    		borderRadius: 12,
    		overflow: "hidden"
  	},
  	headerPosition: {
    		left: 0,
    		right: 0,
    		position: "absolute"
  	},
  	monogramLayout: {
    		width: 40,
    		height: 40
  	},
  	backgroundPosition: {
    		left: "0%",
    		right: "0%",
    		top: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	initialTypo: {
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		textAlign: "center"
  	},
  	subheadTypo: {
    		fontFamily: "Roboto-Regular",
    		color: "#676767"
  	},
  	labelTypo: {
    		color: "#007aff",
    		fontFamily: "ABeeZee-Italic",
    		fontStyle: "italic",
    		textAlign: "center",
    		position: "absolute"
  	},
  	symbolPosition: {
    		fontSize: 18,
    		left: "18.74%",
    		top: "2.5%",
    		width: "62.43%"
  	},
  	label1Typo: {
    		color: "#999",
    		fontFamily: "ABeeZee-Italic",
    		fontStyle: "italic",
    		textAlign: "center",
    		position: "absolute"
  	},
  	tab3ShadowBox: {
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.25)"
  	},
  	iconLayout: {
    		height: 24,
    		width: 24
  	},
  	iconPosition: {
    		left: 40,
    		height: 40,
    		width: 40,
    		position: "absolute"
  	},
  	navigationPosition: {
    		gap: 8,
    		left: 282,
    		padding: 8,
    		alignItems: "center",
    		position: "absolute"
  	},
  	buttonLayout: {
    		borderRadius: 100,
    		overflow: "hidden"
  	},
  	subheadLayout: {
    		lineHeight: 20,
    		fontSize: 14,
    		letterSpacing: 0
  	},
  	dotIcon: {
    		width: 5,
    		height: 5
  	},
  	windowGrabber: {
    		padding: 10,
    		flexDirection: "row",
    		gap: 3
  	},
  	titleAndControls: {
    		height: 44,
    		alignSelf: "stretch"
  	},
  	searchGlyph: {
    		width: 25,
    		textAlign: "left",
    		color: "rgba(60, 60, 67, 0.6)",
    		fontFamily: "SF Pro",
    		lineHeight: 22,
    		fontSize: 17
  	},
  	placeholderLabel: {
    		height: 22,
    		letterSpacing: 0,
    		textAlign: "left",
    		color: "rgba(60, 60, 67, 0.6)",
    		fontFamily: "SF Pro",
    		lineHeight: 22,
    		fontSize: 17,
    		overflow: "hidden",
    		flex: 1
  	},
  	dictation: {
    		textAlign: "center",
    		color: "rgba(60, 60, 67, 0.6)",
    		fontFamily: "SF Pro",
    		lineHeight: 22,
    		fontSize: 17
  	},
  	searchField1: {
    		backgroundColor: "rgba(120, 120, 128, 0.12)",
    		paddingHorizontal: 8,
    		paddingVertical: 7,
    		alignSelf: "stretch"
  	},
  	searchField: {
    		paddingHorizontal: 16,
    		paddingTop: 1,
    		paddingBottom: 15,
    		alignSelf: "stretch"
  	},
  	navigationBarIpadRegular: {
    		top: 53,
    		left: 5,
    		height: 117,
    		paddingVertical: 0,
    		gap: 3,
    		alignItems: "center"
  	},
  	time1: {
    		color: "#000",
    		fontWeight: "600",
    		textAlign: "center",
    		fontFamily: "SF Pro",
    		lineHeight: 22,
    		fontSize: 17
  	},
  	time: {
    		paddingRight: 6
  	},
  	dynamicIslandSpacer: {
    		width: 124,
    		height: 10
  	},
  	cellularConnectionIcon: {
    		width: 19,
    		height: 12
  	},
  	wifiIcon: {
    		width: 17,
    		height: 12
  	},
  	border: {
    		marginLeft: -13.65,
    		borderRadius: 4,
    		opacity: 0.35,
    		borderColor: "#000",
    		borderWidth: 1,
    		position: "absolute",
    		left: "50%",
    		bottom: "0%",
    		height: "100%",
    		top: "0%",
    		width: 25
  	},
  	capIcon: {
    		height: "31.54%",
    		marginLeft: 12.35,
    		top: "36.78%",
    		bottom: "31.68%",
    		width: 1,
    		opacity: 0.4,
    		maxHeight: "100%",
    		left: "50%",
    		position: "absolute"
  	},
  	capacity: {
    		height: "69.23%",
    		marginLeft: -11.65,
    		top: "15.38%",
    		bottom: "15.38%",
    		borderRadius: 3,
    		backgroundColor: "#000",
    		width: 21,
    		left: "50%",
    		position: "absolute"
  	},
  	battery: {
    		width: 27,
    		height: 13
  	},
  	levels: {
    		paddingLeft: 6,
    		paddingRight: 16,
    		gap: 7,
    		flexDirection: "row",
    		flex: 1
  	},
  	frame: {
    		justifyContent: "space-between",
    		alignSelf: "stretch",
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	statusBarIphone: {
    		left: 2,
    		width: 422,
    		height: 53,
    		paddingTop: 21,
    		top: 0,
    		position: "absolute"
  	},
  	backgroundIcon: {
    		maxWidth: "100%",
    		maxHeight: "100%",
    		bottom: "0%",
    		height: "100%",
    		right: "0%",
    		overflow: "hidden"
  	},
  	initial: {
    		marginTop: -20,
    		marginLeft: -20,
    		top: "50%",
    		color: "#fef7ff",
    		display: "flex",
    		lineHeight: 24,
    		fontSize: 16,
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		height: 40,
    		width: 40,
    		left: "50%",
    		justifyContent: "center",
    		letterSpacing: 0,
    		alignItems: "center",
    		position: "absolute"
  	},
  	monogram: {
    		height: 40,
    		overflow: "hidden"
  	},
  	header1: {
    		color: "#676767",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 24,
    		fontSize: 16,
    		letterSpacing: 0,
    		textAlign: "left",
    		alignSelf: "stretch"
  	},
  	subhead: {
    		lineHeight: 20,
    		fontSize: 14,
    		letterSpacing: 0,
    		textAlign: "left",
    		fontFamily: "Roboto-Regular",
    		alignSelf: "stretch"
  	},
  	text: {
    		gap: 4,
    		flex: 1
  	},
  	content1: {
    		padding: 16,
    		gap: 16,
    		flexDirection: "row",
    		alignItems: "center",
    		flex: 1
  	},
  	mediaIcon: {
    		width: 80,
    		maxHeight: "100%",
    		alignSelf: "stretch"
  	},
  	header: {
    		bottom: 0,
    		left: 0,
    		right: 0,
    		top: 0,
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	content: {
    		zIndex: 1,
    		alignSelf: "stretch",
    		flex: 1
  	},
  	stateLayer: {
    		bottom: "0%",
    		height: "100%",
    		right: "0%",
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	background: {
    		backgroundColor: "#fef7ff",
    		borderColor: "#cac4d0",
    		zIndex: 0,
    		borderRadius: 12,
    		overflow: "hidden",
    		borderWidth: 1,
    		borderStyle: "solid",
    		bottom: "0%",
    		height: "100%",
    		right: "0%"
  	},
  	horizontalCard: {
    		top: 563
  	},
  	horizontalCard1: {
    		top: 660
  	},
  	horizontalCard2: {
    		top: 272
  	},
  	horizontalCard3: {
    		top: 175
  	},
  	horizontalCard4: {
    		top: 369
  	},
  	horizontalCard5: {
    		top: 466
  	},
  	iphone1415ProMax2Child: {
    		height: "11.7%",
    		width: "100.47%",
    		top: "90.56%",
    		right: "-0.23%",
    		bottom: "-2.25%",
    		left: "-0.23%",
    		borderRadius: 16,
    		backgroundColor: "#fff",
    		position: "absolute"
  	},
  	chrome: {
    		height: "99.61%",
    		bottom: "0.39%",
    		backgroundColor: "#faf6ff",
    		alignItems: "center"
  	},
  	chromeMaterial: {
    		borderColor: "#faf6ff",
    		borderTopWidth: 0.3,
    		bottom: 0,
    		left: 0,
    		right: 0,
    		top: 0,
    		borderStyle: "solid",
    		overflow: "hidden"
  	},
  	label: {
    		fontSize: 10,
    		left: "-1.04%",
    		top: "70%",
    		width: "102.04%"
  	},
  	symbol: {
    		color: "#007aff",
    		fontFamily: "ABeeZee-Italic",
    		fontStyle: "italic",
    		textAlign: "center",
    		position: "absolute"
  	},
  	tab1: {
    		height: 40,
    		flex: 1
  	},
  	label1: {
    		fontSize: 10,
    		left: "-1.04%",
    		top: "70%",
    		width: "102.04%"
  	},
  	symbol1: {
    		fontSize: 18,
    		left: "18.74%",
    		top: "2.5%",
    		width: "62.43%"
  	},
  	tab3: {
    		height: 40,
    		flex: 1
  	},
  	tabBarButtons: {
    		top: 7,
    		left: 0,
    		right: 0,
    		justifyContent: "space-between",
    		flexDirection: "row"
  	},
  	tabBarIphone: {
    		top: 855,
    		left: -1,
    		borderTopLeftRadius: 50,
    		borderTopRightRadius: 10000,
    		borderBottomRightRadius: 50,
    		borderBottomLeftRadius: 50,
    		width: 431,
    		height: 77,
    		position: "absolute"
  	},
  	folderIcon: {
    		left: 38,
    		top: 858,
    		width: 24,
    		position: "absolute"
  	},
  	editIcon: {
    		left: 146,
    		top: 858,
    		width: 24,
    		position: "absolute"
  	},
  	starIcon: {
    		left: 254,
    		top: 858,
    		width: 24,
    		position: "absolute"
  	},
  	settingsIcon: {
    		left: 364,
    		top: 858,
    		width: 24,
    		position: "absolute"
  	},
  	b015ebcd2eac9e80515cb602cd611fIcon: {
    		top: 203
  	},
  	o198Icon: {
    		top: 494
  	},
  	kilianparisLogoIcon: {
    		top: 591
  	},
  	imagesIcon: {
    		top: 688
  	},
  	pngTransparentGiorgioArmaniIcon: {
    		top: 300
  	},
  	nauticaLogoGraphics4924134Icon: {
    		top: 397
  	},
  	starIcon1: {
    		overflow: "hidden"
  	},
  	label4: {
    		lineHeight: 14,
    		fontFamily: "Inter-SemiBold",
    		color: "#757575",
    		fontSize: 14,
    		fontWeight: "600",
    		textAlign: "center"
  	},
  	navigationButton: {
    		top: 175
  	},
  	navigationButton1: {
    		top: 369
  	},
  	navigationButton2: {
    		top: 467
  	},
  	navigationButton3: {
    		top: 563
  	},
  	navigationButton4: {
    		top: 272
  	},
  	navigationButton5: {
    		top: 661
  	},
  	stateLayer6: {
    		padding: 8,
    		justifyContent: "center",
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	container: {
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	leadingIcon: {
    		width: 48,
    		height: 48
  	},
  	headline: {
    		fontSize: 22,
    		lineHeight: 28,
    		textAlign: "center",
    		flex: 1
  	},
  	topAppBar: {
    		top: 52,
    		left: 1,
    		backgroundColor: "#d0bcff",
    		height: 64,
    		paddingVertical: 8,
    		gap: 6,
    		paddingHorizontal: 4,
    		width: 430,
    		position: "absolute"
  	},
  	genericAvatarIcon: {
    		top: 64,
    		left: 383,
    		height: 40,
    		width: 40,
    		position: "absolute"
  	},
  	labelText: {
    		color: "#fff",
    		textShadowColor: "rgba(0, 0, 0, 0.25)",
    		textShadowOffset: {
      			width: 0,
      			height: 4
    		},
    		textShadowRadius: 4,
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		textAlign: "center"
  	},
  	stateLayer8: {
    		paddingTop: 10,
    		paddingRight: 24,
    		paddingBottom: 10,
    		alignSelf: "stretch"
  	},
  	button: {
    		top: 777,
    		left: 96,
    		backgroundColor: "#625b71",
    		width: 231,
    		height: 49,
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderColor: "#000",
    		position: "absolute",
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	iphone1415ProMax2: {
    		backgroundColor: "#eaddff",
    		height: 932,
    		overflow: "hidden",
    		width: "100%",
    		flex: 1
  	}

});