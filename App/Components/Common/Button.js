import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const Button =({onPress, children}) => {
	const {buttonStyle, textStyle} = styles;
	return(
		<TouchableOpacity style={buttonStyle} onPress={onPress}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	)
}


const styles = EStyleSheet.create({
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginTop: 5,
		marginBottom: 5,
	}
})
export {Button};
