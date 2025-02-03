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

// export enum Months{
//     January,
//     February,
//     March,
//     April,
//     May,
//     June,
//     July,
//     August,
//     September,
//     October,
//     November,
//     December
// }

const month_days =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // does not account for leap year
export function GetNextDate(date:{year:number, month:number, day:number})
{
    let max_month_days = month_days[date.month-1];
    let ret = {year:(date.year), month:(date.month), day:(date.day)};
    if (IsLeapYear(date.year) && (date.month==2))
    {
        max_month_days++;
    }
    if ((date.day) < month_days[date.month-1]){
        ret={year:(date.year), month:(date.month), day:(date.day+1)};
    } else if (date.month < 12){
        ret={year:(date.year), month:(date.month+1), day:1};
    } else{
        ret={year:(date.year+1), month:1, day:1};
    }
    return ret;
}

export function GetPrevDate(date:{year:number, month:number, day:number}){
    let max_month_days = month_days[date.month-1];
    let prev_max_month_days = month_days[(date.month+10)%12]; // Subtract 2 months (circular)
    let ret = date;

    if (IsLeapYear(date.year) && (date.month==2))
    {
        max_month_days++;
    }
    if (date.day > 1){
        ret={year:(date.year), month:(date.month), day:(date.day-1)};
    } else if (date.month > 1){
        ret={year:(date.year), month:(date.month-1), day:prev_max_month_days};
    } else{
        ret={year:(date.year-1), month:12, day:31};
    }
    return ret;
}

export function GetLastMonthDay(year:number, month:number)
{
    var ret = month_days[month-1];
    if (IsLeapYear(year) && (month==2))
    {
        ret++;
    }
    return ret;
}