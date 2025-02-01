import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { StyleSheet, Image, Platform } from 'react-native';
import { ThemedText, ThemedTextProps } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, View } from 'react-native';
import { Component } from 'react';
import { SFSymbols6_0 } from 'sf-symbols-typescript';

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});

export default function Scrollbox(img_name: SFSymbols6_0, contents: Array<any>) {
    return BuildScrollBox(img_name, contents);
};

function BuildScrollBox(img_name: SFSymbols6_0, contents: any) {
  var scroll_obj = (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name={img_name}
          style={styles.headerImage}
        />
      }
    >
    
    {
        contents
    }

    </ParallaxScrollView>
  );

    return (scroll_obj);
}
