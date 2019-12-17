import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', image: require('./assets/markvWave.jpg') };
  }

  render() {
    // const response = await fetch(`http://localhost:3000/${id}`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //    body: JSON.stringify(newPartner)
    // })
    // let responseJSON = await response.json()
    // console.log(responseJSON, "responseJSON")

    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          alignItems: 'center'
        }}
      >
        <TextInput
          placeholder={'Enter the username'}
          style={{ height: 42, width: '80%', borderBottomWidth: 1 }}
        ></TextInput>
        <TextInput
          placeholder={'Enter the password'}
          style={{
            height: 42,
            width: '80%',
            borderBottomWidth: 1,
            marginTop: '5%'
          }}
        ></TextInput>
        <View style={{ marginTop: '80%', width: '80%' }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: 42,
              width: '80%',
              justifyContent: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
              backgroundColor: 'black'
            }}
          >
            <Text style={{ color: 'white' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
