import React, { Component } from 'react';
import { Text, TextInput, View, Button, Alert, Image } from 'react-native';

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', image: require('./assets/markvWave.jpg') };
  }

  render() {
    return (
      <View>
        <Image style={{ width: 500, height: 300 }} source={this.state.image} />
        <Button
          title="logBtn"
          onPress={() => this.setState({ image: require('./assets/tank.png') })}
        ></Button>
        <TextInput
          style={{
            borderColor: 'olive',
            borderWidth: 3,
            height: 40,
            width: 300
          }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        ></TextInput>
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')}
        </Text>
      </View>
    );
  }
}
