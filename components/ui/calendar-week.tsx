import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fragment } from 'react';

import PaletteColor, {ColorElement, ColorTheme} from "@/components/ui/color-manager"
import CalendarDay, {GetWeekDay, IsLeapYear} from './calendar-day';

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

    let week_index = GetWeekDay(year, month, day);
    let week = [];
    var render_week = <div></div>;
    for (let  i = 0; i < 7; i++)
    {
        let date = {year:year, month:month, day:day};
        if (i<week_index) {
            for (let j = i; j < week_index; j++)        // For days earlier in the week
            {
                date = GetPrevDate(date);
            }
        } else if (i>week_index) {
            for (let j = i; j > week_index; j--)        // for days later in the week
            {
                date = GetNextDate(date);
            }
        } // else today's date
        // week.push(date);
        week.push(CreateWeekday(children,date))
    }

    return (
        <View style={[styles.content,{backgroundColor:PaletteColor(ColorElement.HEADER_BACKGROUND)}]}>
            {/* { week.map((date) => { return CreateWeekday(children, date)})} */}
            {/* { week.map(({year, month, day}) =>  CreateWeekday(children, {year, month, day}))} */}
            {week}
        </View>
    );
}


function CreateWeekday(children:any, date:{year:number, month:number, day:number})
{
    return (
        <CalendarDay children={children} year={date.year} month={date.month} day={date.day}></CalendarDay>
    );
}

const month_days =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // does not account for leap year
function GetNextDate(date:{year:number, month:number, day:number})
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

function GetPrevDate(date:{year:number, month:number, day:number}){
    let max_month_days = month_days[date.month-1];
    let ret = date;

    if (IsLeapYear(date.year) && (date.month==2))
    {
        max_month_days++;
    }
    if (date.day > 1){
        ret={year:(date.year), month:(date.month), day:(date.day-1)};
    } else if (date.month < 12){
        ret={year:(date.year), month:(date.month-1), day:max_month_days};
    } else{
        ret={year:(date.year-1), month:12, day:max_month_days};
    }
    return ret;
}