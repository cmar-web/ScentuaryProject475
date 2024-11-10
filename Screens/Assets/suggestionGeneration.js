import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const IPhone1415ProMax = () => {

  	return (
    		<View style={styles.iphone1415ProMax1}>
      			<View style={styles.statusBarIphone}>
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
      			<View style={[styles.topAppBar, styles.rowFlexBox]}>
        				<View style={styles.leadingIcon}>
          					<View style={styles.container}>
            						<View style={styles.stateLayer}>
              							<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
        				<Text style={styles.headline}>Suggestion Generation</Text>
        				<View style={styles.leadingIcon}>
          					<View style={styles.container}>
            						<View style={styles.stateLayer}>
              							<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
      			</View>
      			<Image style={styles.genericAvatarIcon} resizeMode="cover" source="Generic avatar.png" />
      			<Text style={styles.describeWhatYoud}>Describe what you’d like to smell like.....</Text>
      			<Image style={[styles.s1738574MainZoom1Icon, styles.mainIconPosition]} resizeMode="cover" source="s1738574-main-zoom 1.png" />
      			<View style={styles.s2101368MainZoom1} />
      			<Image style={[styles.s2101368MainZoom2Icon, styles.mainIconPosition]} resizeMode="cover" source="s2101368-main-zoom 2.png" />
      			<Image style={[styles.s2350031MainZoom1Icon, styles.mainIconPosition]} resizeMode="cover" source="s2350031-main-zoom 1.png" />
      			<View style={styles.search}>
        				<Text style={styles.value}>
          					<Text style={styles.the}>“The</Text>
          					<Text style={styles.text}>{` `}</Text>
          					<Text style={styles.the}>first</Text>
          					<Text style={styles.text}>{` `}</Text>
          					<Text style={styles.the}>snow</Text>
          					<Text style={styles.text}>{` `}</Text>
          					<Text style={styles.the}>fall”</Text>
        				</Text>
        				<View style={styles.x} />
      			</View>
      			<Image style={styles.searchIcon} resizeMode="cover" source="search.png" />
      			<View style={[styles.keyboardIphone, styles.homeIndicatorFlexBox]}>
        				<View style={[styles.background, styles.backgroundPosition]} />
        				<View style={styles.accessoryBar}>
          					<View style={[styles.autocorrection, styles.autocorrectionFlexBox]}>
            						<View style={styles.autocompleteSuggestion}>
              							<Text style={styles.the1} numberOfLines={1}>“The”</Text>
            						</View>
            						<View style={[styles.separatorClear, styles.autocorrectionFlexBox]}>
              							<View style={styles.separator} />
            						</View>
            						<View style={styles.autocompleteSuggestion1}>
              							<Text style={styles.the1} numberOfLines={1}>the</Text>
            						</View>
            						<View style={[styles.separatorClear, styles.autocorrectionFlexBox]}>
              							<View style={styles.separator2} />
            						</View>
            						<View style={styles.autocompleteSuggestion1}>
              							<Text style={styles.the1} numberOfLines={1}>to</Text>
            						</View>
          					</View>
        				</View>
        				<View style={styles.spacer} />
        				<View style={styles.keyboardLayouts}>
          					<View style={[styles.row4, styles.row4Position]}>
            						<View style={[styles.space, styles.spacePosition]}>
              							<View style={[styles.key, styles.keyShadowBox1]} />
              							<Text style={[styles.q, styles.qPosition]}>space</Text>
            						</View>
          					</View>
          					<View style={[styles.return, styles.returnLayout]}>
            						<View style={styles.keyShadowBox} />
            						<Text style={[styles.q1, styles.qPosition]}>return</Text>
          					</View>
          					<View style={[styles.keyboardSwitch, styles.returnLayout]}>
            						<View style={styles.keyShadowBox} />
            						<Text style={[styles.q1, styles.qPosition]}>ABC</Text>
          					</View>
          					<View style={styles.row3}>
            						<View style={styles.key3}>
              							<View style={[styles.key4, styles.keyShadowBox1]} />
              							<Text style={[styles.q2, styles.q2Position]}>z</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key6, styles.keyShadowBox1]} />
              							<Text style={[styles.q2, styles.q2Position]}>x</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key8, styles.keyShadowBox1]} />
              							<Text style={[styles.q2, styles.q2Position]}>c</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key10, styles.keyShadowBox1]} />
              							<Text style={[styles.q2, styles.q2Position]}>v</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key12, styles.keyShadowBox1]} />
              							<Text style={[styles.q6, styles.q2Position]}>b</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key14, styles.keyShadowBox1]} />
              							<Text style={[styles.q6, styles.q2Position]}>n</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key16, styles.keyShadowBox1]} />
              							<Text style={[styles.q8, styles.q2Position]}>m</Text>
            						</View>
          					</View>
          					<View style={[styles.deleteKey, styles.row1Position]}>
            						<View style={styles.keyShadowBox} />
            						<Text style={[styles.delete, styles.text3Position]}>􀆛</Text>
          					</View>
          					<View style={[styles.shiftKey, styles.keyLayout]}>
            						<View style={styles.keyShadowBox} />
            						<Text style={[styles.text3, styles.text3Position]}>􀆝</Text>
          					</View>
          					<View style={[styles.row2, styles.rowFlexBox]}>
            						<View style={styles.key3}>
              							<View style={[styles.key20, styles.keyShadowBox1]} />
              							<Text style={[styles.q2, styles.q2Position]}>a</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key22, styles.keyShadowBox1]} />
              							<Text style={[styles.q2, styles.q2Position]}>s</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key24, styles.keyShadowBox1]} />
              							<Text style={[styles.q6, styles.q2Position]}>d</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key26, styles.keyShadowBox1]} />
              							<Text style={[styles.q12, styles.q2Position]}>f</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key28, styles.keyShadowBox1]} />
              							<Text style={[styles.q6, styles.q2Position]}>g</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key30, styles.keyShadowBox1]} />
              							<Text style={[styles.q6, styles.q2Position]}>h</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key32, styles.keyShadowBox1]} />
              							<Text style={[styles.q15, styles.q2Position]}>j</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key34, styles.keyShadowBox1]} />
              							<Text style={[styles.q2, styles.q2Position]}>k</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key36, styles.keyShadowBox1]} />
              							<Text style={[styles.q15, styles.q2Position]}>l</Text>
            						</View>
          					</View>
          					<View style={[styles.row1, styles.row1Position]}>
            						<View style={styles.key3}>
              							<View style={[styles.key38, styles.keyShadowBox1]} />
              							<Text style={[styles.q6, styles.q2Position]}>q</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key40, styles.keyShadowBox1]} />
              							<Text style={[styles.q19, styles.q2Position]}>w</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key42, styles.keyShadowBox1]} />
              							<Text style={[styles.q6, styles.q2Position]}>e</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key44, styles.keyShadowBox1]} />
              							<Text style={[styles.q12, styles.q2Position]}>r</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key46, styles.keyShadowBox1]} />
              							<Text style={[styles.q12, styles.q2Position]}>t</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key48, styles.keyShadowBox1]} />
              							<Text style={[styles.q2, styles.q2Position]}>y</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key50, styles.keyShadowBox1]} />
              							<Text style={[styles.q6, styles.q2Position]}>u</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key52, styles.keyShadowBox1]} />
              							<Text style={[styles.q15, styles.q2Position]}>i</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key54, styles.keyShadowBox1]} />
              							<Text style={[styles.q6, styles.q2Position]}>o</Text>
            						</View>
            						<View style={styles.key3}>
              							<View style={[styles.key56, styles.keyShadowBox1]} />
              							<Text style={[styles.q6, styles.q2Position]}>p</Text>
            						</View>
          					</View>
        				</View>
        				<View style={[styles.emojiAndMic, styles.frameFlexBox]}>
          					<Image style={styles.emojiIcon} resizeMode="cover" source="Emoji.png" />
          					<Image style={styles.micIcon} resizeMode="cover" source="Mic.png" />
        				</View>
        				<View style={[styles.homeIndicator, styles.homeIndicatorFlexBox]}>
          					<View style={styles.homeIndicator1} />
        				</View>
      			</View>
      			<View style={styles.iphone1415ProMax1Child} />
      			<View style={styles.tabBarIphone}>
        				<View style={[styles.chromeMaterial, styles.row4Position]}>
          					<View style={[styles.chrome, styles.spacePosition]} />
        				</View>
        				<View style={[styles.tabBarButtons, styles.backgroundPosition]}>
          					<View style={styles.tab1}>
            						<Text style={[styles.label, styles.labelTypo]}>Browse</Text>
            						<Text style={[styles.symbol, styles.symbolPosition]} />
          					</View>
          					<View style={styles.tab1}>
            						<Text style={[styles.label1, styles.label1Typo]}>Randomizer</Text>
            						<Text style={[styles.symbol1, styles.label1Typo]} />
          					</View>
          					<View style={styles.tab3}>
            						<Text style={[styles.label1, styles.label1Typo]}>My Collection</Text>
            						<Text style={[styles.symbol1, styles.label1Typo]} />
          					</View>
          					<View style={styles.tab1}>
            						<Text style={[styles.label1, styles.label1Typo]}>Settings</Text>
            						<Text style={[styles.symbol1, styles.label1Typo]} />
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
  	frameFlexBox: {
    		justifyContent: "space-between",
    		flexDirection: "row"
  	},
  	capIconPosition: {
    		left: "50%",
    		position: "absolute"
  	},
  	rowFlexBox: {
    		gap: 6,
    		flexDirection: "row"
  	},
  	mainIconPosition: {
    		height: 144,
    		top: 335,
    		position: "absolute"
  	},
  	homeIndicatorFlexBox: {
    		justifyContent: "flex-end",
    		alignItems: "center"
  	},
  	backgroundPosition: {
    		right: 0,
    		left: 0
  	},
  	autocorrectionFlexBox: {
    		paddingVertical: 0,
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	row4Position: {
    		bottom: 0,
    		position: "absolute"
  	},
  	spacePosition: {
    		right: "0%",
    		left: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	keyShadowBox1: {
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.35)",
    		shadowOpacity: 1,
    		bottom: 0,
    		borderRadius: 5,
    		right: 0,
    		backgroundColor: "#fff",
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	qPosition: {
    		lineHeight: 21,
    		marginTop: -21,
    		height: 42,
    		display: "flex",
    		letterSpacing: 0,
    		top: "50%",
    		fontSize: 16,
    		left: 0,
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "SF Pro",
    		justifyContent: "center",
    		alignItems: "center",
    		position: "absolute"
  	},
  	returnLayout: {
    		width: "23.42%",
    		height: 42,
    		bottom: 0,
    		borderRadius: 5,
    		position: "absolute"
  	},
  	q2Position: {
    		fontSize: 25,
    		marginTop: -17,
    		top: "50%",
    		lineHeight: 28,
    		left: "50%",
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "SF Pro",
    		position: "absolute"
  	},
  	row1Position: {
    		right: "0.77%",
    		position: "absolute"
  	},
  	text3Position: {
    		marginTop: -14,
    		top: "50%",
    		fontSize: 20,
    		lineHeight: 28,
    		left: "50%",
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "SF Pro",
    		position: "absolute"
  	},
  	keyLayout: {
    		width: "11.19%",
    		bottom: 54,
    		height: 42,
    		borderRadius: 5
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
  	iconPosition: {
    		top: 859,
    		height: 24,
    		width: 24,
    		position: "absolute"
  	},
  	time1: {
    		fontWeight: "600",
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "SF Pro",
    		lineHeight: 22,
    		fontSize: 17
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
    		height: 12,
    		width: 19
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
    		borderStyle: "solid",
    		left: "50%",
    		top: "0%",
    		position: "absolute"
  	},
  	capIcon: {
    		height: "31.54%",
    		marginLeft: 12.35,
    		top: "36.78%",
    		bottom: "31.68%",
    		maxHeight: "100%",
    		opacity: 0.4,
    		width: 1
  	},
  	capacity: {
    		height: "69.23%",
    		marginLeft: -11.65,
    		top: "15.38%",
    		bottom: "15.38%",
    		borderRadius: 3,
    		width: 21,
    		backgroundColor: "#000"
  	},
  	battery: {
    		height: 13,
    		width: 27
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
    		left: 2,
    		width: 422,
    		paddingTop: 21,
    		height: 53,
    		top: 0,
    		position: "absolute"
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
    		borderRadius: 100,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		overflow: "hidden"
  	},
  	leadingIcon: {
    		width: 48,
    		height: 48,
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	headline: {
    		fontSize: 22,
    		fontFamily: "Roboto-Regular",
    		color: "#676767",
    		lineHeight: 28,
    		textAlign: "center",
    		flex: 1
  	},
  	topAppBar: {
    		top: 64,
    		borderRadius: 10,
    		backgroundColor: "#d0bcff",
    		height: 64,
    		paddingHorizontal: 4,
    		paddingVertical: 8,
    		width: 430,
    		position: "absolute",
    		left: 0,
    		alignItems: "center"
  	},
  	genericAvatarIcon: {
    		top: 76,
    		left: 382,
    		width: 40,
    		height: 40,
    		borderRadius: 100,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	describeWhatYoud: {
    		top: 187,
    		left: 31,
    		fontFamily: "DMSans-Regular",
    		textAlign: "left",
    		fontSize: 20,
    		color: "#676767",
    		position: "absolute"
  	},
  	s1738574MainZoom1Icon: {
    		left: 14,
    		borderRadius: 51,
    		width: 125
  	},
  	s2101368MainZoom1: {
    		top: 322,
    		left: 174,
    		borderRadius: 63,
    		width: 147,
    		height: 170,
    		position: "absolute"
  	},
  	s2101368MainZoom2Icon: {
    		left: 150,
    		borderRadius: 67,
    		width: 123
  	},
  	s2350031MainZoom1Icon: {
    		left: 284,
    		borderRadius: 60,
    		width: 132
  	},
  	the: {
    		color: "rgba(20, 18, 24, 0.16)"
  	},
  	text: {
    		color: "#1e1e1e"
  	},
  	value: {
    		lineHeight: 16,
    		fontFamily: "Inter-Regular",
    		fontSize: 16,
    		textAlign: "left",
    		flex: 1
  	},
  	x: {
    		width: 16,
    		height: 16,
    		overflow: "hidden"
  	},
  	search: {
    		top: 244,
    		left: 10,
    		borderRadius: 9999,
    		borderColor: "#d9d9d9",
    		width: 410,
    		paddingHorizontal: 16,
    		paddingVertical: 12,
    		gap: 8,
    		backgroundColor: "#fff",
    		borderWidth: 1,
    		borderStyle: "solid",
    		alignItems: "center",
    		flexDirection: "row",
    		height: 53,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	searchIcon: {
    		top: 251,
    		left: 363,
    		width: 44,
    		height: 38,
    		position: "absolute"
  	},
  	background: {
    		marginTop: -168,
    		backgroundColor: "rgba(85, 85, 85, 0.9)",
    		height: 336,
    		zIndex: 0,
    		top: "50%",
    		right: 0,
    		alignItems: "center",
    		position: "absolute"
  	},
  	the1: {
    		width: 129,
    		display: "flex",
    		letterSpacing: 0,
    		left: "0%",
    		height: 39,
    		top: "0%",
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "SF Pro",
    		lineHeight: 22,
    		fontSize: 17,
    		justifyContent: "center",
    		alignItems: "center",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	autocompleteSuggestion: {
    		backgroundColor: "#ebedf0",
    		borderRadius: 5,
    		alignSelf: "stretch",
    		flex: 1
  	},
  	separator: {
    		opacity: 0,
    		backgroundColor: "#000",
    		width: 1,
    		alignSelf: "stretch"
  	},
  	separatorClear: {
    		height: 25,
    		paddingHorizontal: 2,
    		justifyContent: "center"
  	},
  	autocompleteSuggestion1: {
    		borderRadius: 5,
    		alignSelf: "stretch",
    		flex: 1
  	},
  	separator2: {
    		opacity: 0.1,
    		backgroundColor: "#000",
    		width: 1,
    		alignSelf: "stretch"
  	},
  	autocorrection: {
    		paddingHorizontal: 1,
    		gap: 2,
    		height: 39,
    		paddingVertical: 0,
    		flex: 1
  	},
  	accessoryBar: {
    		paddingHorizontal: 0,
    		paddingVertical: 2,
    		zIndex: 1,
    		flexDirection: "row",
    		alignSelf: "stretch",
    		overflow: "hidden"
  	},
  	spacer: {
    		opacity: 0.6,
    		zIndex: 2,
    		height: 5,
    		alignSelf: "stretch"
  	},
  	key: {
    		shadowOpacity: 1
  	},
  	q: {
    		width: 195
  	},
  	space: {
    		height: 42,
    		borderRadius: 5,
    		right: "0%",
    		top: 0
  	},
  	row4: {
    		width: "48.6%",
    		right: "25.7%",
    		left: "25.7%",
    		height: 42
  	},
  	keyShadowBox: {
    		backgroundColor: "#8f8f8f",
    		shadowOpacity: 1,
    		elevation: 0,
    		shadowRadius: 0,
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.35)",
    		bottom: 0,
    		borderRadius: 5,
    		right: 0,
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	q1: {
    		width: 95
  	},
  	return: {
    		right: "0.75%",
    		left: "75.83%"
  	},
  	keyboardSwitch: {
    		right: "75.82%",
    		left: "0.76%"
  	},
  	key4: {
    		shadowOpacity: 1
  	},
  	q2: {
    		marginLeft: 3.55
  	},
  	key3: {
    		height: 42,
    		borderRadius: 5,
    		flex: 1
  	},
  	key6: {
    		shadowOpacity: 1
  	},
  	key8: {
    		shadowOpacity: 1
  	},
  	key10: {
    		shadowOpacity: 1
  	},
  	key12: {
    		shadowOpacity: 1
  	},
  	q6: {
    		marginLeft: 2.55
  	},
  	key14: {
    		shadowOpacity: 1
  	},
  	key16: {
    		shadowOpacity: 1
  	},
  	q8: {
    		marginLeft: -0.45
  	},
  	row3: {
    		width: "68.44%",
    		right: "15.78%",
    		left: "15.78%",
    		bottom: 54,
    		gap: 6,
    		flexDirection: "row",
    		position: "absolute"
  	},
  	delete: {
    		marginLeft: -4.05
  	},
  	deleteKey: {
    		left: "88.04%",
    		width: "11.19%",
    		bottom: 54,
    		height: 42,
    		borderRadius: 5
  	},
  	text3: {
    		marginLeft: -3.05
  	},
  	shiftKey: {
    		right: "88.05%",
    		left: "0.76%",
    		position: "absolute"
  	},
  	key20: {
    		shadowOpacity: 1
  	},
  	key22: {
    		shadowOpacity: 1
  	},
  	key24: {
    		shadowOpacity: 1
  	},
  	key26: {
    		shadowOpacity: 1
  	},
  	q12: {
    		marginLeft: 5.55
  	},
  	key28: {
    		shadowOpacity: 1
  	},
  	key30: {
    		shadowOpacity: 1
  	},
  	key32: {
    		shadowOpacity: 1
  	},
  	q15: {
    		marginLeft: 6.55
  	},
  	key34: {
    		shadowOpacity: 1
  	},
  	key36: {
    		shadowOpacity: 1
  	},
  	row2: {
    		width: "88.3%",
    		right: "5.85%",
    		bottom: 108,
    		left: "5.85%",
    		position: "absolute"
  	},
  	key38: {
    		shadowOpacity: 1
  	},
  	key40: {
    		shadowOpacity: 1
  	},
  	q19: {
    		marginLeft: 0.55
  	},
  	key42: {
    		shadowOpacity: 1
  	},
  	key44: {
    		shadowOpacity: 1
  	},
  	key46: {
    		shadowOpacity: 1
  	},
  	key48: {
    		shadowOpacity: 1
  	},
  	key50: {
    		shadowOpacity: 1
  	},
  	key52: {
    		shadowOpacity: 1
  	},
  	key54: {
    		shadowOpacity: 1
  	},
  	key56: {
    		shadowOpacity: 1
  	},
  	row1: {
    		width: "98.47%",
    		bottom: 162,
    		left: "0.76%",
    		gap: 6,
    		flexDirection: "row"
  	},
  	keyboardLayouts: {
    		height: 204,
    		zIndex: 3,
    		alignSelf: "stretch"
  	},
  	emojiIcon: {
    		height: 27,
    		width: 27
  	},
  	micIcon: {
    		height: 28,
    		width: 19
  	},
  	emojiAndMic: {
    		height: 47,
    		paddingLeft: 20,
    		paddingTop: 24,
    		paddingRight: 24,
    		zIndex: 4,
    		alignSelf: "stretch"
  	},
  	homeIndicator1: {
    		width: 144,
    		transform: [
      			{
        				rotate: "180deg"
      			}
    		],
    		height: 5,
    		borderRadius: 100,
    		backgroundColor: "#000"
  	},
  	homeIndicator: {
    		height: 34,
    		paddingHorizontal: 129,
    		paddingBottom: 8,
    		zIndex: 5,
    		alignSelf: "stretch",
    		paddingTop: 21
  	},
  	keyboardIphone: {
    		top: 510,
    		left: 1,
    		height: 354,
    		paddingTop: 3,
    		width: 430,
    		position: "absolute"
  	},
  	iphone1415ProMax1Child: {
    		height: "11.7%",
    		width: "100.47%",
    		top: "90.67%",
    		right: "-0.47%",
    		bottom: "-2.36%",
    		borderRadius: 16,
    		left: "0%",
    		backgroundColor: "#fff",
    		position: "absolute"
  	},
  	chrome: {
    		height: "99.61%",
    		bottom: "0.39%",
    		backgroundColor: "#faf6ff",
    		top: "0%",
    		right: "0%",
    		alignItems: "center"
  	},
  	chromeMaterial: {
    		borderColor: "#faf6ff",
    		borderTopWidth: 0.3,
    		right: 0,
    		left: 0,
    		borderStyle: "solid",
    		bottom: 0,
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
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		height: 40,
    		flex: 1
  	},
  	tabBarButtons: {
    		top: 7,
    		justifyContent: "space-between",
    		flexDirection: "row",
    		position: "absolute"
  	},
  	tabBarIphone: {
    		top: 856,
    		borderTopLeftRadius: 50,
    		borderTopRightRadius: 10000,
    		borderBottomRightRadius: 50,
    		borderBottomLeftRadius: 50,
    		width: 431,
    		height: 77,
    		left: 0,
    		position: "absolute"
  	},
  	folderIcon: {
    		left: 39
  	},
  	editIcon: {
    		left: 147
  	},
  	starIcon: {
    		left: 255
  	},
  	settingsIcon: {
    		left: 365
  	},
  	iphone1415ProMax1: {
    		backgroundColor: "#eaddff",
    		height: 932,
    		overflow: "hidden",
    		width: "100%",
    		flex: 1
  	}
});

export default IPhone1415ProMax;
