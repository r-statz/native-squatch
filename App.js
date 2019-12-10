import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import InputComponent from './InputComponent';

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 36, paddingBottom: 40}}>The Squatch Was Here</Text>
      <Separator />
      
        <Separator/>
        <Separator />
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
    borderBottomWidth: 2,
  },
});


