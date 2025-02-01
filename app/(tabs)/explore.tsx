import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText, ThemedTextProps } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Text, Button, View } from 'react-native';
import React, {Component} from 'react';




function BuildTitle(title_text: any = "Title") {
  var title_obj = (
  <ThemedView style={styles.titleContainer}>
    <ThemedText type="title">{title_text}</ThemedText>
  </ThemedView>
  );

  return (title_obj);
}

function BuildText(text: any = "", text_type : ("default" | "link" | "title" | "defaultSemiBold" | "subtitle" | undefined) = "default") {
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



class Btn extends Component { // make a text changer with a set/get state??? - Probably a bad idea.
  state = { val: 0 };
  constructor(props : any) {
    super(props); // empty props
    this.state = { val: 0 }
    this.update = this.update.bind(this)
  }
  
  update() {
    this.setState({val: this.state.val + 1})
  }
  render() {
    let render_text = "Pressed: " + this.state.val.toString();
    if (this.state.val == 0)
    {
      render_text = "Press Me!";
    }
    return (<Button onPress={() => this.update()} title={render_text}/>);
  }
}


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      {BuildTitle("Hello")}
      {BuildText("This app includes example code to help you get started", "defaultSemiBold")}
      <Btn/>
      <Collapsible title="Table">
        Be nice if there was a table here, huh?
      </Collapsible>
      <Collapsible title="File-based routing">
        <ThemedText>
          {BuildText("Mixing ")}
          {BuildText("bold", "defaultSemiBold")}
          {BuildText(" and ")}
          {BuildText("bold again", "defaultSemiBold")}
        </ThemedText>
        <ThemedText>
          Observable New block and different way of{' '}
          {BuildText("boldly", "defaultSemiBold")}{' '}typing.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
