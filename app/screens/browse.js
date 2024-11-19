import * as React from "react";
import {Image, StyleSheet, View, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from '../assets/styles';
const IPhone1415ProMax = () => {

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
            						<Text style={styles.searchGlyph}>􀊫</Text>
            						<Text style={styles.placeholderLabel} numberOfLines={1}>Search</Text>
            						<Text style={styles.dictation}>􀊱</Text>
          					</View>
        				</View>
      			</View>
      			<View style={styles.statusBarIphone}>
        				<View style={styles.frame}>
          					<View style={[styles.dynamicIslandSpacer, styles.levelsFlexBox]} />
          					<View style={[styles.levels, styles.levelsFlexBox]}>
            						<Image style={styles.cellularConnectionIcon} resizeMode="cover" source="Cellular Connection.png" />
            						<Image style={styles.wifiIcon} resizeMode="cover" source="Wifi.png" />

          					</View>
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
                								<Text style={styles.header1}>Fragrance4</Text>
                								<Text style={[styles.subhead, styles.subheadTypo]}>fragrance house</Text>
              							</View>
            						</View>
            						<Image style={styles.mediaIcon} resizeMode="cover" source="Media.png" />
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
                								<Text style={styles.header1}>Fragrance5</Text>
                								<Text style={[styles.subhead, styles.subheadTypo]}>fragrance house</Text>
              							</View>
            						</View>
            						<Image style={styles.mediaIcon} resizeMode="cover" source="Media.png" />
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
            						<Image style={styles.mediaIcon} resizeMode="cover" source="Media.png" />
          					</View>
        				</View>
        				<View style={[styles.background, styles.backgroundPosition]}>
          					<View style={[styles.stateLayer, styles.backgroundPosition]} />
        				</View>
      			</View>
      			<View style={[styles.horizontalCard3, styles.horizontalCardLayout]}>
        				<View style={[styles.content, styles.contentLayout]}>
          					<View style={[styles.header, styles.headerPosition]}>
            						<View style={styles.content1}>
              							<View style={[styles.monogram, styles.monogramLayout]}>
                								<Image style={[styles.backgroundIcon, styles.backgroundPosition]} resizeMode="cover" source="51dp6BGML8L._AC_UF1000,1000_QL80_.png" />
                								<Text style={[styles.initial, styles.initialTypo]}>A</Text>
              							</View>
              							<View style={styles.text}>
                								<Text style={styles.header1}>Fragrance1</Text>
                								<Text style={[styles.subhead, styles.subheadTypo]}>fragrance house</Text>
              							</View>
            						</View>
            						<Image style={styles.mediaIcon} resizeMode="cover" source="Media.png" />
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
            						<Image style={styles.mediaIcon} resizeMode="cover" source="Media.png" />
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
                								<Text style={styles.header1}>Fragrance3</Text>
                								<Text style={[styles.subhead, styles.subheadTypo]}>fragrance house</Text>
              							</View>
            						</View>
            						<Image style={styles.mediaIcon} resizeMode="cover" source="Media.png" />
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
      			<Image style={[styles.folderIcon, styles.iconLayout]} resizeMode="cover" source="folder.png" />
      			<Image style={[styles.editIcon, styles.iconLayout]} resizeMode="cover" source="edit.png" />
      			<Image style={[styles.starIcon, styles.iconLayout]} resizeMode="cover" source="star.png" />
      			<Image style={[styles.settingsIcon, styles.iconLayout]} resizeMode="cover" source="settings.png" />
      			<Image style={[styles.b015ebcd2eac9e80515cb602cd611fIcon, styles.iconPosition]} resizeMode="cover" source="b015ebcd2eac9e80515cb602cd611f72.png" />
      			<Image style={[styles.o198Icon, styles.iconPosition]} resizeMode="cover" source="o.198.png" />
      			<Image style={[styles.kilianparisLogoIcon, styles.iconPosition]} resizeMode="cover" source="kilianparis_logo.png" />
      			<Image style={[styles.imagesIcon, styles.iconPosition]} resizeMode="cover" source="images.png" />
      			<Image style={[styles.pngTransparentGiorgioArmaniIcon, styles.iconPosition]} resizeMode="cover" source="png-transparent-giorgio-armani-italian-fashion-haute-couture-axe-logo-miscellaneous-text-cosmetics-thumbnail.png" />
      			<Image style={[styles.nauticaLogoGraphics4924134Icon, styles.iconPosition]} resizeMode="cover" source="Nautica-Logo-Graphics-4924134-1.png" />
      			<View style={[styles.navigationButton, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source="Star.png" />
        				<Text style={styles.label4} />
      			</View>
      			<View style={[styles.navigationButton1, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source="Star.png" />
        				<Text style={styles.label4} />
      			</View>
      			<View style={[styles.navigationButton2, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source="Star.png" />
        				<Text style={styles.label4} />
      			</View>
      			<View style={[styles.navigationButton3, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source="Star.png" />
        				<Text style={styles.label4} />
      			</View>
      			<View style={[styles.navigationButton4, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source="Star.png" />
        				<Text style={styles.label4} />
      			</View>
      			<View style={[styles.navigationButton5, styles.navigationPosition]}>
        				<Image style={[styles.starIcon1, styles.iconLayout]} resizeMode="cover" source="Star.png" />
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
      			<Image style={[styles.genericAvatarIcon, styles.buttonLayout]} resizeMode="cover" source="Generic avatar.png" />
      			<View style={[styles.button, styles.buttonLayout]}>
        				<View style={[styles.stateLayer8, styles.timeFlexBox]}>
          					<Text style={[styles.labelText, styles.subheadLayout]}>Give me suggestions</Text>
        				</View>
      			</View>
    		</View>);
};

export default IPhone1415ProMax;
