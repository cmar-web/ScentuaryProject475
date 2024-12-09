import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const IPhone1415ProMax = () => {

  	return (
    		<View style={styles.iphone1415ProMax4}>
      			<View style={[styles.statusBarIphone, styles.accordionPosition]}>
        				<View style={[styles.frame, styles.frameFlexBox]}>
          					<View style={[styles.time, styles.timeFlexBox]}>
            						<Text style={styles.time1}>9:41</Text>
          					</View>
          					<View style={[styles.dynamicIslandSpacer, styles.timeFlexBox]} />
          					<View style={[styles.levels, styles.timeFlexBox]}>
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
        				<View style={[styles.leadingIcon, styles.timeFlexBox]}>
          					<View style={[styles.container, styles.containerLayout]}>
            						<View style={styles.stateLayer}>
              							<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
            						</View>
          					</View>
        				</View>
        				<Text style={styles.headline}>FAQS</Text>
        				<View style={[styles.leadingIcon, styles.timeFlexBox]}>
          					<View style={[styles.container, styles.containerLayout]}>
            						<View style={styles.stateLayer}>
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
      			<Text style={styles.commonlyAskedQuestions}>Commonly Asked Questions:</Text>
      			<View style={[styles.accordion, styles.accordionPosition]}>
        				<View style={[styles.accordionItem, styles.accordionItemBorder]}>
          					<View style={styles.accordionTitle}>
            						<Text style={styles.title}>Why do I keep getting the same fragrance in the randomizer?</Text>
              							<Image style={styles.chevronUpIcon} resizeMode="cover" source="Chevron up.png" />
              							</View>
              							<View style={[styles.accordionContent, styles.timeFlexBox]}>
                								<Text style={[styles.body, styles.bodyTypo]}>On the randomizer screen, turn off the allow repeats button. Now any fragrance that is picked from the wheel will be removed.</Text>
              							</View>
              							</View>
              							<View style={[styles.accordionItem, styles.accordionItemBorder]}>
                								<View style={styles.accordionTitle}>
                  									<Text style={styles.title}>How do I add a fragrance to my favorites?</Text>
                    										<Image style={styles.chevronUpIcon} resizeMode="cover" source="Chevron up.png" />
                    										</View>
                    										<View style={[styles.accordionContent, styles.timeFlexBox]}>
                      											<Text style={[styles.body, styles.bodyTypo]}>On the browse page, click the star next to the fragrance you would like to add to your favorites.</Text>
                    										</View>
                    										</View>
                    										<View style={[styles.accordionItem2, styles.accordionItemBorder]}>
                      											<View style={styles.accordionTitle2}>
                        												<Text style={styles.title}>How do I change my password?</Text>
                          													<Image style={styles.chevronUpIcon} resizeMode="cover" source="Chevron down.png" />
                          													</View>
                          													</View>
                          													<View style={[styles.accordionItem2, styles.accordionItemBorder]}>
                            														<View style={styles.accordionTitle2}>
                              															<Text style={styles.title}>Where do I get my personalized suggestions?</Text>
                                																<Image style={styles.chevronUpIcon} resizeMode="cover" source="Chevron down.png" />
                                																</View>
                                																</View>
                                																<View style={[styles.accordionItem2, styles.accordionItemBorder]}>
                                  																	<View style={styles.accordionTitle2}>
                                    																		<Text style={styles.title}>Can I cancel my subscription?</Text>
                                      																			<Image style={styles.chevronUpIcon} resizeMode="cover" source="Chevron down.png" />
                                      																			</View>
                                      																			</View>
                                      																			</View>
                                      																			<View style={styles.inputField}>
                                        																				<Text style={[styles.label4, styles.bodyTypo]}>Ask your question:</Text>
                                        																				<View style={styles.input}>
                                          																					<Text style={[styles.value, styles.bodyTypo]}>Type here...</Text>
                                        																				</View>
                                      																			</View>
                                      																			<View style={styles.button}>
                                        																				<Text style={[styles.button1, styles.bodyTypo]}>Submit</Text>
                                      																			</View>
                                      																			</View>);
                                    																		};

                                    																		const styles = StyleSheet.create({
                                      																			accordionPosition: {
                                        																				left: 0,
                                        																				position: "absolute"
                                      																			},
                                      																			frameFlexBox: {
                                        																				justifyContent: "space-between",
                                        																				flexDirection: "row"
                                      																			},
                                      																			timeFlexBox: {
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
                                        																				top: 862,
                                        																				height: 24,
                                        																				width: 24,
                                        																				position: "absolute"
                                      																			},
                                      																			accordionItemBorder: {
                                        																				padding: 16,
                                        																				borderColor: "#d9d9d9",
                                        																				borderRadius: 8,
                                        																				borderWidth: 1,
                                        																				borderStyle: "solid",
                                        																				alignSelf: "stretch"
                                      																			},
                                      																			bodyTypo: {
                                        																				fontFamily: "Inter-Regular",
                                        																				color: "#1e1e1e",
                                        																				textAlign: "left",
                                        																				fontSize: 16
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
                                        																				flexDirection: "row",
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
                                      																			commonlyAskedQuestions: {
                                        																				top: 188,
                                        																				left: 5,
                                        																				fontWeight: "700",
                                        																				fontFamily: "Inter-Bold",
                                        																				textAlign: "left",
                                        																				fontSize: 16,
                                        																				lineHeight: 16,
                                        																				color: "#000",
                                        																				position: "absolute"
                                      																			},
                                      																			title: {
                                        																				fontFamily: "Inter-SemiBold",
                                        																				color: "#1e1e1e",
                                        																				lineHeight: 22,
                                        																				textAlign: "left",
                                        																				fontSize: 16,
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
                                        																				lineHeight: 22,
                                        																				fontFamily: "Inter-Regular",
                                        																				flex: 1
                                      																			},
                                      																			accordionContent: {
                                        																				flexDirection: "row",
                                        																				alignSelf: "stretch"
                                      																			},
                                      																			accordionItem: {
                                        																				gap: 8,
                                        																				backgroundColor: "#fff"
                                      																			},
                                      																			accordionTitle2: {
                                        																				gap: 8,
                                        																				alignItems: "center",
                                        																				flexDirection: "row",
                                        																				flex: 1
                                      																			},
                                      																			accordionItem2: {
                                        																				backgroundColor: "#f5f5f5",
                                        																				alignItems: "center",
                                        																				flexDirection: "row"
                                      																			},
                                      																			accordion: {
                                        																				top: 212,
                                        																				width: 430,
                                        																				height: 380,
                                        																				gap: 16
                                      																			},
                                      																			label4: {
                                        																				lineHeight: 22,
                                        																				fontFamily: "Inter-Regular",
                                        																				alignSelf: "stretch"
                                      																			},
                                      																			value: {
                                        																				fontFamily: "Inter-Regular",
                                        																				lineHeight: 16,
                                        																				flex: 1
                                      																			},
                                      																			input: {
                                        																				paddingHorizontal: 16,
                                        																				paddingVertical: 12,
                                        																				minWidth: 240,
                                        																				borderColor: "#d9d9d9",
                                        																				borderRadius: 8,
                                        																				backgroundColor: "#fff",
                                        																				borderWidth: 1,
                                        																				borderStyle: "solid",
                                        																				alignItems: "center",
                                        																				flexDirection: "row",
                                        																				alignSelf: "stretch",
                                        																				overflow: "hidden"
                                      																			},
                                      																			inputField: {
                                        																				top: 721,
                                        																				left: 95,
                                        																				gap: 8,
                                        																				position: "absolute"
                                      																			},
                                      																			button1: {
                                        																				fontFamily: "Inter-Regular",
                                        																				lineHeight: 16
                                      																			},
                                      																			button: {
                                        																				top: 801,
                                        																				left: 182,
                                        																				backgroundColor: "#e3e3e3",
                                        																				borderColor: "#767676",
                                        																				borderRadius: 8,
                                        																				padding: 8,
                                        																				borderWidth: 1,
                                        																				borderStyle: "solid",
                                        																				justifyContent: "center",
                                        																				alignItems: "center",
                                        																				flexDirection: "row",
                                        																				position: "absolute",
                                        																				overflow: "hidden"
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
