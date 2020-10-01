import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'

const RestraintComponent = (props) => {
	return (
		<View style={styles.view}>
		<TouchableOpacity onPress={()=> {
			props.navigation.navigate('details', {id: props.item.id})
		}}>
			<Text style={styles.text}>{props.item.name}</Text>
			<Image style={styles.image} source={{uri:props.item.image_url}} />
			<Text style={styles.text}>RATING: {props.item.rating}, REVIEWS: {props.item.review_count}</Text>
		</TouchableOpacity>
		</View>
	)
}

const styles= StyleSheet.create({
	image: {
		height:100,
		width:200
	},
	view: {
		margin:5
	},
	text: {
		margin:5
	}
})

export default withNavigation(RestraintComponent)