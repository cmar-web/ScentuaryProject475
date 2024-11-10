import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const IPhone1415ProMax = () =>
{

  	return (
    		<View style={styles.iphone1415ProMax5}>
      			<Image style={styles.stockPhotoBeautifulPurpleGIcon} resizeMode="cover" source="stock-photo-beautiful-purple-gradient-background-smooth-and-texture-2276981879 1.png" />
      			<View style={[styles.statusBarIphone, styles.signInWithPosition]}>
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
              							<Image style={[styles.capIcon, styles.iconLayout]} resizeMode="cover" source="Cap.png" />
              							<View style={styles.capacity} />
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.formLogIn, styles.inputBorder]}>
        				<View style={styles.inputField}>
          					<Text style={[styles.label, styles.labelTypo]}>Username</Text>
          					<View style={[styles.input, styles.inputBorder]}>
            						<Text style={[styles.value, styles.valueTypo]}>Value</Text>
          					</View>
        				</View>
        				<View style={styles.inputField}>
          					<Text style={[styles.label, styles.labelTypo]}>Password</Text>
          					<View style={[styles.input, styles.inputBorder]}>
            						<Text style={[styles.value, styles.valueTypo]}>Value</Text>
          					</View>
        				</View>
        				<View style={[styles.buttonGroup, styles.frameFlexBox]}>
          					<View style={[styles.button, styles.buttonBorder]}>
            						<Text style={[styles.button1, styles.valueTypo]}>Sign In</Text>
          					</View>
        				</View>
        				<View style={styles.textLink}>
          					<Text style={[styles.textLink1, styles.labelTypo]}>Forgot password?</Text>
            						</View>
            						</View>
            						<View style={[styles.headerAuth, styles.frameFlexBox]}>
              							<View style={[styles.button2, styles.buttonBorder]}>
                								<Text style={[styles.button1, styles.valueTypo]}>Register</Text>
              							</View>
            						</View>
            						<View style={[styles.standrdOutlineCircle, styles.standrdLayout]}>
              							<View style={[styles.standrdOutlineCircle1, styles.standrdLayout]}>
                								<View style={[styles.button4, styles.standrdLayout]} />
                								<Text style={[styles.signInWith, styles.signInWithPosition]}>Sign in with Google</Text>
                								<Image style={[styles.logoIcon, styles.iconLayout]} resizeMode="cover" source="LOGO.png" />
              							</View>
            						</View>
            						<Image style={styles.logoagain2Icon} resizeMode="cover" source="LogoAgain 2.png" />
            						</View>);
};

          					const styles = StyleSheet.create({
            						signInWithPosition: {
              							left: 0,
              							position: "absolute"
            						},
            						frameFlexBox: {
              							alignItems: "center",
              							flexDirection: "row"
            						},
            						timeFlexBox: {
              							justifyContent: "center",
              							alignItems: "center"
            						},
            						iconLayout: {
              							maxHeight: "100%",
              							position: "absolute"
            						},
            						inputBorder: {
              							borderColor: "#d9d9d9",
              							borderRadius: 8,
              							backgroundColor: "#fff",
              							borderWidth: 1,
              							borderStyle: "solid"
            						},
            						labelTypo: {
              							textAlign: "left",
              							color: "#1e1e1e",
              							fontFamily: "Inter-Regular",
              							lineHeight: 22,
              							fontSize: 16
            						},
            						valueTypo: {
              							lineHeight: 16,
              							textAlign: "left",
              							fontFamily: "Inter-Regular",
              							fontSize: 16
            						},
            						buttonBorder: {
              							borderColor: "#676767",
              							backgroundColor: "#676767",
              							borderRadius: 8,
              							borderWidth: 1,
              							borderStyle: "solid",
              							justifyContent: "center",
              							alignItems: "center",
              							flexDirection: "row",
              							overflow: "hidden",
              							flex: 1
            						},
            						standrdLayout: {
              							height: 40,
              							position: "absolute"
            						},
            						stockPhotoBeautifulPurpleGIcon: {
              							top: 10,
              							left: -1,
              							width: 429,
              							height: 718,
              							position: "absolute"
            						},
            						time1: {
              							fontSize: 17,
              							lineHeight: 22,
              							fontWeight: "600",
              							fontFamily: "SF Pro",
              							color: "#000",
              							textAlign: "center"
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
              							top: "0%",
              							bottom: "0%",
              							borderRadius: 4,
              							borderColor: "#000",
              							width: 25,
              							opacity: 0.35,
              							borderWidth: 1,
              							borderStyle: "solid",
              							left: "50%",
              							position: "absolute"
            						},
            						capIcon: {
              							height: "31.54%",
              							marginLeft: 12.35,
              							top: "36.78%",
              							bottom: "31.68%",
              							width: 1,
              							opacity: 0.4,
              							left: "50%"
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
              							alignSelf: "stretch"
            						},
            						statusBarIphone: {
              							width: 422,
              							height: 53,
              							paddingTop: 21,
              							top: 0
            						},
            						label: {
              							alignSelf: "stretch"
            						},
            						value: {
              							color: "#b3b3b3",
              							flex: 1
            						},
            						input: {
              							paddingHorizontal: 16,
              							paddingVertical: 12,
              							minWidth: 240,
              							alignItems: "center",
              							flexDirection: "row",
              							alignSelf: "stretch",
              							overflow: "hidden"
            						},
            						inputField: {
              							gap: 8,
              							alignSelf: "stretch"
            						},
            						button1: {
              							color: "#f5f5f5"
            						},
            						button: {
              							padding: 12
            						},
            						buttonGroup: {
              							alignSelf: "stretch"
            						},
            						textLink1: {
              							textDecoration: "underline"
            						},
            						textLink: {
              							flexDirection: "row",
              							alignSelf: "stretch"
            						},
            						formLogIn: {
              							top: 226,
              							padding: 24,
              							gap: 24,
              							minWidth: 320,
              							left: 54,
              							position: "absolute"
            						},
            						button2: {
              							padding: 8
            						},
            						headerAuth: {
              							top: 597,
              							left: 125,
              							width: 178,
              							height: 32,
              							position: "absolute"
            						},
            						button4: {
              							left: 11,
              							borderColor: "#dadce0",
              							width: 400,
              							borderRadius: 20,
              							height: 40,
              							backgroundColor: "#fff",
              							borderWidth: 1,
              							borderStyle: "solid",
              							top: 0
            						},
            						signInWith: {
              							top: 11,
              							fontSize: 14,
              							letterSpacing: 0,
              							lineHeight: 17,
              							fontWeight: "500",
              							fontFamily: "Roboto-Medium",
              							color: "#3c4043",
              							width: 346,
              							textAlign: "center"
            						},
            						logoIcon: {
              							height: "50%",
              							width: "3.92%",
              							top: "25%",
              							right: "90.85%",
              							bottom: "25%",
              							left: "5.23%",
              							maxWidth: "100%",
              							overflow: "hidden"
            						},
            						standrdOutlineCircle1: {
              							left: -11,
              							width: 411,
              							top: 0
            						},
            						standrdOutlineCircle: {
              							top: 765,
              							width: 323,
              							borderRadius: 20,
              							height: 40,
              							left: 54,
              							overflow: "hidden"
            						},
            						logoagain2Icon: {
              							top: 53,
              							left: 121,
              							width: 185,
              							height: 165,
              							position: "absolute"
            						},
            						iphone1415ProMax5: {
              							backgroundColor: "#d9d9d9",
              							width: "100%",
              							height: 932,
              							overflow: "hidden",
              							flex: 1
            						}
          					});
          					import { FormBox } from "compositions"
                            import { TextLink } from "primitives"
                            import { ButtonGroup } from "primitives"
                            import { Button } from "primitives"
                            import { InputField } from "primitives"
                            <FormBox onSubmit={() => {}}>
                            <InputField label="Username" placeholder="Value" />
                            <InputField label="Password" placeholder="Value" />
                            <ButtonGroup align="justify">
                            <Button onPress={() => {}} variant="primary">
                            Sign In
                            </Button>
                            </ButtonGroup>
                            <TextLink href="#">Forgot password?</TextLink>
                            </FormBox>

                            import { HeaderAuth } from "compositions"
                            <HeaderAuth />

          					export default IPhone1415ProMax;
