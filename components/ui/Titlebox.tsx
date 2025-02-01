import { StyleSheet, Image, Platform } from 'react-native';
import { ThemedText, ThemedTextProps } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, View } from 'react-native';

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
});
export default function Titlebox(title_text: any = "Title") {
    return BuildTitle(title_text);
};

function BuildTitle(title_text: any) {
  var title_obj = (
  <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">{title_text}</ThemedText>
  </ThemedView>
);

return (title_obj);
}