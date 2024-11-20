import * as React from "react";
import {Image, StyleSheet, View, Text} from "react-native";

const BrowseScreen = () => {

  	return (
    		<View style={styles.iphone1415ProMax2}>
      			<View style={[styles.navigationBarIpadRegular, styles.barSpaceBlock]}>
        				<View style={styles.windowGrabber}>
          					<Image style={styles.dotIcon} resizeMode="cover" source="Dot.png" />
          					<Image style={styles.dotIcon} resizeMode="cover" source="Dot.png" />
          					<Image style={styles.dotIcon} resizeMode="cover" source="Dot.png" />
        				</View>
        				<View style={styles.titleAndControls} />
        				<View style={styles.searchField}>
          					<View style={[styles.searchField1, styles.topAppBarFlexBox]}>
            						<Text style={styles.searchGlyph}>?</Text>
            						<Text style={styles.placeholderLabel} numberOfLines={1}>Search</Text>
            						{/* <Text style={styles.dictation}>􀊱</Text> */}
          					</View>
        				</View>
      			</View>
      			{/* <View style={styles.statusBarIphone}>
        				<View style={styles.frame}>
          					<View style={[styles.time, styles.timeFlexBox]}>
            						<Text style={styles.time1}>9:41</Text>
          					</View>
          					<View style={[styles.dynamicIslandSpacer, styles.levelsFlexBox]} />
          					<View style={[styles.levels, styles.levelsFlexBox]}>
            						<Image style={styles.cellularConnectionIcon} resizeMode="cover" source="Cellular Connection.png" />
            						<Image style={styles.wifiIcon} resizeMode="cover" source="Wifi.png" />
            						<View style={styles.battery}>
              							<View style={[styles.border, styles.borderBorder]} />
              							<Image style={styles.capIcon} resizeMode="cover" source="Cap.png" />
              							<View style={styles.capacity} />
            						</View>
          					</View>
        				</View>
      			</View> */}
      			<View style={[styles.horizontalCard3, styles.horizontalCardLayout]}>
        				<View style={[styles.content, styles.contentLayout]}>
          					<View style={[styles.header, styles.headerPosition]}>
            						<View style={styles.content1}>
              							<View style={[styles.monogram, styles.monogramLayout]}>
                								<Image style={[styles.backgroundIcon, styles.backgroundPosition]} resizeMode="cover" source={require("../res/51dp6BGML8L._AC_UF1000,1000_QL80_.png")} />
                								<Text style={[styles.initial, styles.initialTypo]}>A</Text>
              							</View>
              							<View style={styles.text}>
                								<Text style={styles.header1}>Fragrance1</Text>
                								<Text style={[styles.subhead, styles.subheadTypo]}>fragrance house</Text>
              							</View>
            						</View>
            						<Image style={styles.mediaIcon} resizeMode="cover" source={require("../res/71yMkOF21ZL._AC_UF1000,1000_QL80_.png")} />
          					</View>
        				</View>
        				<View style={[styles.background, styles.backgroundPosition]}>
          					<View style={[styles.stateLayer, styles.backgroundPosition]} />
        				</View>
      			</View>
				  <View style={[styles.horizontalCard2, styles.horizontalCardLayout]}>
        				<View style={[styles.content, styles.contentLayout]}>
          					<View style={[styles.header, styles.headerPosition]}>
            						<View style={styles.content1}>
              							<View style={[styles.monogram, styles.monogramLayout]}>
                								<Image style={[styles.backgroundIcon, styles.backgroundPosition]} resizeMode="cover" source="Background.png" />
                								<Text style={[styles.initial, styles.initialTypo]}>A</Text>
              							</View>
              							<View style={styles.text}>
                								<Text style={styles.header1}>Fragrance2</Text>
                								<Text style={[styles.subhead, styles.subheadTypo]}>fragrance house</Text>
              							</View>
            						</View>
            						<Image style={styles.mediaIcon} resizeMode="cover" source={require("../res/you.png")} />
          					</View>
        				</View>
        				<View style={[styles.background, styles.backgroundPosition]}>
          					<View style={[styles.stateLayer, styles.backgroundPosition]} />
        				</View>
      			</View>
				<View style={[styles.horizontalCard4, styles.horizontalCardLayout]}>
        				<View style={[styles.content, styles.contentLayout]}>
          					<View style={[styles.header, styles.headerPosition]}>
            						<View style={styles.content1}>
              							<View style={[styles.monogram, styles.monogramLayout]}>
                								<Image style={[styles.backgroundIcon, styles.backgroundPosition]} resizeMode="cover" source="Background.png" />
                								<Text style={[styles.initial, styles.initialTypo]}>A</Text>
              							</View>
              							<View style={styles.text}>
                								<Text style={styles.header1}>Fragrance3</Text>
                								<Text style={[styles.subhead, styles.subheadTypo]}>fragrance house</Text>
              							</View>
            						</View>
            						<Image style={styles.mediaIcon} resizeMode="cover" source={require("../res/51dp6BGML8L._AC_UF1000,1000_QL80_.png")} />
          					</View>
        				</View>
        				<View style={[styles.background, styles.backgroundPosition]}>
          					<View style={[styles.stateLayer, styles.backgroundPosition]} />
        				</View>
      			</View>
      			<View style={[styles.horizontalCard5, styles.horizontalCardLayout]}>
        				<View style={[styles.content, styles.contentLayout]}>
          					<View style={[styles.header, styles.headerPosition]}>
            						<View style={styles.content1}>
              							<View style={[styles.monogram, styles.monogramLayout]}>
                								<Image style={[styles.backgroundIcon, styles.backgroundPosition]} resizeMode="cover" source="Background.png" />
                								<Text style={[styles.initial, styles.initialTypo]}>A</Text>
              							</View>
              							<View style={styles.text}>
                								<Text style={styles.header1}>Fragrance4</Text>
                								<Text style={[styles.subhead, styles.subheadTypo]}>fragrance house</Text>
              							</View>
            						</View>
            						<Image style={styles.mediaIcon} resizeMode="cover" source={require("../res/81lP+XGqQOL._AC_UF350,350_QL80_.png")} />
          					</View>
        				</View>
        				<View style={[styles.background, styles.backgroundPosition]}>
          					<View style={[styles.stateLayer, styles.backgroundPosition]} />
        				</View>
      			</View>
				  <View style={[styles.horizontalCard, styles.horizontalCardLayout]}>
        				<View style={[styles.content, styles.contentLayout]}>
          					<View style={[styles.header, styles.headerPosition]}>
            						<View style={styles.content1}>
              							<View style={[styles.monogram, styles.monogramLayout]}>
                								<Image style={[styles.backgroundIcon, styles.backgroundPosition]} resizeMode="cover" source="Background.png" />
                								<Text style={[styles.initial, styles.initialTypo]}>A</Text>
              							</View>
              							<View style={styles.text}>
                								<Text style={styles.header1}>Fragrance5</Text>
                								<Text style={[styles.subhead, styles.subheadTypo]}>fragrance house</Text>
              							</View>
            						</View>
            						<Image style={styles.mediaIcon} resizeMode="cover" source={require("../res/s2362838-main-zoom.png")} />
          					</View>
        				</View>
        				<View style={[styles.background, styles.backgroundPosition]}>
          					<View style={[styles.stateLayer, styles.backgroundPosition]} />
        				</View>
      			</View>
      			<View style={[styles.horizontalCard1, styles.horizontalCardLayout]}>
        				<View style={[styles.content, styles.contentLayout]}>
          					<View style={[styles.header, styles.headerPosition]}>
            						<View style={styles.content1}>
              							<View style={[styles.monogram, styles.monogramLayout]}>
                								<Image style={[styles.backgroundIcon, styles.backgroundPosition]} resizeMode="cover" source="Background.png" />
                								<Text style={[styles.initial, styles.initialTypo]}>A</Text>
              							</View>
              							<View style={styles.text}>
                								<Text style={styles.header1}>Fragrance6</Text>
                								<Text style={[styles.subhead, styles.subheadTypo]}>fragrance house</Text>
              							</View>
            						</View>
            						<Image style={styles.mediaIcon} resizeMode="cover" source={require("../res/4_Snif_TartDeco_Fragrance_Product_2048x.png")} />
          					</View>
        				</View>
        				<View style={[styles.background, styles.backgroundPosition]}>
          					<View style={[styles.stateLayer, styles.backgroundPosition]} />
        				</View>
      			</View>
      			<View style={styles.iphone1415ProMax2Child} />
      			<View style={styles.tabBarIphone}>
        				<View style={[styles.chromeMaterial, styles.headerPosition]}>
          					<View style={[styles.chrome, styles.backgroundPosition]} />
        				</View>
        				<View style={[styles.tabBarButtons, styles.headerPosition]}>
          					<View style={styles.tab1}>
            						<Text style={[styles.label, styles.labelTypo]}>Browse</Text>
            						<Text style={[styles.symbol, styles.symbolPosition]} />
          					</View>
          					<View style={styles.tab1}>
            						<Text style={[styles.label1, styles.label1Typo]}>Randomizer</Text>
            						<Text style={[styles.symbol1, styles.label1Typo]} />
          					</View>
          					<View style={[styles.tab3, styles.tab3ShadowBox]}>
            						<Text style={[styles.label1, styles.label1Typo]}>My Collection</Text>
            						<Text style={[styles.symbol1, styles.label1Typo]} />
          					</View>
          					<View style={styles.tab1}>
            						<Text style={[styles.label1, styles.label1Typo]}>Settings</Text>
            						<Text style={[styles.symbol1, styles.label1Typo]} />
          					</View>
        				</View>
      			</View>
      			<Image style={[styles.folderIcon, styles.iconLayout]} resizeMode="cover" source={require("../res/folder.png")} />
      			<Image style={[styles.editIcon, styles.iconLayout]} resizeMode="cover" source={require("../res/edit.png")} />
      			<Image style={[styles.starIcon, styles.iconLayout]} resizeMode="cover" source={require("../res/star.png")} />
      			<Image style={[styles.settingsIcon, styles.iconLayout]} resizeMode="cover" source={require("../res/settings.png")} />
      			<Image style={[styles.b015ebcd2eac9e80515cb602cd611fIcon, styles.iconPosition]} resizeMode="cover" source={require("../res/b015ebcd2eac9e80515cb602cd611f72.png")} />
      			<Image style={[styles.o198Icon, styles.iconPosition]} resizeMode="cover" source={require("../res/o.198.png")} />
      			<Image style={[styles.kilianparisLogoIcon, styles.iconPosition]} resizeMode="cover" source={require("../res/kilianparis_logo.png")} />
      			<Image style={[styles.imagesIcon, styles.iconPosition]} resizeMode="cover" source={require("../res/images.png")} />
      			<Image style={[styles.pngTransparentGiorgioArmaniIcon, styles.iconPosition]} resizeMode="cover" source={require("../res/png-transparent-giorgio-armani-italian-fashion-haute-couture-axe-logo-miscellaneous-text-cosmetics-thumbnail.png")} />
      			<Image style={[styles.nauticaLogoGraphics4924134Icon, styles.iconPosition]} resizeMode="cover" source={require("../res/Nautica-Logo-Graphics-4924134-1.png")} />
      			<View style={[styles.navigationButton, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source={require("../res/star.png")} />
        				<Text style={styles.label4} />
      			</View>
      			<View style={[styles.navigationButton1, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source={require("../res/star.png")} />
        				<Text style={styles.label4} />
      			</View>
      			<View style={[styles.navigationButton2, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source={require("../res/star.png")} />
        				<Text style={styles.label4} />
      			</View>
      			<View style={[styles.navigationButton3, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source={require("../res/star.png")} />
        				<Text style={styles.label4} />
      			</View>
      			<View style={[styles.navigationButton4, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source={require("../res/star.png")} />
        				<Text style={styles.label4} />
      			</View>
      			<View style={[styles.navigationButton5, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source={require("../res/star.png")} />
        				<Text style={styles.label4} /> 
      			</View>
      			<View style={[styles.topAppBar, styles.topAppBarFlexBox]}>
        				<View style={[styles.leadingIcon, styles.levelsFlexBox]}>
          					<View style={[styles.container, styles.buttonLayout]}>
            						<View style={styles.stateLayer6}>
              							<Image style={styles.iconLayout} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
        				<Text style={[styles.headline, styles.subheadTypo]}>Browse</Text>
        				<View style={[styles.leadingIcon, styles.levelsFlexBox]}>
          					<View style={[styles.container, styles.buttonLayout]}>
            						<View style={styles.stateLayer6}>
              							<Image style={styles.iconLayout} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
      			</View>
      			<Image style={[styles.genericAvatarIcon, styles.buttonLayout]} resizeMode="cover" source={require("../res/Generic avatar.png")} />
      			<View style={[styles.button, styles.buttonLayout]}>
        				<View style={[styles.stateLayer8, styles.timeFlexBox]}>
          					<Text style={[styles.labelText, styles.subheadLayout]}>Give me suggestions</Text>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	barSpaceBlock: {
    		paddingHorizontal: 4,
    		width: '100%',
    		position: "absolute"
  	},
  	topAppBarFlexBox: {
    		borderRadius: 10,
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	timeFlexBox: {
    		paddingLeft: '1%',
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
    		height: '9.7%',
    		width: '89%',
    		left: '5%',
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
    		width: '8%',
    		height: '4%'
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
    		height: '2.4%',
    		width: '5%'
  	},
  	iconPosition: {
    		left: 40,
    		height: '4%',
    		width: '5%',
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
    		width: '1%',
    		height: '0.5%'
  	},
  	windowGrabber: {
    		padding: 10,
    		flexDirection: "row",
    		gap: 3
  	},
  	titleAndControls: {
    		height: '4.4%',
    		alignSelf: "stretch"
  	},
  	searchGlyph: {
    		width: '5%',
    		textAlign: "left",
    		color: "rgba(60, 60, 67, 0.6)",
    		fontFamily: "SF Pro",
    		lineHeight: 22,
    		fontSize: 17
  	},
  	placeholderLabel: {
    		height: '2.2%',
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
    		paddingHorizontal: '1.4%',
    		paddingVertical: '0.07%',
    		alignSelf: "stretch"
  	},
  	searchField: {
    		paddingHorizontal: '1.3%',
    		paddingTop: '5%',
    		paddingBottom: 15,
    		alignSelf: "stretch"
  	},
  	navigationBarIpadRegular: {
    		top: '5.3%',
    		left: 5,
    		height: '11.7%',
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
    		width: '25%',
    		height: '1%'
  	},
  	cellularConnectionIcon: {
    		width: '4%',
    		height: '1.2%'
  	},
  	wifiIcon: {
    		width: '4%',
    		height: '1.2%'
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
    		width: '5%'
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
    		width: '4%',
    		left: "50%",
    		position: "absolute"
  	},
  	battery: {
    		width: '5%',
    		height: '1.3%'
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
    		width: '98.13%',
    		height: '5.3%',
    		paddingTop: 21,
    		top: 0,
    		position: "absolute"
  	},
  	backgroundIcon: {
    		maxWidth: "10%",
    		maxHeight: "10%",
    		bottom: "25%",
    		height: "10%",
    		right: "25%",
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
    		height: '4%',
    		width: '8%',
    		left: "50%",
    		justifyContent: "center",
    		letterSpacing: 0,
    		alignItems: "center",
    		position: "absolute"
  	},
  	monogram: {
    		height: '4%',
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
    		width: '16%',
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
    		top: '60%'
  	},
  	horizontalCard1: {
    		top: '70%'
  	},
  	horizontalCard2: {
    		top: '29%'
  	},
  	horizontalCard3: {
    		top: '18.77%'
  	},
  	horizontalCard4: {
    		top: '39%'
  	},
  	horizontalCard5: {
    		top: '50%'
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
    		left: "0%",
    		top: "70%",
    		width: "100%"
  	},
  	symbol: {
    		color: "#007aff",
    		fontFamily: "ABeeZee-Italic",
    		fontStyle: "italic",
    		textAlign: "center",
    		position: "absolute"
  	},
  	tab1: {
    		height: '4%',
    		flex: 1
  	},
  	label1: {
    		fontSize: 10,
    		left: "-1.04%",
    		top: "70%",
    		width: "100%"
  	},
  	symbol1: {
    		fontSize: 18,
    		left: "18.74%",
    		top: "2.5%",
    		width: "62.43%"
  	},
  	tab3: {
    		height: '4%',
    		flex: 1
  	},
  	tabBarButtons: {
    		top: '0%',
    		left: 0,
    		right: 0,
    		justifyContent: "space-between",
    		flexDirection: "row"
  	},
  	tabBarIphone: {
    		top: '91.7%',
    		left: 0,
    		borderTopLeftRadius: 50,
    		borderTopRightRadius: 10000,
    		borderBottomRightRadius: 50,
    		borderBottomLeftRadius: 50,
    		width: '100%',
    		height: '7.7%',
    		position: "absolute"
  	},
  	folderIcon: {
    		left: '9%',
    		top: '94.8%',
    		width: '5%',
    		position: "absolute"
  	},
  	editIcon: {
    		left: '35%',
    		top: '94.8%',
    		width: '5%',
    		position: "absolute"
  	},
  	starIcon: {
    		left: '61%',
    		top: '94.8%',
    		width: '5%',
    		position: "absolute"
  	},
  	settingsIcon: {
    		left: '85%',
    		top: '94.8%',
    		width: '5%',
    		position: "absolute"
  	},
  	b015ebcd2eac9e80515cb602cd611fIcon: {
    		top: '21.5%'
  	},
  	o198Icon: {
    		top: '53%'
  	},
  	kilianparisLogoIcon: {
    		top: '63%'
  	},
  	imagesIcon: {
    		top: '73%'
  	},
  	pngTransparentGiorgioArmaniIcon: {
    		top: '32%'
  	},
  	nauticaLogoGraphics4924134Icon: {
    		top: '42%'
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
    		top: '17.5%'
  	},
  	navigationButton1: {
    		top: '36.9%'
  	},
  	navigationButton2: {
    		top: '46.7%'
  	},
  	navigationButton3: {
    		top: '56.3%'
  	},
  	navigationButton4: {
    		top: '27.2%'
  	},
  	navigationButton5: {
    		top: '66.1%'
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
    		width: '10%',
    		height: '4.8%'
  	},
  	headline: {
    		fontSize: 22,
    		lineHeight: 28,
    		textAlign: "center",
    		flex: 1
  	},
  	topAppBar: {
    		top: '5.2%',
    		left: 1,
    		backgroundColor: "#d0bcff",
    		height: '6.4%',
    		paddingVertical: 8,
    		gap: 6,
    		paddingHorizontal: 4,
    		width: '100%',
    		position: "absolute"
  	},
  	genericAvatarIcon: {
    		top: '6.4%',
    		left: '90%',
    		height: '4%',
    		width: '8%',
    		position: "absolute"
  	},
  	labelText: {
    		color: "#fff",
    		textShadowColor: "rgba(0, 0, 0, 0.25)",
    		textShadowOffset: {
      			width: 0,
      			height: '0.4%'
    		},
    		textShadowRadius: 4,
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		textAlign: "center"
  	},
  	stateLayer8: {
    		paddingTop: '1%',
    		paddingRight: '1%',
    		paddingBottom: '1%',
    		alignSelf: "stretch"
  	},
  	button: {
    		top: '77.7%',
    		left: 96,
    		backgroundColor: "#625b71",
    		width: '46%',
    		height: '5%',
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
    		height: '100%',
    		overflow: "hidden",
    		width: "100%",
    		flex: 1
  	}
});

export default BrowseScreen;
