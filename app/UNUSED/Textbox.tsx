import { StyleSheet, Image, Platform } from 'react-native';
import { ThemedText, ThemedTextProps } from '@/components/ui-example/ThemedText';
import { ThemedView } from '@/components/ui-example/ThemedView';
import { Text, View } from 'react-native';
import { Component } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

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