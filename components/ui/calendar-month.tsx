import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PaletteColor, {ColorElement, ColorTheme} from "@/components/ui/color-manager"
import CalendarDay, {GetWeekDay, IsLeapYear} from './calendar-day';
import CalendarWeek from './calendar-week';

type Props = PropsWithChildren<{
    //headerImage: ReactElement;
    year: number,
    month: number,
    day: number,
    }>;
  
const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 0,
        gap: 0,
        width:"100%",
        alignSelf: "center",
        overflow: 'hidden',
        flexDirection:"column",
        alignContent:"space-evenly"
        },
    });

export default function CalendarMonth({children, year, month, day}:Props) {
    return (
        <View style={[
            styles.content, 
            {backgroundColor:PaletteColor(ColorElement.APP_BACKGROUND)}
            ]}>
            <CalendarWeek children={children} year={year} month={month} day={day}></CalendarWeek>
            <CalendarWeek children={children} year={year} month={month} day={day}></CalendarWeek>
            <CalendarWeek children={children} year={year} month={month} day={day}></CalendarWeek>
            <CalendarWeek children={children} year={year} month={month} day={day}></CalendarWeek>
        </View>
    );
}