import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Platform } from 'react-native';
import { Images, Colors } from '../Themes';

// Styles
import styles from './Styles/HomeScreenStyles';

class HomeScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconHomeOn}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconHomeOff}
						resizeMode={'contain'}
					/>
				);
			}
		},
		tabBarLabel: ({ focused }) => (
			<View style={Platform.OS === 'ios' ? styles.wrapperTabBarLabel : {}}>
				<Text
					style={[
						styles.label,
						{
							color: focused ? '#FFF' : 'rgba(255, 255, 255, 0.5)'
						}
					]}
				>
					{'Home'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const money = '120,00';
		return (
			<View style={styles.mainContainer}>
				<View style={styles.wrapperHeader}>
					<View style={styles.wrapperInfo}>
						<View>
							<Text style={styles.avaiableMoneyTextStyle}>
								{'Saldo disponível'}
							</Text>
						</View>
						<View style={styles.wrapperMoney}>
							<Text style={styles.moneyTextStyle}>{'R$ ' + money}</Text>
						</View>
						<View style={styles.wrapperWallet}>
							<Image
								source={Images.iconWallet}
								style={styles.wallerStyle}
								resizeMode="stretch"
							/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default HomeScreen;