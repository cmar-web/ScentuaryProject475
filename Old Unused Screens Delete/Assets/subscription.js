import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const IPhone1415ProMax = () => {

  	return (
    		<View style={styles.iphone1415ProMax4}>
      			<View style={[styles.statusBarIphone, styles.barPosition]}>
        				<View style={[styles.frame, styles.frameFlexBox]}>
          					<View style={styles.time}>
            						<Text style={styles.time1}>9:41</Text>
          					</View>
          					<View style={styles.dynamicIslandSpacer} />
          					<View style={styles.levels}>
            						<Image style={styles.cellularConnectionIcon} resizeMode="cover" source="Cellular Connection.png" />
            						<Image style={styles.wifiIcon} resizeMode="cover" source="Wifi.png" />
            						<View style={styles.battery}>
              							<View style={styles.border} />
              							<Image style={[styles.capIcon, styles.capIconPosition]} resizeMode="cover" source="Cap.png" />
              							<View style={[styles.capacity, styles.capIconPosition]} />
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.topAppBar, styles.barPosition]}>
        				<View style={styles.leadingIcon}>
          					<View style={[styles.container, styles.containerLayout]}>
            						<View style={styles.stateLayer}>
              							<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
        				<Text style={[styles.headline, styles.headlineFlexBox]}>{`Subscription & Billing`}</Text>
        				<View style={styles.leadingIcon}>
          					<View style={[styles.container, styles.containerLayout]}>
            						<View style={styles.stateLayer}>
              							<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
      			</View>
      			<Image style={[styles.genericAvatarIcon, styles.containerLayout]} resizeMode="cover" source="Generic avatar.png" />
      			<View style={[styles.pricingCard, styles.buttonBorder]}>
        				<View style={styles.top}>
          					<View style={styles.textHeading}>
            						<Text style={[styles.textHeading1, styles.textTypo1]}>Pro-Version</Text>
          					</View>
          					<View style={styles.textPrice}>
            						<View style={styles.price}>
              							<Text style={[styles.text, styles.textTypo]}>$</Text>
              							<Text style={[styles.text1, styles.textTypo]}>0.99</Text>
            						</View>
            						<Text style={styles.mo}>/ mo</Text>
          					</View>
          					<View style={styles.textList}>
            						<View style={styles.textListItem}>
              							<Text style={[styles.listItem, styles.button1Typo]}>Randomizer</Text>
            						</View>
            						<View style={styles.textListItem}>
              							<Text style={[styles.listItem, styles.button1Typo]}>Price Comparison</Text>
            						</View>
            						<View style={styles.textListItem}>
              							<Text style={[styles.listItem, styles.button1Typo]}>Scent Suggestor</Text>
            						</View>
            						<View style={styles.textListItem}>
              							<Text style={[styles.listItem, styles.button1Typo]}>More Collection Space</Text>
            						</View>
            						<View style={styles.textListItem}>
              							<Text style={[styles.listItem, styles.button1Typo]}>No Ads</Text>
            						</View>
          					</View>
        				</View>
        				<View style={[styles.button, styles.buttonBorder]}>
          					<Text style={[styles.button1, styles.button1Typo]}>Purchase</Text>
        				</View>
      			</View>
      			<Image style={styles.logoagain1Icon} resizeMode="cover" source="LogoAgain 1.png" />
      			<View style={[styles.iphone1415ProMax4Child, styles.chromePosition]} />
      			<View style={styles.tabBarIphone}>
        				<View style={[styles.chromeMaterial, styles.tabBarButtonsPosition]}>
          					<View style={[styles.chrome, styles.chromePosition]} />
        				</View>
        				<View style={[styles.tabBarButtons, styles.tabBarButtonsPosition]}>
          					<View style={styles.tab1}>
            						<Text style={[styles.label, styles.labelTypo]}>Browse</Text>
            						<Text style={[styles.symbol, styles.symbolPosition]} />
          					</View>
          					<View style={styles.tab1}>
            						<Text style={[styles.label, styles.labelTypo]}>Randomizer</Text>
            						<Text style={[styles.symbol, styles.symbolPosition]} />
          					</View>
          					<View style={styles.tab3}>
            						<Text style={[styles.label, styles.labelTypo]}>My Collection</Text>
            						<Text style={[styles.symbol, styles.symbolPosition]} />
          					</View>
          					<View style={styles.tab1}>
            						<Text style={[styles.label3, styles.label3Typo]}>Settings</Text>
            						<Text style={[styles.symbol3, styles.label3Typo]} />
          					</View>
        				</View>
      			</View>
      			<Image style={[styles.folderIcon, styles.iconPosition]} resizeMode="cover" source="folder.png" />
      			<Image style={[styles.editIcon, styles.iconPosition]} resizeMode="cover" source="edit.png" />
      			<Image style={[styles.starIcon, styles.iconPosition]} resizeMode="cover" source="star.png" />
      			<Image style={[styles.settingsIcon, styles.iconPosition]} resizeMode="cover" source="settings.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	barPosition: {
    		left: 0,
    		position: "absolute"
  	},
  	frameFlexBox: {
    		justifyContent: "space-between",
    		flexDirection: "row"
  	},
  	capIconPosition: {
    		left: "50%",
    		position: "absolute"
  	},
  	containerLayout: {
    		borderRadius: 100,
    		overflow: "hidden"
  	},
  	headlineFlexBox: {
    		color: "#676767",
    		textAlign: "center",
    		flex: 1
  	},
  	buttonBorder: {
    		borderRadius: 8,
    		borderWidth: 1,
    		borderStyle: "solid",
    		alignItems: "center",
    		overflow: "hidden"
  	},
  	textTypo1: {
    		letterSpacing: -0.5,
    		fontSize: 24
  	},
  	textTypo: {
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		color: "#676767"
  	},
  	button1Typo: {
    		fontSize: 16,
    		fontFamily: "Inter-Regular",
    		textAlign: "left"
  	},
  	chromePosition: {
    		right: "0%",
    		position: "absolute"
  	},
  	tabBarButtonsPosition: {
    		right: 0,
    		left: 0,
    		position: "absolute"
  	},
  	labelTypo: {
    		color: "#999",
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
  	label3Typo: {
    		color: "#007aff",
    		fontFamily: "ABeeZee-Italic",
    		fontStyle: "italic",
    		textAlign: "center",
    		position: "absolute"
  	},
  	iconPosition: {
    		top: 866,
    		height: 24,
    		width: 24,
    		position: "absolute"
  	},
  	time1: {
    		fontSize: 17,
    		lineHeight: 22,
    		fontFamily: "SF Pro",
    		color: "#000",
    		textAlign: "center",
    		fontWeight: "600"
  	},
  	time: {
    		paddingLeft: 16,
    		paddingRight: 6,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		flex: 1
  	},
  	dynamicIslandSpacer: {
    		width: 124,
    		height: 10,
    		justifyContent: "center",
    		alignItems: "center"
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
    		height: "100%",
    		marginLeft: -13.65,
    		bottom: "0%",
    		borderRadius: 4,
    		borderColor: "#000",
    		width: 25,
    		opacity: 0.35,
    		borderWidth: 1,
    		top: "0%",
    		borderStyle: "solid",
    		left: "50%",
    		position: "absolute"
  	},
  	capIcon: {
    		height: "31.54%",
    		marginLeft: 12.35,
    		top: "36.78%",
    		bottom: "31.68%",
    		maxHeight: "100%",
    		width: 1,
    		opacity: 0.4
  	},
  	capacity: {
    		height: "69.23%",
    		marginLeft: -11.65,
    		top: "15.38%",
    		bottom: "15.38%",
    		borderRadius: 3,
    		backgroundColor: "#000",
    		width: 21
  	},
  	battery: {
    		width: 27,
    		height: 13
  	},
  	levels: {
    		paddingLeft: 6,
    		paddingRight: 16,
    		gap: 7,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		flex: 1
  	},
  	frame: {
    		alignItems: "center",
    		alignSelf: "stretch"
  	},
  	statusBarIphone: {
    		width: 422,
    		height: 53,
    		paddingTop: 21,
    		top: 0,
    		left: 0
  	},
  	icon: {
    		height: 24,
    		width: 24
  	},
  	stateLayer: {
    		padding: 8,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	container: {
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	leadingIcon: {
    		width: 48,
    		height: 48,
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	headline: {
    		fontSize: 22,
    		lineHeight: 28,
    		fontFamily: "Roboto-Regular"
  	},
  	topAppBar: {
    		top: 48,
    		borderRadius: 10,
    		backgroundColor: "#d0bcff",
    		width: 430,
    		height: 64,
    		paddingHorizontal: 4,
    		paddingVertical: 8,
    		gap: 6,
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	genericAvatarIcon: {
    		top: 60,
    		left: 382,
    		width: 40,
    		height: 40,
    		position: "absolute"
  	},
  	textHeading1: {
    		lineHeight: 29,
    		fontFamily: "Inter-SemiBold",
    		color: "#676767",
    		textAlign: "center",
    		flex: 1,
    		fontWeight: "600",
    		fontSize: 24
  	},
  	textHeading: {
    		width: 149,
    		height: 29,
    		flexDirection: "row"
  	},
  	text: {
    		lineHeight: 24,
    		letterSpacing: -0.5,
    		fontSize: 24
  	},
  	text1: {
    		fontSize: 48,
    		letterSpacing: -1,
    		lineHeight: 48
  	},
  	price: {
    		flexDirection: "row"
  	},
  	mo: {
    		fontSize: 14,
    		lineHeight: 25,
    		fontFamily: "Inter-Regular",
    		textAlign: "left",
    		color: "#676767"
  	},
  	textPrice: {
    		alignItems: "flex-end",
    		justifyContent: "center",
    		flexDirection: "row"
  	},
  	listItem: {
    		lineHeight: 22,
    		color: "#757575",
    		left: "0%",
    		top: "0%",
    		position: "absolute"
  	},
  	textListItem: {
    		width: 89,
    		height: 22
  	},
  	textList: {
    		gap: 12,
    		alignSelf: "stretch"
  	},
  	top: {
    		justifyContent: "flex-end",
    		gap: 16,
    		alignItems: "center",
    		alignSelf: "stretch"
  	},
  	button1: {
    		lineHeight: 16,
    		color: "#f5f5f5"
  	},
  	button: {
    		backgroundColor: "#676767",
    		borderColor: "#676767",
    		padding: 12,
    		justifyContent: "center",
    		flexDirection: "row",
    		alignSelf: "stretch"
  	},
  	pricingCard: {
    		top: 150,
    		left: 44,
    		borderColor: "#d9d9d9",
    		width: 346,
    		height: 416,
    		padding: 32,
    		gap: 24,
    		minWidth: 240,
    		backgroundColor: "#fff",
    		position: "absolute"
  	},
  	logoagain1Icon: {
    		top: 649,
    		left: 126,
    		width: 178,
    		height: 165,
    		position: "absolute"
  	},
  	iphone1415ProMax4Child: {
    		height: "11.7%",
    		width: "100.47%",
    		top: "91.42%",
    		bottom: "-3.11%",
    		left: "-0.47%",
    		borderRadius: 16,
    		backgroundColor: "#fff"
  	},
  	chrome: {
    		height: "99.61%",
    		bottom: "0.39%",
    		backgroundColor: "#faf6ff",
    		left: "0%",
    		top: "0%",
    		alignItems: "center",
    		width: "100%",
    		right: "0%"
  	},
  	chromeMaterial: {
    		bottom: 0,
    		borderColor: "rgba(0, 0, 0, 0.3)",
    		borderTopWidth: 0.3,
    		borderStyle: "solid",
    		right: 0,
    		top: 0,
    		overflow: "hidden"
  	},
  	label: {
    		fontSize: 10,
    		left: "-1.04%",
    		top: "70%",
    		width: "102.04%"
  	},
  	symbol: {
    		color: "#999",
    		fontFamily: "ABeeZee-Italic",
    		fontStyle: "italic",
    		textAlign: "center",
    		position: "absolute"
  	},
  	tab1: {
    		height: 40,
    		flex: 1
  	},
  	tab3: {
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		height: 40,
    		flex: 1
  	},
  	label3: {
    		fontSize: 10,
    		left: "-1.04%",
    		top: "70%",
    		width: "102.04%"
  	},
  	symbol3: {
    		fontSize: 18,
    		left: "18.74%",
    		top: "2.5%",
    		width: "62.43%"
  	},
  	tabBarButtons: {
    		top: 7,
    		justifyContent: "space-between",
    		flexDirection: "row"
  	},
  	tabBarIphone: {
    		top: 863,
    		left: -2,
    		borderTopLeftRadius: 50,
    		borderTopRightRadius: 10000,
    		borderBottomRightRadius: 50,
    		borderBottomLeftRadius: 50,
    		width: 431,
    		height: 77,
    		position: "absolute"
  	},
  	folderIcon: {
    		left: 37
  	},
  	editIcon: {
    		left: 145
  	},
  	starIcon: {
    		left: 253
  	},
  	settingsIcon: {
    		left: 363
  	},
  	iphone1415ProMax4: {
    		backgroundColor: "#eaddff",
    		height: 932,
    		overflow: "hidden",
    		width: "100%",
    		flex: 1
  	}
});

export default IPhone1415ProMax;
