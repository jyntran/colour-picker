import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View,
	PanResponder,
	Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class ColourPicker extends Component {
	constructor(props) {
		super(props);
		this.dimensions = Dimensions.get('window');
		this.sizeBlock = {x: this.dimensions.width, y: this.dimensions.height * .9};
		this.sizeSpectrum = {x: this.dimensions.width, y: this.dimensions.height * .1};
		this.blockX = this.sizeBlock.x / 100;
		this.blockY = this.sizeBlock.y / 100;
		this.spectrumX = this.sizeSpectrum.x / 360;
		this.state = {
			hue: 0,
			saturation: 100,
			lightness: 50
		}
	}

	componentWillMount() {
		this._panResponderBlock = PanResponder.create({
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: () => true,
			onPanResponderGrant: (e, gestureState) => {},
			onPanResponderMove: (e, gestureState) => {
				this.setState({
					saturation: Math.round(gestureState.moveX / this.blockX),
				  lightness: Math.max(0, -Math.round(gestureState.moveY / this.blockY) + 100)
				});
			},
			onPanResponderRelease: (e, {vx, vy}) => {}
		});
		this._panResponderSpectrum = PanResponder.create({
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: () => true,
			onPanResponderGrant: (e, gestureState) => {},
			onPanResponderMove: (e, gestureState) => {
				this.setState({
					hue: Math.max(0, Math.round(gestureState.moveX / this.spectrumX))
				});
			},
			onPanResponderRelease: (e, {vx, vy}) => {}
		});
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{
					flex: 9,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'hsl('
					+ this.state.hue + ','
					+ this.state.saturation + '%,'
					+ this.state.lightness + '%)'
				}} {...this._panResponderBlock.panHandlers}>
					<Text style={{
						color: '#FFF',
						backgroundColor: 'rgba(0,0,0,0.4)',
						fontSize: 24,
						textAlign: 'center',
						width: '50%'
					}}>
						Hue: {this.state.hue} {'\n'}
						Saturation: {this.state.saturation} {'\n'}
						Lightness: {this.state.lightness} 
					</Text>
				</View>
				<View style={{flex: 1}} {...this._panResponderSpectrum.panHandlers}>
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
			</View>
			)
	}
}

AppRegistry.registerComponent('ColourPicker', () => ColourPicker);