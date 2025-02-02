import type { PropsWithChildren, ReactElement } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import PaletteColor, {ColorElement} from "@/components/ui/color-manager"

const styles = StyleSheet.create({
      dayContent: {
        flex: 1,
        alignSelf: "center",
        flexDirection: "column",
        padding: 1,
        gap: 1,
        overflow: 'hidden',
      },
      text:{
        flex: 0,
        textAlign:"center",
        textAlignVertical:"center",
      }
    });



type Props = PropsWithChildren<{
  //headerImage: ReactElement;
  year: number,
  month: number,
  day: number,
}>;


export default function CalendarDay({children, year, month, day}:Props) {
    var weekday = GetShortWeekString(year, month, day);
    return(
        <View style={[styles.dayContent,{backgroundColor:PaletteColor(ColorElement.HEADER_BACKGROUND)}]}>
            <Text style={[styles.text,{color:PaletteColor(ColorElement.BODY_TEXT)}]}>{weekday}</Text>
            <Text style={[styles.text,{color:PaletteColor(ColorElement.BODY_TEXT)}]}>{day.toString()}</Text>
            {/*<Button title="Notes"/>*/}
        </View>
    );
}

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month_code = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
const century_code = [4, 2, 0, 6, 4, 2, 0];     // gregorian dates only :P No Julian dates
//https://artofmemory.com/blog/how-to-calculate-the-day-of-the-week/
export function GetWeekDay(year: number, month: number, day: number){
    let weekday = (Math.floor(1.25*(year%100))                      // year code
                + month_code[month-1]                               // month code
                + century_code[(Math.floor(year/100)-17)]           // century code
                + day                                               // day
    );

    if (IsLeapYear(year) && (month < 3)){                      // leap year
        weekday--;                                     // subtract one if leap year
    }
    weekday%=7;

    return weekday;
}

function GetWeekString(year:number, month:number, day:number)
{
    return weekdays[GetWeekDay(year, month, day)];
}

function GetShortWeekString(year:number, month:number,day:number)
{
    let ret = GetWeekString(year, month, day);
    ret = ret.substring(0,3);
    return ret;
}

export function IsLeapYear(year:number)
{
    return ((year%100)!=0) && ((year%4)==0);
}