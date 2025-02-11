import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import React, {useMemo} from 'react';

import PaletteColor, {ColorElement, ColorTheme} from "@/components/ui/color-manager"
import CalendarDay, {GetWeekDay, IsLeapYear, GetNextDate, GetPrevDate} from './calendar-day';

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
      flexDirection:"row",
      alignContent:"space-evenly"
    },
  });


export default function CalendarWeek({children, year, month, day}:Props) {

    
    let date = {year:year, month:month, day:day};
    // let week = [];
    // week=CreateWeek(children, date);

    const week = useMemo(() =>{
        return CreateWeek(date);
    },[year, month, day]);
    

    return (
        <View style={[styles.content,{backgroundColor:PaletteColor(ColorElement.HEADER_BACKGROUND)}]}>
            { week.map((date,index) => (
                <View key={index}style={[styles.content,{backgroundColor:PaletteColor(ColorElement.HEADER_BACKGROUND)}]}>
                    {CreateWeekday(children, date)}
                 </View>
                 ))}
            {/* { week.map(({year, month, day}) =>  CreateWeekday(children, {year, month, day}))} */}
            {/* {CreateWeek(children, date)} */}
            {/* {week} */}
        </View>
    );
}

function CreateWeek(date:{year:number, month:number, day:number})
{    
    let week_index = GetWeekDay(date.year, date.month, date.day);
    let week = [];
    for (let  i = 0; i < 7; i++)
    {
        let tmp_date = date;
        if (i<week_index) {
            for (let j = i; j < week_index; j++)        // For days earlier in the week
            {
                tmp_date = GetPrevDate(tmp_date);
            }
        } else if (i>week_index) {
            for (let j = i; j > week_index; j--)        // for days later in the week
            {
                tmp_date = GetNextDate(tmp_date);
            }
        } // else today's date
        week.push(tmp_date);
        // week.push(CreateWeekday(children,tmp_date))
    }
    return (week);
}


function CreateWeekday(children:React.ReactNode, date:{year:number, month:number, day:number})
{
    return (
        <CalendarDay children={children} year={date.year} month={date.month} day={date.day}></CalendarDay>
    );
}

