import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', loggedIn: false };
  }
  validate_field = () => {
    const { username, password } = this.state;
    if (username == '') {
      alert('Username cannot be blank');
      return false;
    }
    if (password == '') {
      alert('password cannot be blank');
      return false;
    }
    return true;
  };

  making_api_call = async () => {
    if (this.validate_field()) {
      const response = await fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.username,
          password: this.state.password
        })
      });
      let responseJSON = await response.json();
      if (responseJSON.loggedIn === true) {
        this.setState({ loggedIn: responseJSON.loggedIn });
      }
    }
    console.log(this.state.loggedIn);
  };

  logout = async () => {
    const response = await fetch(`http://localhost:3000/api/logout`, {
      method: 'DELETE'
    });
    let responseJSON = await response.json();
    if (responseJSON.loggedIn === false) {
      this.setState({ loggedIn: responseJSON.loggedIn });
    }
  };

  render() {
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
        {!this.state.loggedIn && (
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
              onChangeText={value => {
                this.setState({ username: value });
              }}
              placeholder={'Enter the username'}
              style={{ height: 42, width: '80%', borderBottomWidth: 1 }}
            ></TextInput>
            <TextInput
              onChangeText={value => {
                this.setState({ password: value });
              }}
              placeholder={'Enter the password'}
              style={{
                height: 42,
                width: '80%',
                borderBottomWidth: 1,
                marginTop: '5%'
              }}
            ></TextInput>
            <View style={{ marginTop: '10%', width: '80%' }}>
              <TouchableOpacity
                onPress={() => this.making_api_call()}
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
        )}

        {this.state.loggedIn && (
          <View>
            <Image
              style={{
                width: 260,
                height: 160
              }}
              source={require('./assets/tank.png')}
            />
            <Text
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '5%',
                fontSize: 22,
                marginBottom: '10%'
              }}
            >
              Tank U for dropping by!!!
            </Text>

            <TouchableOpacity
              onPress={() => this.logout()}
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
              <Text style={{ color: 'white' }}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
