import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Spinner = ({size='large'}) => {
	return(
		<View style={styles.spinnerStyle}>
			<ActivityIndicator  size={size} color='#ffd740'/>
		</View>
	)
}

const styles = EStyleSheet.create({
	spinnerStyle:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export {Spinner};
