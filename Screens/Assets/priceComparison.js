import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const IPhone1415ProMax = () => {

  	return (
    		<View style={styles.iphone1415ProMax2}>
      			<View style={styles.statusBarIphone}>
        				<View style={[styles.frame, styles.frameFlexBox]}>
          					<View style={[styles.time, styles.iconFlexBox]}>
            						<Text style={styles.time1}>9:41</Text>
          					</View>
          					<View style={[styles.dynamicIslandSpacer, styles.iconFlexBox]} />
          					<View style={[styles.levels, styles.iconFlexBox]}>
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
      			<View style={styles.topAppBar}>
        				<View style={[styles.leadingIcon, styles.iconFlexBox]}>
          					<View style={[styles.container, styles.containerLayout]}>
            						<View style={[styles.stateLayer, styles.iconFlexBox]}>
              							<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
        				<Text style={styles.headline}>Price Comparison</Text>
        				<View style={[styles.leadingIcon, styles.iconFlexBox]}>
          					<View style={[styles.container, styles.containerLayout]}>
            						<View style={[styles.stateLayer, styles.iconFlexBox]}>
              							<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
      			</View>
      			<Image style={[styles.genericAvatarIcon, styles.containerLayout]} resizeMode="cover" source="Generic avatar.png" />
      			<Image style={styles.s2320133MainZoom1Icon} resizeMode="cover" source="s2320133-main-zoom 1.png" />
      			<View style={[styles.horizontaldividerWithSubhea, styles.stateLayer2SpaceBlock]}>
        				<View style={styles.divider} />
        				<Text style={styles.subheader}>Purchasing Options</Text>
      			</View>
      			<View style={styles.buildingBlockssecondaryTabs}>
        				<View style={[styles.stateLayer2, styles.stateLayer2SpaceBlock]}>
          					<View style={[styles.tabContents, styles.iconFlexBox]}>
            						<View style={[styles.iconAndLabel, styles.iconFlexBox]}>
              							<View style={styles.icon} />
              							<Text style={styles.label}>Orange Blossom</Text>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.buildingBlockssecondaryTabs1, styles.buildingFlexBox]}>
        				<View style={[styles.stateLayer2, styles.stateLayer2SpaceBlock]}>
          					<View style={[styles.tabContents, styles.iconFlexBox]}>
            						<View style={[styles.iconAndLabel, styles.iconFlexBox]}>
              							<View style={styles.icon} />
              							<Text style={styles.label}>Luscious  Marshmallow</Text>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.buildingBlockssecondaryTabs2, styles.buildingFlexBox]}>
        				<View style={[styles.stateLayer2, styles.stateLayer2SpaceBlock]}>
          					<View style={[styles.tabContents, styles.iconFlexBox]}>
            						<View style={[styles.iconAndLabel2, styles.iconFlexBox]}>
              							<Text style={styles.label}>Vanilla Absolute</Text>
            						</View>
          					</View>
        				</View>
      			</View>
      			<Image style={[styles.iphone1415ProMax2Child, styles.chefsHatIconPosition]} resizeMode="cover" source="Group 95.png" />
      			<Image style={styles.cake5Icon} resizeMode="cover" source="cake 5.png" />
      			<Image style={[styles.chefsHatIcon, styles.chefsHatIconPosition]} resizeMode="cover" source="chef's hat.png" />
      			<View style={styles.pagination}>
        				<View style={[styles.paginationPrevious, styles.paginationSpaceBlock]}>
          					<Image style={styles.arrowLeftIcon} resizeMode="cover" source="Arrow left.png" />
          					<Text style={[styles.previous, styles.textTypo]}>Previous</Text>
        				</View>
        				<View style={styles.paginationList}>
          					<View style={[styles.paginationPage, styles.paginationSpaceBlock]}>
            						<Text style={[styles.text, styles.textTypo]}>1</Text>
          					</View>
          					<View style={styles.paginationSpaceBlock}>
            						<Text style={[styles.text1, styles.textTypo]}>2</Text>
          					</View>
          					<View style={styles.paginationSpaceBlock}>
            						<Text style={[styles.text1, styles.textTypo]}>3</Text>
          					</View>
          					<View style={styles.paginationGap}>
            						<Text style={[styles.text3, styles.labelTypo]}>...</Text>
          					</View>
          					<View style={styles.paginationSpaceBlock}>
            						<Text style={[styles.text1, styles.textTypo]}>6</Text>
          					</View>
        				</View>
        				<View style={[styles.paginationNext, styles.paginationSpaceBlock]}>
          					<Text style={[styles.text1, styles.textTypo]}>Next</Text>
          					<Image style={styles.arrowLeftIcon} resizeMode="cover" source="Arrow right.png" />
        				</View>
      			</View>
      			<View style={styles.accordion}>
        				<View style={[styles.accordionItem, styles.accordionItemBorder]}>
          					<View style={styles.accordionTitle}>
            						<Text style={[styles.title, styles.labelTypo]}>Sephora ($450)</Text>
            						<Image style={styles.chevronUpIcon} resizeMode="cover" source="Chevron up.png" />
          					</View>
          					<View style={[styles.accordionContent, styles.iconFlexBox]}>
            						<Text style={[styles.body, styles.labelTypo]}>https://www.sephora.com/product/love-don-t-be-shy-P429621</Text>
              							</View>
              							</View>
              							<View style={[styles.accordionItem1, styles.accordionItemBorder]}>
                								<View style={styles.accordionTitle1}>
                  									<Text style={[styles.title, styles.labelTypo]}>FragranceNet ($277.89)</Text>
                  									<Image style={styles.chevronUpIcon} resizeMode="cover" source="Chevron down.png" />
                								</View>
              							</View>
              							<View style={[styles.accordionItem1, styles.accordionItemBorder]}>
                								<View style={styles.accordionTitle1}>
                  									<Text style={[styles.title, styles.labelTypo]}>FragranceBuy ($218.98)</Text>
                  									<Image style={styles.chevronUpIcon} resizeMode="cover" source="Chevron down.png" />
                								</View>
              							</View>
              							</View>
              							<View style={styles.tabs}>
                								<View style={[styles.tab, styles.tabBorder]}>
                  									<Text style={[styles.label3, styles.labelTypo]}>3.4 oz</Text>
                								</View>
                								<View style={[styles.tab1, styles.tabBorder]}>
                  									<Text style={[styles.label4, styles.labelTypo]}>1.7 oz</Text>
                								</View>
                								<View style={[styles.tab1, styles.tabBorder]}>
                  									<Text style={[styles.label4, styles.labelTypo]}>0.24 oz</Text>
                								</View>
              							</View>
              							<Image style={styles.filterIcon} resizeMode="cover" source="Filter.png" />
              							<View style={styles.iphone1415ProMax2Item} />
              							<View style={styles.tabBarIphone}>
                								<View style={[styles.chromeMaterial, styles.tabBarButtonsPosition]}>
                  									<View style={styles.chrome} />
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
                  									<View style={styles.tab3}>
                    										<Text style={[styles.label7, styles.label7Typo]}>My Collection</Text>
                    										<Text style={[styles.symbol1, styles.label7Typo]} />
                  									</View>
                  									<View style={styles.tab11}>
                    										<Text style={[styles.label7, styles.label7Typo]}>Settings</Text>
                    										<Text style={[styles.symbol1, styles.label7Typo]} />
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
                								iconFlexBox: {
                  									justifyContent: "center",
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
                								stateLayer2SpaceBlock: {
                  									paddingHorizontal: 16,
                  									justifyContent: "center"
                								},
                								buildingFlexBox: {
                  									height: 49,
                  									justifyContent: "flex-end",
                  									left: 214,
                  									alignItems: "center",
                  									position: "absolute",
                  									overflow: "hidden",
                  									backgroundColor: "#eaddff"
                								},
                								chefsHatIconPosition: {
                  									width: 34,
                  									top: "50%",
                  									left: "50%",
                  									position: "absolute"
                								},
                								paginationSpaceBlock: {
                  									paddingHorizontal: 12,
                  									borderRadius: 8,
                  									paddingVertical: 8,
                  									justifyContent: "center",
                  									alignItems: "center"
                								},
                								textTypo: {
                  									lineHeight: 16,
                  									fontSize: 16,
                  									fontFamily: "Inter-Regular",
                  									textAlign: "left"
                								},
                								labelTypo: {
                  									lineHeight: 22,
                  									fontSize: 16,
                  									textAlign: "left"
                								},
                								accordionItemBorder: {
                  									padding: 16,
                  									borderColor: "#d9d9d9",
                  									borderRadius: 8,
                  									borderWidth: 1,
                  									borderStyle: "solid",
                  									alignSelf: "stretch"
                								},
                								tabBorder: {
                  									paddingVertical: 4,
                  									borderBottomWidth: 1,
                  									borderTopRightRadius: 4,
                  									borderTopLeftRadius: 4,
                  									paddingHorizontal: 12,
                  									borderStyle: "solid",
                  									justifyContent: "center",
                  									alignItems: "center",
                  									flexDirection: "row"
                								},
                								tabBarButtonsPosition: {
                  									right: 0,
                  									left: 0,
                  									position: "absolute"
                								},
                								label6Typo: {
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
                								label7Typo: {
                  									color: "#999",
                  									fontFamily: "ABeeZee-Italic",
                  									fontStyle: "italic",
                  									textAlign: "center",
                  									position: "absolute"
                								},
                								iconPosition: {
                  									top: 864,
                  									height: 24,
                  									width: 24,
                  									position: "absolute"
                								},
                								time1: {
                  									fontSize: 17,
                  									lineHeight: 22,
                  									fontFamily: "SF Pro",
                  									textAlign: "center",
                  									color: "#000",
                  									fontWeight: "600"
                								},
                								time: {
                  									paddingLeft: 16,
                  									paddingRight: 6,
                  									flexDirection: "row",
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
                  									height: 53,
                  									paddingTop: 21,
                  									top: 0,
                  									position: "absolute"
                								},
                								icon: {
                  									height: 24,
                  									width: 24
                								},
                								stateLayer: {
                  									padding: 8,
                  									flexDirection: "row"
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
                  									color: "#676767",
                  									fontFamily: "Roboto-Regular",
                  									lineHeight: 28,
                  									fontSize: 22,
                  									textAlign: "center",
                  									flex: 1
                								},
                								topAppBar: {
                  									top: 64,
                  									borderRadius: 10,
                  									backgroundColor: "#d0bcff",
                  									width: 430,
                  									height: 64,
                  									paddingHorizontal: 4,
                  									gap: 6,
                  									paddingVertical: 8,
                  									left: 0,
                  									alignItems: "center",
                  									flexDirection: "row",
                  									position: "absolute"
                								},
                								genericAvatarIcon: {
                  									top: 76,
                  									left: 382,
                  									width: 40,
                  									height: 40,
                  									position: "absolute"
                								},
                								s2320133MainZoom1Icon: {
                  									top: 139,
                  									left: -53,
                  									width: 285,
                  									height: 285,
                  									position: "absolute"
                								},
                								divider: {
                  									borderColor: "#322f35",
                  									borderTopWidth: 1,
                  									height: 1,
                  									borderStyle: "solid",
                  									alignSelf: "stretch"
                								},
                								subheader: {
                  									color: "#49454f",
                  									textAlign: "left",
                  									fontFamily: "Roboto-Regular",
                  									lineHeight: 28,
                  									fontSize: 22,
                  									alignSelf: "stretch"
                								},
                								horizontaldividerWithSubhea: {
                  									top: 484,
                  									left: -12,
                  									width: 454,
                  									paddingVertical: 0,
                  									gap: 4,
                  									position: "absolute"
                								},
                								label: {
                  									fontSize: 14,
                  									letterSpacing: 0,
                  									lineHeight: 20,
                  									fontWeight: "500",
                  									fontFamily: "Roboto-Medium",
                  									color: "#676767",
                  									textAlign: "center"
                								},
                								iconAndLabel: {
                  									gap: 8,
                  									flexDirection: "row"
                								},
                								tabContents: {
                  									flexDirection: "row",
                  									flex: 1
                								},
                								stateLayer2: {
                  									paddingVertical: 12,
                  									alignItems: "center",
                  									alignSelf: "stretch",
                  									overflow: "hidden",
                  									flex: 1
                								},
                								buildingBlockssecondaryTabs: {
                  									top: 195,
                  									width: 164,
                  									height: 51,
                  									justifyContent: "flex-end",
                  									left: 214,
                  									alignItems: "center",
                  									position: "absolute",
                  									overflow: "hidden",
                  									backgroundColor: "#eaddff"
                								},
                								buildingBlockssecondaryTabs1: {
                  									top: 293,
                  									width: 207
                								},
                								iconAndLabel2: {
                  									flexDirection: "row"
                								},
                								buildingBlockssecondaryTabs2: {
                  									top: 244,
                  									width: 196
                								},
                								iphone1415ProMax2Child: {
                  									marginTop: -267.29,
                  									marginLeft: 7,
                  									height: 46
                								},
                								cake5Icon: {
                  									marginTop: -215,
                  									marginLeft: 6,
                  									width: 32,
                  									height: 38,
                  									top: "50%",
                  									left: "50%",
                  									position: "absolute"
                								},
                								chefsHatIcon: {
                  									marginTop: -173,
                  									marginLeft: 4,
                  									height: 42
                								},
                								arrowLeftIcon: {
                  									width: 16,
                  									height: 16,
                  									overflow: "hidden"
                								},
                								previous: {
                  									color: "#757575",
                  									fontFamily: "Inter-Regular"
                								},
                								paginationPrevious: {
                  									opacity: 0.5,
                  									gap: 8,
                  									flexDirection: "row"
                								},
                								text: {
                  									color: "#f5f5f5",
                  									fontFamily: "Inter-Regular"
                								},
                								paginationPage: {
                  									backgroundColor: "#2c2c2c"
                								},
                								text1: {
                  									color: "#1e1e1e",
                  									fontFamily: "Inter-Regular"
                								},
                								text3: {
                  									fontWeight: "700",
                  									fontFamily: "Inter-Bold",
                  									color: "#000"
                								},
                								paginationGap: {
                  									borderRadius: 8,
                  									paddingHorizontal: 16,
                  									paddingVertical: 8,
                  									justifyContent: "center",
                  									alignItems: "center"
                								},
                								paginationList: {
                  									gap: 8,
                  									alignItems: "center",
                  									flexDirection: "row"
                								},
                								paginationNext: {
                  									gap: 8,
                  									flexDirection: "row"
                								},
                								pagination: {
                  									top: 786,
                  									left: -1,
                  									width: 526,
                  									height: 41,
                  									gap: 8,
                  									alignItems: "center",
                  									flexDirection: "row",
                  									position: "absolute"
                								},
                								title: {
                  									fontFamily: "Inter-SemiBold",
                  									color: "#676767",
                  									fontWeight: "600",
                  									flex: 1
                								},
                								chevronUpIcon: {
                  									width: 20,
                  									height: 20,
                  									overflow: "hidden"
                								},
                								accordionTitle: {
                  									gap: 8,
                  									alignItems: "center",
                  									flexDirection: "row",
                  									alignSelf: "stretch"
                								},
                								body: {
                  									fontFamily: "Inter-Regular",
                  									color: "#676767",
                  									flex: 1
                								},
                								accordionContent: {
                  									flexDirection: "row",
                  									alignSelf: "stretch"
                								},
                								accordionItem: {
                  									backgroundColor: "#fff",
                  									gap: 8
                								},
                								accordionTitle1: {
                  									gap: 8,
                  									alignItems: "center",
                  									flexDirection: "row",
                  									flex: 1
                								},
                								accordionItem1: {
                  									backgroundColor: "#f5f5f5",
                  									alignItems: "center",
                  									flexDirection: "row"
                								},
                								accordion: {
                  									top: 528,
                  									left: 7,
                  									width: 417,
                  									height: 211,
                  									gap: 16,
                  									position: "absolute"
                								},
                								label3: {
                  									color: "#303030",
                  									fontFamily: "Inter-Regular"
                								},
                								tab: {
                  									borderColor: "#303030"
                								},
                								label4: {
                  									color: "#767676",
                  									fontFamily: "Inter-Regular"
                								},
                								tab1: {
                  									borderColor: "#b2b2b2"
                								},
                								tabs: {
                  									top: 390,
                  									left: 188,
                  									flexDirection: "row",
                  									position: "absolute",
                  									overflow: "hidden"
                								},
                								filterIcon: {
                  									top: 488,
                  									left: 391,
                  									width: 33,
                  									height: 32,
                  									position: "absolute",
                  									overflow: "hidden"
                								},
                								iphone1415ProMax2Item: {
                  									height: "11.7%",
                  									width: "100.47%",
                  									top: "91.2%",
                  									right: "0.23%",
                  									bottom: "-2.9%",
                  									left: "-0.7%",
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
                  									borderColor: "#faf6ff",
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
                  									color: "#007aff",
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
                								tabBarButtons: {
                  									top: 7,
                  									justifyContent: "space-between",
                  									flexDirection: "row"
                								},
                								tabBarIphone: {
                  									top: 861,
                  									left: -3,
                  									borderTopLeftRadius: 50,
                  									borderTopRightRadius: 10000,
                  									borderBottomRightRadius: 50,
                  									borderBottomLeftRadius: 50,
                  									width: 431,
                  									height: 77,
                  									position: "absolute"
                								},
                								folderIcon: {
                  									left: 36
                								},
                								editIcon: {
                  									left: 144
                								},
                								starIcon: {
                  									left: 252
                								},
                								settingsIcon: {
                  									left: 362
                								},
                								iphone1415ProMax2: {
                  									height: 932,
                  									overflow: "hidden",
                  									width: "100%",
                  									backgroundColor: "#eaddff",
                  									flex: 1
                								}
              							});

              							export default IPhone1415ProMax;
