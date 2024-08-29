import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { actions, RichToolbar } from "react-native-pell-rich-editor";

const RichTextEditor = ({ props }) => {
  return (
    <View style={{ minHeight: 205 }}>
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
        ]}
        style={styles.richBar}
        flatContainerStyle={styles.listStyle}
        editor={props.editorRef}
        disabled={false}
      />
      <Text>RichTextEditor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  richBar: {},
  listStyle: {},
});
export default RichTextEditor;
