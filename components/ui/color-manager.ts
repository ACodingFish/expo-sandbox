import { useColorScheme } from "react-native";

export const enum ColorTheme {
    AUTO,
    LIGHT,
    DARK,
    // maybe add more later
}

export const enum ColorElement {
    APP_BACKGROUND,
    HEADER_BACKGROUND,
    HEADER_ICON,
    BODY_TEXT,
    TINT,   // Selection
    // add more elements
}

var current_theme: ColorTheme = ColorTheme.AUTO;
// colors.ts

const default_color = "#FFFFFF";

const color_palette = {
    light:{
        background:"#fff",
        header:"#D0D0D0",
        icon:"#687076",
        text:"#11181C",
        tint:"#0a7ea4",
    },
    dark:{
        background:"#151718",
        header:"#353636",
        icon:"#9BA1A6",
        text:"#ECEDEE",
        tint:"#fff"
    },
}


export default function PaletteColor(ui_element:ColorElement)
{
    let color : string = default_color;
    let current_palette = GetDisplayedColorTheme();
    switch(ui_element)
    {
        case ColorElement.APP_BACKGROUND:
            color=current_palette.background;
            break;
        case ColorElement.HEADER_BACKGROUND:
            color=current_palette.header;
            break;
        case ColorElement.HEADER_ICON:
            color=current_palette.icon;
            break;
        case ColorElement.BODY_TEXT:
            color=current_palette.text;
            break;
        case ColorElement.TINT:
            color=current_palette.tint;
            break;
        default:
            break;
    }
    return color;
}

// Get App Color Palette
function GetDisplayedColorTheme(){
    let ret;
    switch(current_theme)
    {
        case ColorTheme.LIGHT:
            ret=color_palette.light; // Reminder: the actual palette, not enum
            break;
        case ColorTheme.DARK:
            ret=color_palette.dark;
            break;
        case ColorTheme.AUTO:
        default:
            ret = ParseSystemColorTheme();
            break;
    }
    return ret;
}

// Can't use hook within hook -> so had to move actuall call up a few levels
function ParseSystemColorTheme(){
    var system_theme = (useColorScheme() ?? "light");
    let ret = color_palette.dark;
    if (system_theme == "light")
    {
        ret=color_palette.light;
    }
    return ret;
}