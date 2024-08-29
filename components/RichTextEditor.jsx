import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { actions, RichToolbar } from "react-native-pell-rich-editor";
import { theme } from "../constants/theme";

const RichTextEditor = ({ editorRef, onChange }) => {
  return (
    <View style={{ minHeight: 285 }}>
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
        flatContainerStyle={styles.listStyle}
        disabled={false}
        editorRef={editorRef}
        iconMap={{
          [actions.heading1]: ({ tintColor }) => (
            <Text style={{ color: tintColor }}>H1</Text>
          ),
          [actions.heading4]: ({ tintColor }) => (
            <Text style={{ color: tintColor }}>H4</Text>
          ),
        }}
        selectedIconTint={theme.colors.primaryDark}
      />
      <RichTextEditor
        ref={editorRef}
        containerStyle={styles.rich}
        placeholder={"What's on your mind"}
        onChange={onChange}
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
  rich: {},
});
export default RichTextEditor;
