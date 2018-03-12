/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

const Input = ({placeholder, text, onChangeText, editable}) => (
  <View style={styles.container}>
    <TextInput />
  </View>
);

export {Input};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
