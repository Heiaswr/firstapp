import React from "react";
import { View, StyleSheet } from "react-native";

function NewsReading(props) {
  return (
    <View>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.content}>Content</Text>
    </View>
  );
}

export default NewsReading;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    flex: 1,
  },
});
