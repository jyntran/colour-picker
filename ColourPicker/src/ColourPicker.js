import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class ColourPicker extends Component {
	render() {
		var hue = 0; // degree
		var saturation = 0; // percent
		var lightness = 30; // percent
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 9,
					backgroundColor: 'hsl('
					+ hue + ','
					+ saturation + '%,'
					+ lightness + '%)'}}>
					<Text style={{color: '#FFF', fontSize: 24}}>
						Hue: {hue} Saturation: {saturation} Lightness: {lightness}
					</Text>
				</View>
				<LinearGradient style={{flex: 1}}
					start={{x: 0.0, y: 0.0}}
					end={{x: 1.0, y: 0.0}}
					colors={[
						'#F00',
						'#FF0',
						'#0F0',
						'#0FF',
						'#00F',
						'#F0F',
						'#F00']}
				/>
			</View>
			)
	}
}

AppRegistry.registerComponent('ColourPicker', () => ColourPicker);