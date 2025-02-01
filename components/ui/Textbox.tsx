import { StyleSheet, Image, Platform } from 'react-native';
import { ThemedText, ThemedTextProps } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, View } from 'react-native';
import { Component } from 'react';

export default function Textbox(text: any = "", text_type : ("default" | "link" | "title" | "defaultSemiBold" | "subtitle" | undefined) = "default") {
    if (text_type == undefined)
    {
        text_type = "default";
    }

    var text_obj = (
        <ThemedText type={text_type}>
        {text}
        </ThemedText>
    );

    return (text_obj);
}