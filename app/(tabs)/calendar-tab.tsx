import ParallaxScrollView from "@/components/ui-example/ParallaxScrollView";
import CalendarDay from "@/components/ui/calendar-day";
import { SFSymbols6_0 } from 'sf-symbols-typescript';
import { IconSymbol } from '@/components/ui-example/IconSymbol';
import { StyleSheet, View, type ViewProps } from 'react-native';
import PaletteColor, {ColorElement, ColorTheme} from "@/components/ui/color-manager"
import CalendarWeek from "@/components/ui/calendar-week";


const HEADER_HEIGHT = 250;
const FOOTER_HEIGHT = 250;

const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   container: {
//     flex: 1,
//   },
    content: {
        flex:1,
        width:"100%",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",

        // color:
    },
    header: {
        height: HEADER_HEIGHT,
        overflow: 'hidden',
    },
    footer: {
        height: FOOTER_HEIGHT,
        overflow: "hidden",
    },
//   content: {
//     flex: 1,
//     padding: 32,
//     gap: 16,
//     overflow: 'hidden',
//   },
    calendarView: {
        flex:1,
        width:"80%",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",

        // color:
    },
});

export default function CalendarTab () {
    return(
        <View style={[
            styles.content, 
            {backgroundColor:PaletteColor(ColorElement.APP_BACKGROUND)}
            ]}>
            <View style={[
                styles.header,
                {backgroundColor:PaletteColor(ColorElement.HEADER_BACKGROUND)}
                ]}>
                {/* Make a title/text - make a text styles file */}
            </View>
            <View style={[
                styles.calendarView, 
                {backgroundColor:PaletteColor(ColorElement.APP_BACKGROUND)}
                ]}>
                <CalendarWeek children={1} year={2025} month={2} day={2}></CalendarWeek>
            </View>
            <View style={[
                styles.footer,
                {backgroundColor:PaletteColor(ColorElement.APP_BACKGROUND)}
                ]}>
            </View>
        </View>
    );
}