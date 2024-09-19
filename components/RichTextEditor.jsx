import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { theme } from "../constants/theme";

const RichTextEditor = ({ editorRef, onChange }) => {
  return (
    <View style={{ minHeight: 290 }}>
      <RichToolbar
        actions={[
          actions.insertImage,
          actions.setBold,
          actions.setItalic,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertLink,
          actions.keyboard,
          actions.setStrikethrough,
          actions.setUnderline,
          actions.removeFormat,
          actions.insertVideo,
          actions.checkboxList,
          actions.undo,
          actions.redo,
          actions.code,
          actions.line,
          actions.heading1,
          actions.heading4,
        ]}
        style={styles.richBar}
        flatContainerStyle={styles.flatStyle}
        disabled={false}
        editor={editorRef}
        iconMap={{
          [actions.heading1]: ({ tintColor }) => (
            <Text style={{ color: tintColor }}>H1</Text>
          ),
          [actions.heading4]: ({ tintColor }) => (
            <Text style={{ color: tintColor }}>H4</Text>
          ),
          [actions.heading2]: ({ tintColor }) => (
            <Text style={{ color: tintColor }}>H2</Text>
          ),
        }}
        selectedIconTint={theme.colors.primaryDark}
      />
      <RichEditor
        ref={editorRef}
        containerStyle={styles.rich}
        editorStyle={styles.containerStyle}
        placeholder="What on your mind?"
        onChange={onChange}
        textInteractionEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  richBar: {
    borderTopRightRadius: theme.radius.xl,
    borderTopLeftRadius: theme.radius.xl,
    backgroundColor: theme.colors.gray,
  },
  listStyle: {},
  rich: {
    minHeight: 240,
    flex: 1,
    borderWidth: 1.5,
    borderBottomLeftRadius: theme.radius.xl,
    borderBottomRightRadius: theme.radius.xl,
    borderColor: theme.colors.gray,
    padding: 5,
    borderTopWidth: 0,
  },
  containerStyle: {
    color: theme.colors.textDark,
    placeholderColor: "grey",
  },
  flatStyle: {
    paddingHorizontal: 8,
    gap: 3,
  },
});
export default RichTextEditor;
