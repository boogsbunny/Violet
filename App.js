import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';
import { TabNavigator } from 'react-navigation';
import SignUp from './client/components/SignUp';
// import ExploreTab from './client/containers/ExploreTab';
// import InboxTab from './client/containers/InboxTab';
// import ProfileTab from './client/containers/ProfileTab';

export default class App extends Component {

	state = { signIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyD4-vcDLj2ZHEkxGsOdxSDhmU9Z8dlgXNI",
			authDomain: "my-awesome-project-7e2a1.firebaseapp.com",
			databaseURL: "https://my-awesome-project-7e2a1.firebaseio.com",
			projectId: "my-awesome-project-7e2a1",
			storageBucket: "my-awesome-project-7e2a1.appspot.com",
			messagingSenderId: "1047716563592"
		});

		firebase.auth().onAuthStateChanged((user) => {
			(user) ? this.setState({signIn: true}) : this.setState({signIn: false});
		});
	}

	async componentWillMount() {
		await Expo.Font.loadAsync({
		  'Roboto': require('native-base/Fonts/Roboto.ttf'),
		  'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
		  'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
		});
	}

	checkSignIn() {
		switch (this.state.signIn) {
			case true:
				return <Explore/>
			case false:
				return <SignUp/>
			default:
				return <Spinner/> 
		}
	}
	render() {
		// const MainNavigator = TabNavigator ({
		// 	ExploreScreen: { screen: ExploreTab },
		// 	InboxScreen: { screen: InboxTab },
		// 	ProfileScreen: { screen: ProfileTab },
		// }, {
		// 	navigationOptions: {
	
		// 	}
		// });
		return (
			// <MainNavigator/>
			<SignUp />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
