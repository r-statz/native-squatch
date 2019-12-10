import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
  
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 36, paddingBottom: 40}}>The Squatch Was Here</Text>
      <Image
          style={{width: 200, height: 300}}
          source={require('./assets/images.jpeg')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
