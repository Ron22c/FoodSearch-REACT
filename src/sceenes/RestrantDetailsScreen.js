import React, {useEffect, useState} from 'react'
import {Text, View, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp'

const RestrantDetailsScreen = (props) => {
	const [item, update] = useState([])
	
	const fetchRestraint = async (id) => {
		const response = await yelp.get(`/${id}`)
		update(response.data.photos)
	}

	useEffect(() => {
		fetchRestraint(props.navigation.state.params.id)
	}, [])

	if(item.length < 0) {
		return null
	}

	return (
		<View>
			<FlatList 
				data={item}
				keyExtractor={(key)=> key}
				renderItem={({item})=> {
					return (
						<Image
							style={styles.image}
							source={{uri:item}}
						/>
					)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		height: 100,
		width: 300,
		margin:10,
		alignItems:'center'
	}
})

export default RestrantDetailsScreen