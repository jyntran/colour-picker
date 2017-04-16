import React, { Component } from 'react';
import {
	Text,
	AppRegistry
} from 'react-native';

class ColourPicker extends Component {
	render() {
		return (
			<Text>Hello, React Native!</Text>
			)
	}
}

AppRegistry.registerComponent('ColourPicker', () => ColourPicker);