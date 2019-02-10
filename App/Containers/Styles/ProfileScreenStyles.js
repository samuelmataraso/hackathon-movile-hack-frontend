import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes/';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		paddingBottom: Metrics.baseMargin
	},
	avatarContent: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: 'white',
		marginBottom: 10,
		alignSelf: 'center',
		position: 'absolute',
		marginTop: 90
	},
	header: {
		backgroundColor: '#4993d6',
		height: 250
	},
	bodyContent: {
		flex: 1,
		alignItems: 'flex-start',
		padding: 20,
		marginTop: 10
	},
	nameContent: {
		fontSize: 28,
		color: '#696969',
		fontWeight: '600'
	},
	emailContent: {
		fontSize: 16,
		color: '#696969',
		marginTop: 10
	},
	logoutContent: {
		alignItems: 'center',
		marginTop: 120
	},
	centered: {
		alignItems: 'center'
	},

	iconHeader: {
		height: 20,
		width: 20
	},
	icon: {
		width: 24,
		height: 24,
		marginRight: 14,
		marginTop: 30
	},
	actionButtonStyle: {
		borderRadius: 5,
		backgroundColor: '#fff',
		borderColor: '#4993d6',
		borderWidth: 2
	},
	labelButtonStyle: {
		color: '#464646'
	},
	label: {
		textAlign: 'center',
		fontSize: 10
	},
	wrapperTabBarLabel: {
		marginTop: Platform.OS === 'ios' ? 15 : 0
	}
});