import React from 'react'
import {View,Text,FlatList,Image,StyleSheet} from 'react-native'
import RestraintComponent from './RestraintComponent'

const SearchListComponent = (props) => {
	if(props.data.length <1) {
		return null
	}
	return (
		<View>
			<Text style={styles.text}>{props.title}</Text>
			<FlatList 
				horizontal
				showsHorizontalScrollIndicator={false}
				data = {props.data}
				keyExtractor = {item => item.alias}
				renderItem = {({item})=>{
					return (
						<RestraintComponent item = {item}/>
					)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		margin:10,
		fontWeight:'bold',
		fontSize:20
	}
})

export default SearchListComponent