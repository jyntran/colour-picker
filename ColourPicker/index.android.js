import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

class ColourPicker extends Component {
  render() {
    return (
      <Text>
          Hello React Native!
      </Text>
    );
  }
}

AppRegistry.registerComponent('ColourPicker', () => ColourPicker);
