import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputComponent from './InputComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <InputComponent></InputComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 2
  }
});
