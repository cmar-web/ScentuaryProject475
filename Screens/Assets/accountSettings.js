import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const IPhone1415ProMax = () => {

  	return (
    		<View style={styles.iphone1415ProMax4}>
      			<View style={styles.statusBarIphone}>
        				<View style={[styles.frame, styles.frameFlexBox]}>
          					<View style={[styles.time, styles.timeFlexBox]}>
            						<Text style={styles.time1}>9:41</Text>
          					</View>
          					<View style={styles.dynamicIslandSpacer} />
          					<View style={[styles.levels, styles.levelsFlexBox]}>
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
      			<View style={[styles.topAppBar, styles.levelsFlexBox]}>
        				<View style={styles.leadingIcon}>
          					<View style={[styles.container, styles.containerLayout]}>
            						<View style={[styles.stateLayer, styles.levelsFlexBox]}>
              							<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
        				<Text style={styles.headline}>Account Settings</Text>
        				<View style={styles.leadingIcon}>
          					<View style={[styles.container, styles.containerLayout]}>
            						<View style={[styles.stateLayer, styles.levelsFlexBox]}>
              							<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
      			</View>
      			<Image style={[styles.genericAvatarIcon, styles.containerLayout]} resizeMode="cover" source="Generic avatar.png" />
      			<View style={styles.iphone1415ProMax4Child} />
      			<View style={styles.tabBarIphone}>
        				<View style={[styles.chromeMaterial, styles.tabBarButtonsPosition]}>
          					<View style={styles.chrome} />
        				</View>
        				<View style={[styles.tabBarButtons, styles.tabBarButtonsPosition]}>
          					<View style={styles.tab1}>
            						<Text style={[styles.label, styles.labelTypo]}>Browse</Text>
            						<Text style={[styles.symbol, styles.symbolTypo]} />
          					</View>
          					<View style={styles.tab1}>
            						<Text style={[styles.label, styles.labelTypo]}>Randomizer</Text>
            						<Text style={[styles.symbol, styles.symbolTypo]} />
          					</View>
          					<View style={styles.tab3}>
            						<Text style={[styles.label, styles.labelTypo]}>My Collection</Text>
            						<Text style={[styles.symbol, styles.symbolTypo]} />
          					</View>
          					<View style={styles.tab1}>
            						<Text style={[styles.label3, styles.labelTypo]}>Settings</Text>
            						<Text style={[styles.symbol3, styles.symbolTypo]} />
          					</View>
        				</View>
      			</View>
      			<Image style={[styles.folderIcon, styles.iconPosition]} resizeMode="cover" source="folder.png" />
      			<Image style={[styles.editIcon, styles.iconPosition]} resizeMode="cover" source="edit.png" />
      			<Image style={[styles.starIcon, styles.iconPosition]} resizeMode="cover" source="star.png" />
      			<Image style={[styles.settingsIcon, styles.iconPosition]} resizeMode="cover" source="settings.png" />
      			<Text style={[styles.accountInformation, styles.titleFlexBox]}>Account Information:</Text>
      			<Text style={[styles.customization, styles.titleFlexBox]}>
        				<Text style={styles.customization1Typo}>Customization</Text>
        				<Text style={styles.text}>:</Text>
      			</Text>
      			<View style={[styles.row, styles.rowBorder1]}>
        				<View style={[styles.contents, styles.contentsLayout]}>
          					<View style={[styles.titleAndTrailingAccessories, styles.levelsFlexBox]}>
            						<View style={[styles.titleAndDetail, styles.contentsLayout]}>
              							<Text style={[styles.title, styles.titleLayout]} numberOfLines={1}>Notifications</Text>
            						</View>
            						<View style={[styles.accessoriesAndGrabber, styles.contentsFlexBox]}>
              							<View style={[styles.contentsTrailing, styles.contentsFlexBox]}>
                								<View style={styles.drillIn}>
                  									<Text style={[styles.drillIn1, styles.info1Position]}>􀆊</Text>
                								</View>
              							</View>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.row1, styles.rowBorder1]}>
        				<View style={[styles.contents, styles.contentsLayout]}>
          					<View style={[styles.titleAndTrailingAccessories, styles.levelsFlexBox]}>
            						<View style={[styles.titleAndDetail, styles.contentsLayout]}>
              							<Text style={[styles.title, styles.titleLayout]} numberOfLines={1}>App Theme</Text>
            						</View>
            						<View style={[styles.accessoriesAndGrabber, styles.contentsFlexBox]}>
              							<View style={[styles.contentsTrailing1, styles.contentsFlexBox]}>
                								<View style={styles.info}>
                  									<Text style={[styles.info1, styles.info1Position]}>􀅴</Text>
                								</View>
                								<View style={styles.drillIn}>
                  									<Text style={[styles.drillIn1, styles.info1Position]}>􀆊</Text>
                								</View>
              							</View>
            						</View>
          					</View>
        				</View>
      			</View>
      			<Image style={styles.logoagain2Icon} resizeMode="cover" source="LogoAgain 2.png" />
      			<View style={[styles.row2, styles.rowBorder]}>
        				<View style={[styles.contents, styles.contentsLayout]}>
          					<View style={[styles.titleAndTrailingAccessories, styles.levelsFlexBox]}>
            						<View style={[styles.titleAndDetail, styles.contentsLayout]}>
              							<Text style={[styles.title, styles.titleLayout]} numberOfLines={1}>Change Username</Text>
            						</View>
            						<View style={[styles.accessoriesAndGrabber, styles.contentsFlexBox]}>
              							<View style={[styles.contentsTrailing, styles.contentsFlexBox]}>
                								<View style={styles.drillIn}>
                  									<Text style={[styles.drillIn1, styles.info1Position]}>􀆊</Text>
                								</View>
              							</View>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.row3, styles.rowBorder]}>
        				<View style={[styles.contents, styles.contentsLayout]}>
          					<View style={[styles.titleAndTrailingAccessories, styles.levelsFlexBox]}>
            						<View style={[styles.titleAndDetail, styles.contentsLayout]}>
              							<Text style={[styles.title, styles.titleLayout]} numberOfLines={1}>Change Password</Text>
            						</View>
            						<View style={[styles.accessoriesAndGrabber, styles.contentsFlexBox]}>
              							<View style={[styles.contentsTrailing, styles.contentsFlexBox]}>
                								<View style={styles.drillIn}>
                  									<Text style={[styles.drillIn1, styles.info1Position]}>􀆊</Text>
                								</View>
              							</View>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.row4, styles.rowBorder]}>
        				<View style={[styles.contents, styles.contentsLayout]}>
          					<View style={[styles.titleAndTrailingAccessories, styles.levelsFlexBox]}>
            						<View style={[styles.titleAndDetail, styles.contentsLayout]}>
              							<Text style={[styles.title, styles.titleLayout]} numberOfLines={1}>Change Email</Text>
            						</View>
            						<View style={[styles.accessoriesAndGrabber, styles.contentsFlexBox]}>
              							<View style={[styles.contentsTrailing, styles.contentsFlexBox]}>
                								<View style={styles.drillIn}>
                  									<Text style={[styles.drillIn1, styles.info1Position]}>􀆊</Text>
                								</View>
              							</View>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.row5, styles.rowBorder]}>
        				<View style={[styles.contents, styles.contentsLayout]}>
          					<View style={[styles.titleAndTrailingAccessories, styles.levelsFlexBox]}>
            						<View style={[styles.titleAndDetail, styles.contentsLayout]}>
              							<Text style={[styles.title, styles.titleLayout]} numberOfLines={1}>Delete Account</Text>
            						</View>
            						<View style={[styles.accessoriesAndGrabber, styles.contentsFlexBox]}>
              							<View style={[styles.contentsTrailing, styles.contentsFlexBox]}>
                								<View style={styles.drillIn}>
                  									<Text style={[styles.drillIn1, styles.info1Position]}>􀆊</Text>
                								</View>
              							</View>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.row6, styles.rowBorder]}>
        				<View style={[styles.contents, styles.contentsLayout]}>
          					<View style={[styles.titleAndTrailingAccessories, styles.levelsFlexBox]}>
            						<View style={[styles.titleAndDetail, styles.contentsLayout]}>
              							<Text style={[styles.title, styles.titleLayout]} numberOfLines={1}>Manage Subscription</Text>
            						</View>
            						<View style={[styles.accessoriesAndGrabber, styles.contentsFlexBox]}>
              							<View style={[styles.contentsTrailing1, styles.contentsFlexBox]}>
                								<View style={styles.info}>
                  									<Text style={[styles.info1, styles.info1Position]}>􀅴</Text>
                								</View>
                								<View style={styles.drillIn}>
                  									<Text style={[styles.drillIn1, styles.info1Position]}>􀆊</Text>
                								</View>
              							</View>
            						</View>
          					</View>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	frameFlexBox: {
    		justifyContent: "space-between",
    		flexDirection: "row"
  	},
  	timeFlexBox: {
    		paddingLeft: 16,
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	levelsFlexBox: {
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	capIconPosition: {
    		left: "50%",
    		position: "absolute"
  	},
  	containerLayout: {
    		borderRadius: 100,
    		overflow: "hidden"
  	},
  	tabBarButtonsPosition: {
    		right: 0,
    		left: 0,
    		position: "absolute"
  	},
  	labelTypo: {
    		fontFamily: "ABeeZee-Italic",
    		fontStyle: "italic",
    		fontSize: 10,
    		left: "-1.04%",
    		top: "70%",
    		width: "102.04%",
    		textAlign: "center",
    		position: "absolute"
  	},
  	symbolTypo: {
    		fontSize: 18,
    		left: "18.74%",
    		top: "2.5%",
    		width: "62.43%",
    		fontFamily: "ABeeZee-Italic",
    		fontStyle: "italic",
    		textAlign: "center",
    		position: "absolute"
  	},
  	iconPosition: {
    		top: 862,
    		height: 24,
    		width: 24,
    		position: "absolute"
  	},
  	titleFlexBox: {
    		textAlign: "left",
    		color: "#000"
  	},
  	rowBorder1: {
    		width: 402,
    		backgroundColor: "#e3e3e3",
    		left: 11,
    		borderWidth: 1,
    		borderColor: "#000",
    		borderStyle: "solid",
    		alignItems: "center",
    		flexDirection: "row",
    		position: "absolute"
  	},
  	contentsLayout: {
    		height: 44,
    		flex: 1
  	},
  	titleLayout: {
    		height: 22,
    		display: "flex",
    		alignItems: "center"
  	},
  	contentsFlexBox: {
    		justifyContent: "flex-end",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	info1Position: {
    		top: "50%",
    		marginTop: -11,
    		left: "50%",
    		textAlign: "center",
    		fontFamily: "SF Pro",
    		lineHeight: 22,
    		fontSize: 17,
    		position: "absolute"
  	},
  	rowBorder: {
    		left: 14,
    		width: 402,
    		backgroundColor: "#e3e3e3",
    		borderWidth: 1,
    		borderColor: "#000",
    		borderStyle: "solid",
    		alignItems: "center",
    		flexDirection: "row",
    		position: "absolute"
  	},
  	time1: {
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "SF Pro",
    		fontWeight: "600",
    		lineHeight: 22,
    		fontSize: 17
  	},
  	time: {
    		paddingRight: 6,
    		justifyContent: "center",
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
    		width: 25,
    		opacity: 0.35,
    		borderWidth: 1,
    		borderColor: "#000",
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
    		gap: 7,
    		paddingRight: 16,
    		justifyContent: "center",
    		alignItems: "center",
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
    		left: 0,
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
    		alignItems: "center"
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
    		fontFamily: "Roboto-Regular",
    		color: "#676767",
    		textAlign: "center",
    		flex: 1
  	},
  	topAppBar: {
    		top: 53,
    		left: -3,
    		borderRadius: 10,
    		backgroundColor: "#d0bcff",
    		width: 437,
    		height: 69,
    		paddingHorizontal: 4,
    		paddingVertical: 8,
    		gap: 6,
    		alignItems: "center",
    		position: "absolute"
  	},
  	genericAvatarIcon: {
    		top: 74,
    		left: 379,
    		width: 40,
    		height: 40,
    		position: "absolute"
  	},
  	iphone1415ProMax4Child: {
    		height: "11.7%",
    		width: "100.47%",
    		top: "90.99%",
    		right: "-0.23%",
    		bottom: "-2.68%",
    		left: "-0.23%",
    		borderRadius: 16,
    		backgroundColor: "#fff",
    		position: "absolute"
  	},
  	chrome: {
    		height: "99.61%",
    		right: "0%",
    		bottom: "0.39%",
    		left: "0%",
    		backgroundColor: "#faf6ff",
    		top: "0%",
    		alignItems: "center",
    		position: "absolute",
    		width: "100%"
  	},
  	chromeMaterial: {
    		bottom: 0,
    		borderColor: "rgba(0, 0, 0, 0.3)",
    		borderTopWidth: 0.3,
    		borderStyle: "solid",
    		top: 0,
    		right: 0,
    		overflow: "hidden"
  	},
  	label: {
    		color: "#999"
  	},
  	symbol: {
    		color: "#999"
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
    		color: "#007aff"
  	},
  	symbol3: {
    		color: "#007aff"
  	},
  	tabBarButtons: {
    		top: 7,
    		justifyContent: "space-between",
    		flexDirection: "row"
  	},
  	tabBarIphone: {
    		top: 859,
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
    		left: 38
  	},
  	editIcon: {
    		left: 146
  	},
  	starIcon: {
    		left: 254
  	},
  	settingsIcon: {
    		left: 364
  	},
  	accountInformation: {
    		top: 205,
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		lineHeight: 16,
    		fontSize: 16,
    		left: 13,
    		textAlign: "left",
    		position: "absolute"
  	},
  	customization1Typo: {
    		fontFamily: "Inter-Bold",
    		fontWeight: "700"
  	},
  	text: {
    		fontFamily: "Inter-Regular"
  	},
  	customization: {
    		top: 541,
    		lineHeight: 16,
    		fontSize: 16,
    		left: 13,
    		textAlign: "left",
    		position: "absolute"
  	},
  	title: {
    		letterSpacing: 0,
    		fontFamily: "Actor-Regular",
    		textAlign: "left",
    		color: "#000",
    		lineHeight: 22,
    		fontSize: 17,
    		height: 22,
    		display: "flex",
    		alignSelf: "stretch",
    		overflow: "hidden"
  	},
  	titleAndDetail: {
    		justifyContent: "center"
  	},
  	drillIn1: {
    		marginLeft: -6,
    		color: "rgba(60, 60, 67, 0.3)",
    		fontWeight: "600",
    		marginTop: -11
  	},
  	drillIn: {
    		width: 8,
    		height: 32
  	},
  	contentsTrailing: {
    		paddingRight: 16
  	},
  	accessoriesAndGrabber: {
    		alignSelf: "stretch"
  	},
  	titleAndTrailingAccessories: {
    		borderColor: "rgba(84, 84, 86, 0.34)",
    		borderBottomWidth: 0.3,
    		borderStyle: "solid",
    		alignItems: "center",
    		alignSelf: "stretch",
    		flex: 1
  	},
  	contents: {
    		paddingLeft: 16,
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	row: {
    		top: 569
  	},
  	info1: {
    		marginLeft: -9,
    		width: 18,
    		height: 22,
    		display: "flex",
    		alignItems: "center",
    		color: "#007aff",
    		justifyContent: "center"
  	},
  	info: {
    		width: 16,
    		height: 32
  	},
  	contentsTrailing1: {
    		gap: 16,
    		paddingRight: 16
  	},
  	row1: {
    		top: 620
  	},
  	logoagain2Icon: {
    		top: 683,
    		left: 119,
    		width: 185,
    		height: 165,
    		position: "absolute"
  	},
  	row2: {
    		top: 235
  	},
  	row3: {
    		top: 286
  	},
  	row4: {
    		top: 337
  	},
  	row5: {
    		top: 439
  	},
  	row6: {
    		top: 388
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
