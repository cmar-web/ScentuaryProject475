import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const IPhone1415ProMax = () => {

  	return (
    		<View style={styles.iphone1415ProMax3}>
      			<View style={styles.statusBarIphone}>
        				<View style={[styles.frame, styles.frameFlexBox]}>
          					<View style={[styles.time, styles.timeSpaceBlock]}>
            						<Text style={styles.time1}>9:41</Text>
          					</View>
          					<View style={[styles.dynamicIslandSpacer, styles.stateFlexBox1]} />
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
      			</View>
      			<Text style={[styles.fragranceOfThe, styles.insertNameTypo]}>Fragrance of The Day</Text>
      			<Text style={[styles.insertName, styles.insertNameTypo]}>[insert name]</Text>
      			<View style={[styles.button, styles.buttonBg]}>
        				<View style={[styles.stateLayer, styles.timeSpaceBlock]}>
          					<Image style={styles.icon} resizeMode="cover" source="icon.png" />
          					<Text style={[styles.labelText, styles.labelTypo1]}>Share Result</Text>
        				</View>
      			</View>
      			<View style={[styles.switch, styles.switchFlexBox]}>
        				<View style={styles.handle}>
          					<View style={[styles.target, styles.stateFlexBox1]}>
            						<View style={[styles.stateLayer1, styles.stateFlexBox]}>
              							<View style={[styles.handleShape, styles.stateFlexBox1]}>
                								<View style={styles.container} />
              							</View>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.assistiveChip, styles.stateFlexBox1]}>
        				<View style={[styles.stateLayer2, styles.stateFlexBox1]}>
          					<Text style={[styles.labelText1, styles.labelTypo1]}>Allow repeats?</Text>
            						</View>
            						</View>
            						<Image style={[styles.genericAvatarIcon, styles.genericIconLayout]} resizeMode="cover" source="Generic avatar.png" />
            						<View style={styles.tabs}>
              							<View style={[styles.tab, styles.tabBorder]}>
                								<Text style={[styles.label, styles.labelTypo]}>All</Text>
              							</View>
              							<View style={[styles.tab1, styles.tabBorder]}>
                								<Text style={[styles.label1, styles.labelTypo]}>Fruity</Text>
              							</View>
              							<View style={[styles.tab1, styles.tabBorder]}>
                								<Text style={[styles.label1, styles.labelTypo]}>Woody</Text>
              							</View>
              							<View style={[styles.tab1, styles.tabBorder]}>
                								<Text style={[styles.label1, styles.labelTypo]}>Gourmand</Text>
              							</View>
              							<View style={[styles.tab1, styles.tabBorder]}>
                								<Text style={[styles.label1, styles.labelTypo]}>Floral</Text>
              							</View>
              							<View style={[styles.tab1, styles.tabBorder]}>
                								<Text style={[styles.label1, styles.labelTypo]}>Musky</Text>
              							</View>
            						</View>
            						<View style={[styles.topAppBar, styles.switchFlexBox]}>
              							<View style={[styles.leadingIcon, styles.stateFlexBox1]}>
                								<View style={[styles.container1, styles.stateFlexBox1]}>
                  									<View style={[styles.stateLayer3, styles.stateFlexBox]}>
                    										<Image style={styles.icon1} resizeMode="cover" source="Icon.png" />
                  									</View>
                								</View>
              							</View>
              							<Text style={styles.headline}>Randomizer</Text>
              							<View style={[styles.leadingIcon, styles.stateFlexBox1]}>
                								<View style={[styles.container1, styles.stateFlexBox1]}>
                  									<View style={[styles.stateLayer3, styles.stateFlexBox]}>
                    										<Image style={styles.icon1} resizeMode="cover" source="Icon.png" />
                  									</View>
                								</View>
              							</View>
            						</View>
            						<Image style={[styles.genericAvatarIcon1, styles.genericIconLayout]} resizeMode="cover" source="Generic avatar.png" />
            						<View style={[styles.iphone1415ProMax3Child, styles.chromePosition]} />
            						<View style={styles.tabBarIphone}>
              							<View style={[styles.chromeMaterial, styles.tabBarButtonsPosition]}>
                								<View style={[styles.chrome, styles.chromePosition]} />
              							</View>
              							<View style={[styles.tabBarButtons, styles.tabBarButtonsPosition]}>
                								<View style={styles.tab11}>
                  									<Text style={[styles.label6, styles.label6Typo]}>Browse</Text>
                  									<Text style={[styles.symbol, styles.symbolPosition]} />
                								</View>
                								<View style={styles.tab11}>
                  									<Text style={[styles.label7, styles.label7Typo]}>Randomizer</Text>
                  									<Text style={[styles.symbol1, styles.label7Typo]} />
                								</View>
                								<View style={[styles.tab31, styles.tab31ShadowBox]}>
                  									<Text style={[styles.label6, styles.label6Typo]}>My Collection</Text>
                  									<Text style={[styles.symbol, styles.symbolPosition]} />
                								</View>
                								<View style={styles.tab11}>
                  									<Text style={[styles.label6, styles.label6Typo]}>Settings</Text>
                  									<Text style={[styles.symbol, styles.symbolPosition]} />
                								</View>
              							</View>
            						</View>
            						<Image style={[styles.folderIcon, styles.iconPosition]} resizeMode="cover" source="folder.png" />
            						<Image style={[styles.editIcon, styles.iconPosition]} resizeMode="cover" source="edit.png" />
            						<Image style={[styles.starIcon, styles.iconPosition]} resizeMode="cover" source="star.png" />
            						<Image style={[styles.settingsIcon, styles.iconPosition]} resizeMode="cover" source="settings.png" />
            						<View style={[styles.rowTextField, styles.timeSpaceBlock]}>
              							<View style={[styles.contents, styles.levelsFlexBox]}>
                								<Text style={[styles.title, styles.titleTypo]} numberOfLines={1}>Insert:</Text>
                								<Text style={[styles.value, styles.titleTypo]}>Value</Text>
              							</View>
            						</View>
            						<Image style={styles.image1Icon} resizeMode="cover" source="image 1.png" />
            						</View>);
          					};

          					const styles = StyleSheet.create({
            						frameFlexBox: {
              							justifyContent: "space-between",
              							flexDirection: "row"
            						},
            						timeSpaceBlock: {
              							paddingLeft: 16,
              							flexDirection: "row"
            						},
            						stateFlexBox1: {
              							justifyContent: "center",
              							alignItems: "center"
            						},
            						levelsFlexBox: {
              							paddingRight: 16,
              							flexDirection: "row",
              							flex: 1
            						},
            						borderBorder: {
              							borderWidth: 1,
              							borderColor: "#000",
              							borderStyle: "solid",
              							position: "absolute"
            						},
            						insertNameTypo: {
              							fontFamily: "Abhaya Libre SemiBold",
              							color: "#676767",
              							textAlign: "center",
              							lineHeight: 22,
              							position: "absolute"
            						},
            						buttonBg: {
              							backgroundColor: "#625b71",
              							borderRadius: 100
            						},
            						labelTypo1: {
              							fontFamily: "Roboto-Medium",
              							fontWeight: "500",
              							lineHeight: 20,
              							letterSpacing: 0,
              							fontSize: 14,
              							textAlign: "center"
            						},
            						switchFlexBox: {
              							paddingHorizontal: 4,
              							alignItems: "center",
              							flexDirection: "row",
              							position: "absolute"
            						},
            						stateFlexBox: {
              							padding: 8,
              							justifyContent: "center",
              							alignItems: "center"
            						},
            						genericIconLayout: {
              							width: 40,
              							height: 40,
              							borderRadius: 100,
              							position: "absolute",
              							overflow: "hidden"
            						},
            						tabBorder: {
              							paddingVertical: 4,
              							paddingHorizontal: 12,
              							borderBottomWidth: 1,
              							borderTopRightRadius: 4,
              							borderTopLeftRadius: 4,
              							borderStyle: "solid",
              							justifyContent: "center",
              							alignItems: "center",
              							flexDirection: "row"
            						},
            						labelTypo: {
              							textAlign: "left",
              							fontFamily: "Inter-Regular",
              							lineHeight: 22,
              							fontSize: 16
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
            						label6Typo: {
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
            						label7Typo: {
              							color: "#007aff",
              							fontFamily: "ABeeZee-Italic",
              							fontStyle: "italic",
              							textAlign: "center",
              							position: "absolute"
            						},
            						tab31ShadowBox: {
              							elevation: 4,
              							shadowRadius: 4,
              							shadowOffset: {
                								width: 0,
                								height: 4
              							},
              							shadowColor: "rgba(0, 0, 0, 0.25)",
              							shadowOpacity: 1
            						},
            						iconPosition: {
              							top: 864,
              							height: 24,
              							width: 24,
              							position: "absolute"
            						},
            						titleTypo: {
              							fontSize: 32,
              							textAlign: "left",
              							letterSpacing: 0,
              							fontFamily: "Abhaya Libre SemiBold",
              							lineHeight: 22
            						},
            						time1: {
              							fontSize: 17,
              							fontWeight: "600",
              							fontFamily: "SF Pro",
              							textAlign: "center",
              							color: "#000",
              							lineHeight: 22
            						},
            						time: {
              							paddingRight: 6,
              							justifyContent: "center",
              							alignItems: "center",
              							flex: 1
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
              							height: "100%",
              							marginLeft: -13.65,
              							bottom: "0%",
              							borderRadius: 4,
              							width: 25,
              							opacity: 0.35,
              							left: "50%",
              							top: "0%"
            						},
            						capIcon: {
              							height: "31.54%",
              							marginLeft: 12.35,
              							top: "36.78%",
              							bottom: "31.68%",
              							maxHeight: "100%",
              							width: 1,
              							opacity: 0.4,
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
              							gap: 7,
              							justifyContent: "center",
              							alignItems: "center"
            						},
            						frame: {
              							alignItems: "center",
              							alignSelf: "stretch"
            						},
            						statusBarIphone: {
              							width: 422,
              							height: 53,
              							paddingTop: 21,
              							left: 2,
              							top: 0,
              							position: "absolute"
            						},
            						fragranceOfThe: {
              							top: 132,
              							left: 115,
              							fontSize: 24,
              							color: "#676767"
            						},
            						insertName: {
              							top: 188,
              							left: 104,
              							fontSize: 40,
              							color: "#676767"
            						},
            						icon: {
              							width: 18,
              							height: 18
            						},
            						labelText: {
              							color: "#fff"
            						},
            						stateLayer: {
              							paddingTop: 10,
              							paddingRight: 24,
              							paddingBottom: 10,
              							gap: 8,
              							justifyContent: "center",
              							alignItems: "center",
              							alignSelf: "stretch",
              							flex: 1
            						},
            						button: {
              							top: 714,
              							left: 11,
              							width: 179,
              							height: 43,
              							shadowOpacity: 1,
              							elevation: 4,
              							shadowRadius: 4,
              							shadowOffset: {
                								width: 0,
                								height: 4
              							},
              							shadowColor: "rgba(0, 0, 0, 0.25)",
              							borderWidth: 1,
              							borderColor: "#000",
              							borderStyle: "solid",
              							position: "absolute",
              							justifyContent: "center",
              							alignItems: "center",
              							overflow: "hidden"
            						},
            						container: {
              							borderRadius: 23,
              							width: 2,
              							height: 2
            						},
            						handleShape: {
              							borderRadius: 24,
              							padding: 11,
              							backgroundColor: "#fff",
              							flexDirection: "row",
              							overflow: "hidden"
            						},
            						stateLayer1: {
              							borderRadius: 100
            						},
            						target: {
              							marginTop: -24,
              							top: "50%",
              							right: -12,
              							padding: 4,
              							flexDirection: "row",
              							position: "absolute"
            						},
            						handle: {
              							alignSelf: "stretch",
              							flex: 1
            						},
            						switch: {
              							top: 722,
              							left: 364,
              							width: 52,
              							justifyContent: "flex-end",
              							paddingVertical: 2,
              							height: 32,
              							backgroundColor: "#625b71",
              							borderRadius: 100
            						},
            						labelText1: {
              							color: "#676767"
            						},
            						stateLayer2: {
              							paddingHorizontal: 16,
              							paddingVertical: 6,
              							height: 32,
              							flexDirection: "row"
            						},
            						assistiveChip: {
              							top: 718,
              							left: 228,
              							shadowColor: "rgba(0, 0, 0, 0.3)",
              							shadowRadius: 2,
              							elevation: 2,
              							borderRadius: 8,
              							backgroundColor: "#f7f2fa",
              							shadowOpacity: 1,
              							flexDirection: "row",
              							position: "absolute",
              							overflow: "hidden"
            						},
            						genericAvatarIcon: {
              							top: 65,
              							left: 384,
              							height: 40
            						},
            						label: {
              							color: "#303030"
            						},
            						tab: {
              							borderColor: "#303030"
            						},
            						label1: {
              							color: "#767676"
            						},
            						tab1: {
              							borderColor: "#b2b2b2"
            						},
            						tabs: {
              							top: 795,
              							width: 571,
              							height: 57,
              							left: 0,
              							flexDirection: "row",
              							position: "absolute",
              							overflow: "hidden"
            						},
            						icon1: {
              							height: 24,
              							width: 24
            						},
            						stateLayer3: {
              							flexDirection: "row"
            						},
            						container1: {
              							borderRadius: 100,
              							flexDirection: "row",
              							overflow: "hidden"
            						},
            						leadingIcon: {
              							width: 48,
              							height: 48
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
              							top: 52,
              							borderRadius: 10,
              							backgroundColor: "#d0bcff",
              							width: 430,
              							height: 64,
              							paddingVertical: 8,
              							gap: 6,
              							left: 2
            						},
            						genericAvatarIcon1: {
              							top: 61,
              							left: 378,
              							height: 40
            						},
            						iphone1415ProMax3Child: {
              							height: "11.7%",
              							width: "100.47%",
              							top: "91.2%",
              							bottom: "-2.9%",
              							left: "-0.47%",
              							borderRadius: 16,
              							backgroundColor: "#fff"
            						},
            						chrome: {
              							height: "99.61%",
              							bottom: "0.39%",
              							left: "0%",
              							backgroundColor: "#faf6ff",
              							top: "0%",
              							alignItems: "center",
              							width: "100%"
            						},
            						chromeMaterial: {
              							bottom: 0,
              							borderColor: "rgba(0, 0, 0, 0.3)",
              							borderTopWidth: 0.3,
              							borderStyle: "solid",
              							top: 0,
              							overflow: "hidden"
            						},
            						label6: {
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
            						tab11: {
              							height: 40,
              							flex: 1
            						},
            						label7: {
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
            						tab31: {
              							height: 40,
              							shadowOpacity: 1,
              							flex: 1
            						},
            						tabBarButtons: {
              							top: 7,
              							justifyContent: "space-between",
              							flexDirection: "row"
            						},
            						tabBarIphone: {
              							top: 861,
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
            						title: {
              							display: "flex",
              							width: 100,
              							height: 22,
              							color: "#000",
              							alignItems: "center",
              							overflow: "hidden"
            						},
            						value: {
              							color: "rgba(60, 60, 67, 0.3)",
              							flex: 1
            						},
            						contents: {
              							borderColor: "rgba(84, 84, 86, 0.34)",
              							borderBottomWidth: 0.3,
              							paddingTop: 11,
              							paddingBottom: 11,
              							borderStyle: "solid",
              							alignSelf: "stretch"
            						},
            						rowTextField: {
              							top: 645,
              							left: 108,
              							width: 215,
              							position: "absolute"
            						},
            						image1Icon: {
              							top: 214,
              							left: -13,
              							width: 457,
              							height: 440,
              							position: "absolute"
            						},
            						iphone1415ProMax3: {
              							backgroundColor: "#eaddff",
              							height: 932,
              							overflow: "hidden",
              							width: "100%",
              							flex: 1
            						}
          					});

          					export default IPhone1415ProMax;
          					