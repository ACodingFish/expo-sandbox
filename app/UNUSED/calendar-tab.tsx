

import { IconSymbol } from '@/components/ui-example/IconSymbol';
import React from 'react';

import Textbox from '@/app/UNUSED/Textbox';
import Titlebox from '@/app/UNUSED/Titlebox';
import Scrollbox from '@/app/UNUSED/Scrollbox';
import { SFSymbols6_0 } from 'sf-symbols-typescript';
import { Component } from 'react';

const calendar_title: string = "Calendar";
const calendar_description:string = "There are some nice important calendar things you can do below.";
const calendar_description_style = "defaultSemiBold";




export default function TabTwoScreen() {
  var sbx = Scrollbox("chevron.left.forwardslash.chevron.right", GenerateTabContents());

  return (sbx);
}

function GenerateTabContents()
{
  var sbx_contents: Array<any> = [
    Titlebox(calendar_title),
    Textbox(calendar_description, calendar_description_style),
    //TestCalendar(),
  ]
  return(sbx_contents);
}

// TEMPORARY
import { StyleSheet, Image, Platform, Button } from 'react-native';
import { ThemedView } from '@/components/ui-example/ThemedView';
import { Text, View } from 'react-native';
import { ThemedText } from '@/components/ui-example/ThemedText';
const styles = StyleSheet.create({
  gridContainer: {
    width:"100%",
    position: "relative",
    alignSelf:"center",
    display: "flex",
  },
  cellStyle: {
    flex: 0,  // Resize to container -> 1
    margin: 0,
    width: "14%",
    alignSelf:"flex-start",
    alignItems:"center",
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"#0a7ea4"
  },
  rowStyle:{
    flexDirection: "row",
    alignSelf: "flex-start",
    // alignItems: "center",
    justifyContent: "space-around",
  }
});

function TestCalendar() // you're trying to do too much here. SIMPLIFY - REDUCE REUSE RECYCLE
{
  var date_data : Array<Array<{date:number,notes:Array<string>}>> = []; //[[{date:1, notes:[]}, {date:2, notes:[]}, {date:3, notes:[]},]];
  var month_days :number = 31;
  var week_arr: Array<{date:number,notes:Array<string>}> = [];

  for (let i = 0; i<month_days; i++)
  {
    if ((i %7 == 0) && (i != 0))
    {
      date_data.push(week_arr);
      week_arr = [];
    }
    week_arr.push({date:(i+1),notes:[]});
  }
  date_data.push(week_arr);

  return (
    <Collapsible title="What's here??">
      <TestModal/>
      <ThemedText>"BOOM!"</ThemedText>
      <ThemedView style={styles.gridContainer}>
        {date_data.map((days) => {
          return Row(days)
          })}
      </ThemedView>
    </Collapsible>
  );
}

function Row(days:Array<{date:number,notes:Array<string>}>) {  
  return (
    <ThemedView style={styles.rowStyle}>
      {days.map((day) => {
          return Day(day.date, day.notes)
        })}
    </ThemedView>
  );
}

function Day(date:number, notes:Array<string>)
{
  return (
    <ThemedView style={styles.cellStyle}>
      <Button onPress={() => DisplayNotes(["notes"])} title={date.toString()}>
        {/* <ThemedText>{date.toString()}</ThemedText> */}
      </Button>
    </ThemedView>
  );
}

import TestModal from '@/app/UNUSED/testmodal';
import { Collapsible } from '@/components/ui-example/Collapsible';

function DisplayNotes(notes:Array<string>)
{
}

