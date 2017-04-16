import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View
} from 'react-native';

class ColourPicker extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 4, backgroundColor: '#000000'}}>
					<Text style={{color: '#FFF', fontSize: 64}}>
						#000000
					</Text>
				</View>
				<View style={{flex: 2, backgroundColor: '#FF0000'}}></View>
				<View style={{flex: 2, backgroundColor: '#00FF00'}}></View>
				<View style={{flex: 2, backgroundColor: '#0000FF'}}></View>
			</View>
			)
	}
}

AppRegistry.registerComponent('ColourPicker', () => ColourPicker);