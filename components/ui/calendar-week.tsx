import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PaletteColor, {ColorElement, ColorTheme} from "@/components/ui/color-manager"
import CalendarDay from './calendar-day';

type Props = PropsWithChildren<{
  //headerImage: ReactElement;
  year: number,
  month: number,
  day: number,
}>;


export default function CalendarWeek({children, year, month, day}:Props) {
    return (
        <CalendarDay children={1} year={2025} month={2} day={2}></CalendarDay>
    );
}