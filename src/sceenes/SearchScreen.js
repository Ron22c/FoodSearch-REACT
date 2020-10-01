import React, {useContext} from 'react'
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native'
import Context from '../contexts/Context'
import SearchListComponent from '../components/SearchListComponent'
import {useFetchRestrants} from '../hooks/FetchRestrants'
import { AntDesign } from '@expo/vector-icons'; 

const SearchScreen = () => {
	const {state, updateTerm, updateImages} = useContext(Context)
	const {loadRestraints, effect} = useFetchRestrants(updateImages)

	const filterRestrant = (price, data) => {
		return data.filter(e=> {
			if(e.price === price)
			return e
		})
	} 

	return (
		<View style={{flex:1}}>
			<View style={styles.view}>
				<AntDesign name="search1" size={24} color="black" />
				<TextInput 
					style={styles.input}
					autoCorrect={null}
					autoCapitalize='none'
					placeholder='SEARCH'
					value={state.term}
					onChangeText={(term) => updateTerm(term)}
					onSubmitEditing={() => loadRestraints(state.term)}
				/> 
			</View>
			<ScrollView>
				<SearchListComponent title="BUDGET RESTRANTS" data={filterRestrant('$', state.images)}/>
				<SearchListComponent title="MIDRANGE RESTRANTS" data={filterRestrant('$$', state.images)}/>
				<SearchListComponent title="EXPENCIVE RESTRANTS" data={filterRestrant('$$$', state.images)}/>
				<SearchListComponent title="5 STAR RESTRANTS" data={filterRestrant('$$$$', state.images)}/>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		flex:1,
		padding:5
	},
	view: {
		flexDirection:'row',
		backgroundColor:'#D3D3D3',
		margin:15,
	}
})

export default SearchScreen