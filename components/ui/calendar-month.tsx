import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React, {useMemo} from 'react';

import PaletteColor, {ColorElement, ColorTheme} from "@/components/ui/color-manager"
import CalendarDay, {GetWeekDay, IsLeapYear, GetLastMonthDay} from './calendar-day';
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

    let date = {year:year, month:month, day:day};
    const dates = useMemo(() =>{
        return GetWeekDatesForMonth(date);
    },[year, month, day]);
    return (
        <View style={[
            styles.content, 
            {backgroundColor:PaletteColor(ColorElement.HEADER_BACKGROUND)}
            ]}>
            { dates.map((date,index) => (
                    <View key={index}style={[styles.content,{backgroundColor:PaletteColor(ColorElement.HEADER_BACKGROUND)}]}>
                        {CreateSingleWeek(children, date)}
                     </View>
                     ))}
        </View>
    );
}

function GetWeekDatesForMonth(date:{year:number,month:number, day:number})
{
    let ret = [];
    let weeks :number = 5;
    if ((GetWeekDay(date.year, date.month, date.day) == 0) && (date.month == 2)     // The only case its exactly 4 weeks is when the 1st of feb falls on a non-leap year sunday
        && (IsLeapYear(date.year)==false) && (date.day==1))
    {
        weeks--;
    }

    for (var i = 0; i < weeks-1; i++)
    {
        ret.push({year:(date.year), month:(date.month), day:(i*7 +1)});
    }
    ret.push({year:(date.year), month:(date.month), day:(GetLastMonthDay(date.year,date.month))});
    
    return ret;
}

function CreateSingleWeek(children:React.ReactNode, date:{year:number, month:number, day:number})
{
    return (
        <CalendarWeek children={children} year={date.year} month={date.month} day={date.day}></CalendarWeek>
    );
}